import React from 'react'
import { Images } from '../../../assets/Images/Images'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss"
import { SliderInfo } from './SliderInfo/SliderInfo';

export const ImageSlider: React.FC = () => {
    const slideSettings = {
        infinite: true,
        speed: 500,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    }
    const presentSlides = () => {
        return Images.map(image => {
            return (
                <div key={image.id}>
                    <SliderInfo sliderInfo={image.text} sliderButtonInfo={image.buttonText} />
                    <img src={image.url} alt="slider" />
                </div>
            )
        })
    }
    return (
        <>
            <div className="Container">
                <Slider {...slideSettings} >
                    {presentSlides()}
                </Slider>
            </div>
        </>
    )
}
