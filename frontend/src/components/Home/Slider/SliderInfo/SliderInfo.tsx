import React from 'react'
import { Button } from '../../../UI/Button/Button'
import styles from './SliderInfo.module.scss'

interface SliderInfoProps {
    sliderInfo: string;
    sliderButtonInfo: string;
}

export const SliderInfo: React.FC<SliderInfoProps> = ({ sliderInfo, sliderButtonInfo }) => {
    return (
        <div className={styles.SliderInfo}>
            <div className={styles.SliderText}>
                <h3>{sliderInfo}</h3>
                <Button btnClass='ButtonBlue' path='/about'>{sliderButtonInfo}</Button>
            </div>
        </div>
    )
}
