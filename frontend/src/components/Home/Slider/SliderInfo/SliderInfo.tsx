import React from 'react'
import { LinkButton } from '../../../UI/Button/LinkButton'
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
                <LinkButton btnClass='ButtonBlue' path='/about'>{sliderButtonInfo}</LinkButton>
            </div>
        </div>
    )
}
