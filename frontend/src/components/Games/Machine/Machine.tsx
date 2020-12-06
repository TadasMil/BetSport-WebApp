import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "../../../axios/axios"
import { removeUser } from '../../../store/actions/userAction'
import { RootState } from '../../../store/reducers'
import { BackEndPoints } from '../../../utilities/BackEndPoints'
import { Howl } from 'howler';
import styles from "./Machine.module.scss";
import { Title } from '../Title/Title'
import { Button } from '../../UI/Button/Button'
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BetField } from '../Bet/BetField'
import { setDisplaySnackbar } from '../../../store/actions/snackbarAction'


const machineItems = {
    items: [
        { id: 1, item: "🃏", multiplication: 20 },
        { id: 2, item: "☠️", multiplication: -2 },
        { id: 3, item: "✖️", multiplication: 0 },
        { id: 4, item: "💰", multiplication: 3 },
        { id: 5, item: "🍒", multiplication: 2 },
        { id: 6, item: "🎲", multiplication: 10 },
        { id: 7, item: "🎰", multiplication: 15 },
        { id: 8, item: "🎱", multiplication: 5 },
    ]
};

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

export const Machine = () => {
    const [displayEle, setDisplayEle] = useState<string[]>(["🃏", "🃏", "🃏"])
    const [range, setRange] = useState<number>(0);
    const [shouldSpin, setShouldSpin] = useState<boolean>(false);
    const [isGameDone, setIsGameDone] = useState<boolean>(true);
    const [isSound, setSound] = useState<boolean>(true);
    const [betAmount, setBetAmount] = useState<number>(0);
    const [gameMessage, setGameMessage] = useState<string>(GAME_VARIANTS.victory);

    const userScore = useSelector((state: RootState) => {
        return state.user.user?.score;
    })

    const dispatch = useDispatch();

    const calculateWinningAmount = (equalElements: boolean, duplicateElement?: string[]) => {
        if (equalElements) {
            const getMultiplication = machineItems.items.filter(item => item.item === displayEle[0]).map(item => item.multiplication);
            const result = betAmount * getMultiplication[0];
            console.log(result);
        }
    }

    const getGameResults = () => {
        if (equalElements(displayEle)) {
            console.log("equal")
            return calculateWinningAmount(true);
        }

        const getMatches = hasDuplicates(displayEle);

        if (getMatches && getMatches.length) {
            console.log("here in duplicates")
            return calculateWinningAmount(false, getMatches);
        }

        setGameMessage(GAME_VARIANTS.loss);
    }

    const equalElements = (arr: string[]) => arr.every(v => v === arr[0]);

    const hasDuplicates = (array: string[]) => array.filter((e, i, a) => a.indexOf(e) !== i);

    useEffect(() => {
        getGameResults();
    }, [isGameDone])

    useEffect(() => {
        if (range > 2) {
            setRange(0);
            setIsGameDone(state => !state);
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
        if (betAmount > userScore!) {
            dispatch(setDisplaySnackbar("Nera tiek pinigų"));
            return;
        }
        setShouldSpin(true);
    }

    const getNewImage = (number: number) => {
        const cloneArr = [...displayEle];
        const clonedArray = machineItems.items.map(item => {
            return item.item;
        })

        isSound && spinSound.play();

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
    return (
        <div className={styles.MachineGameLayout}>
            <div className={styles.MachineGameBox}>
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
        </div>
    )
}