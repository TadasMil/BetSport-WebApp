import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "../../../axios/axios"
import { updateUserScore } from '../../../store/actions/userAction'
import { RootState } from '../../../store/reducers'
import { BackEndPoints } from '../../../utilities/BackEndPoints'
import { Howl } from 'howler';
import styles from "./Machine.module.scss";
import { Button } from '../../UI/Button/Button'
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BetField } from '../Bet/BetField'
import { setDisplaySnackbar } from '../../../store/actions/snackbarAction'
import { Slots } from './Slots/Slots'

export interface IMachineItems {
    id: number;
    item: string;
    multiplication: number;
    multiplication2: number;
}

export const machineItems: IMachineItems[] = [
    { id: 1, item: "🃏", multiplication: 20, multiplication2: 10 },
    { id: 7, item: "🎰", multiplication: 15, multiplication2: 7 },
    { id: 6, item: "🎲", multiplication: 10, multiplication2: 5 },
    { id: 4, item: "💰", multiplication: 6, multiplication2: 3 },
    { id: 8, item: "🎱", multiplication: 5, multiplication2: 3 },
    { id: 5, item: "🍒", multiplication: 4, multiplication2: 2 },
    { id: 3, item: "✖️", multiplication: 0, multiplication2: 0 },
    { id: 2, item: "☠️", multiplication: -4, multiplication2: -4 },
];

var spinSound = new Howl({
    src: ['/sounds/spin.mp3'],
    volume: 0.1,
    rate: 0.5,
    format: ['mp3', 'aac']
});

var coinSound = new Howl({
    src: ['/sounds/coin.mp3'],
    volume: 0.2,
    html5: true,
    rate: 1,
    format: ['mp3', 'aac']
});

const GAME_VARIANTS = {
    victory: "Laimėta",
    loss: "Pralaimėta",
};

export enum PRIZE_VARIANTS {
    TRIPLE = "DIDIEJI PRIZAI",
    DOUBLE = "MAŽIEJI PRIZAI",
};

