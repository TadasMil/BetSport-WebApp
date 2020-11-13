import React from 'react'
import { Link } from '../../../UI/Button/Link'
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
                <Link btnClass='ButtonBlue' path='/about'>{sliderButtonInfo}</Link>
            </div>
        </div>
    )
}
