import React from 'react'
import { Description } from '../components/Home/Description/Description'
import { ImageSlider } from '../components/Home/Slider/ImageSlider'
import styles from "./Home.module.scss"

export const Home: React.FC = () => {
    return (
        <>
            <ImageSlider />
            <div className={styles.Home}>
                <Description />
            </div>
        </>
    )
}
