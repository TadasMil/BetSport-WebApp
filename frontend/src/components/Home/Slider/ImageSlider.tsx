import React from 'react'
import { Images } from '../../../assets/Images/Images'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageSlider.scss"
import { Button } from '../../UI/Button/Button';


export const ImageSlider: React.FC = () => {

    return <Carousel autoPlay showThumbs={false} showStatus={false} showArrows={false} infiniteLoop={true} interval={3000}>
        {
            Images.map(image => <div className="CarouselImg" key={image.id}>
                <h3 className='legend'>{image.text}</h3>
                <Button btnClass='ButtonBlue' path='./home'>Sužinoti daugiau</Button>
                <img src={image.url} alt="img1" />
            </div>)
        }
    </Carousel>
}