export const Machine: React.FC = () => {
    const [displayEle, setDisplayEle] = useState<string[]>(["🃏", "🃏", "🃏"])
    const [range, setRange] = useState<number>(0);
    const [shouldSpin, setShouldSpin] = useState<boolean>(false);
    const [isSound, setSound] = useState<boolean>(true);
    const [betAmount, setBetAmount] = useState<number>(0);
    const [gameMessage, setGameMessage] = useState<string>(GAME_VARIANTS.victory);
    const [isGameFinished, setUserFinishedTheGame] = useState<boolean>(false);
    const [isGameDone, setIsGameDone] = useState<boolean>(false);
    const [moneyWon, setMoneyWon] = useState<number>(0);
    const [prizeSelection, setPrizeSelection] = useState<PRIZE_VARIANTS>(PRIZE_VARIANTS.TRIPLE);

    const userDetails = useSelector((state: RootState) => {
        return state.user.user;
    })

    const dispatch = useDispatch();

    const calculateWinningAmount = (equalElements: boolean, duplicateElement?: string) => {
        if (equalElements) {
            const multiplication = findCorrectMultiplication(displayEle[0]);
            calculateAmountAndFinnishTheGame(multiplication?.multiplication!);
            return;
        }

        const multiplication = findCorrectMultiplication(duplicateElement);
        calculateAmountAndFinnishTheGame(multiplication?.multiplication2!);
    }

    const findCorrectMultiplication = (duplicateElement: string | undefined) => {
        return machineItems.find(item => item.item === duplicateElement);
    }

    const calculateAmountAndFinnishTheGame = (multiplication: number) => {
        const result = betAmount * multiplication;
        const updatedScore = userDetails?.score! + result;
        setMoneyWon(state => state + result);
        setGameMessage(GAME_VARIANTS.victory);
        dispatch(updateUserScore(updatedScore));
        setUserFinishedTheGame(true);
        setIsGameDone(false);
    }

    const reduceUserMoneyScore = () => {
        const reducedAmount = userDetails?.score! - betAmount;
        dispatch(updateUserScore(reducedAmount));
    }

    const getGameResults = () => {
        if (equalElements(displayEle)) {
            return calculateWinningAmount(true);
        }

        const getMatches = hasDuplicates(displayEle).toString();

        if (getMatches && getMatches.length) {
            return calculateWinningAmount(false, getMatches);
        }

        setGameMessage(GAME_VARIANTS.loss);
        reduceUserMoneyScore();
        setUserFinishedTheGame(true);
        setIsGameDone(false);
    }

    const equalElements = (arr: string[]) => arr.every(v => v === arr[0]);

    const hasDuplicates = (array: string[]) => array.filter((e, i, a) => a.indexOf(e) !== i);

    const calculateUserProgress = (didUserWon: number) => {
        const newProgress = {
            score: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            moneyWon: 0,
            moneyLost: 0,
        }

        if (didUserWon) {
            newProgress.score = userDetails?.score!;
            newProgress.gamesPlayed = 1;
            newProgress.gamesWon = 1;
            newProgress.moneyLost = 0;
            newProgress.moneyWon = moneyWon;
            setMoneyWon(0);
        }

        if (!didUserWon) {
            newProgress.score = userDetails?.score!;
            newProgress.gamesPlayed = 1;
            newProgress.gamesWon = 0;
            newProgress.moneyWon = 0;
            newProgress.moneyLost = Number(betAmount);
        }
        return newProgress;
    }

    useEffect(() => {
        if (isGameFinished) {
            const userProgressData = calculateUserProgress(moneyWon);
            console.log(userProgressData);

            axios.put(BackEndPoints.updateUserDetails, userProgressData, {
                headers: {
                    Authorization: 'Bearer ' + userDetails?.accessToken
                }
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
            setUserFinishedTheGame(false);
        }
    }, [isGameFinished])

    useEffect(() => {
        if (isGameDone) {
            getGameResults();
        }
    }, [isGameDone])

    useEffect(() => {
        if (range > 2) {
            setRange(0);
            setIsGameDone(true);
        }

        if (shouldSpin) {
            getValue();
        }
    }, [shouldSpin])

    useEffect(() => {
        if (range >= 1) {
            isSound && coinSound.play();
            getValue();
        }

        if (range > 2) {
            setShouldSpin(false);
        }
    }, [range]);

    const getValue = () => {
        if (range < 3) {
            const timeout = setInterval(() => {
                const number = returnRandom(0, 7);
                getNewImage(number);
            }, 50)

            setTimeout(() => {
                clearInterval(timeout);
                setRange(state => state + 1);
            }, 1000)
        }
    }

    const changeImage = () => {
        if (betAmount > userDetails!.score || betAmount === 0) {
            dispatch(setDisplaySnackbar("Nera tiek pinigų"));
            return;
        }
        setShouldSpin(true);
    }

    const getNewImage = (number: number) => {
        isSound && spinSound.play();
        const cloneArr = [...displayEle];
        const clonedArray = machineItems.map(item => {
            return item.item;
        })


        for (let i = 0; i < 3; i++) {
            if (range === 0) {
                cloneArr[i] = clonedArray[number];
            }

            if (range != 2) {
                if (range > 0 && i > 0) {
                    cloneArr[i] = clonedArray[number];
                }
            }

            if (range === 2 && i === 2) {
                cloneArr[i] = clonedArray[number];
            }
        }
        setDisplayEle(cloneArr);
    }

    const setSoundSettings = () => {
        setSound(state => !state);
    }

    const validateInputField = (e: any) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setBetAmount(e.target.value)
        }
    }

    const returnRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handlePrizeChangeList = () => {
        if (prizeSelection === PRIZE_VARIANTS.TRIPLE) {
            setPrizeSelection(PRIZE_VARIANTS.DOUBLE);
        } else {
            setPrizeSelection(PRIZE_VARIANTS.TRIPLE);
        }
    }
    return (
        <div className={styles.MachineGameLayout}>
            <div className={styles.MachineGameBox}>
                <div className={styles.GameBox}>
                    <div className={styles.Gameplay}>
                        <div className={styles.Winner}>
                            <h3>{gameMessage}</h3>
                        </div>
                        <div className={styles.Slots}>
                            {displayEle.map((item: any, index: any) => {
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                        <BetField betAmount={betAmount} validateInputField={validateInputField} />
                        <Button btnClass="ButtonRoulette" isDisabled={false} onClick={() => changeImage()}>Sukti</Button>
                        <Button btnClass="ButtonVolume" onClick={() => setSoundSettings()}>
                            {isSound ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeMute} />}
                        </Button>
                    </div>
                    <div className={styles.SlotsBox}>
                        <Slots prizeSelection={prizeSelection} handlePrizeChangeList={handlePrizeChangeList} />
                    </div>
                </div>

            </div>
        </div>
    )
}