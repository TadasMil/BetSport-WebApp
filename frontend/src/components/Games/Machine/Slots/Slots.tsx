import React from 'react'
import { IMachineItems, machineItems, PRIZE_VARIANTS } from "../Machine"
import { Slot } from './Slot/Slot'
import { TiArrowBack, TiArrowForward } from "react-icons/ti"
import styles from "./Slots.module.scss"
import { Title } from '../../Title/Title'
import { Button } from '../../../UI/Button/Button'

interface SlotsProps {
    prizeSelection: PRIZE_VARIANTS;
    handlePrizeChangeList: () => void;
}

export const Slots: React.FC<SlotsProps> = ({ prizeSelection, handlePrizeChangeList }) => {
    return (
        <>
            <div className={styles.SlotsList}>
                {machineItems.map((item: IMachineItems) => {
                    return (
                        <div key={item.id} className={styles.SlotRowsBox}>
                            {
                                PRIZE_VARIANTS.TRIPLE === prizeSelection ?
                                    <div className={styles.SlotRow}>
                                        <div>
                                            <Slot>{item.item}</Slot>
                                            <Slot>{item.item}</Slot>
                                            <Slot>{item.item}</Slot>
                                        </div>
                                        <p>Statymas x {item.multiplication}</p>
                                    </div>
                                    :
                                    <div className={styles.SlotRow}>
                                        <div>
                                            <Slot>{item.item}</Slot>
                                            <Slot>{item.item}</Slot>
                                        </div>
                                        <p>Statymas x {item.multiplication2}</p>
                                    </div>
                            }
                        </div>

                    )
                })}
            </div>
            <div className={styles.Arrows}>
                <Button btnClass="" onClick={handlePrizeChangeList}><TiArrowBack /></Button>
                <Title name={prizeSelection === PRIZE_VARIANTS.TRIPLE ? PRIZE_VARIANTS.TRIPLE : PRIZE_VARIANTS.DOUBLE}></Title>
                <Button btnClass="" onClick={handlePrizeChangeList}><TiArrowForward /></Button>
            </div>
        </>
    )
}
