import React from "react";
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import Photo_main from '../shop/image/dark_power_12.png';

export default function DarkPower() {
    return (
        <html>
            <head></head>
            <body>
                <Carousel>
                    <Carousel.Item>
                        <img src={Photo_main} alt="alt mma"/>
                        <Carousel.Caption>
                            <p>First photo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Photo_main} alt="alt mma"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Photo_main} alt="alt mma"/>
                    </Carousel.Item>
                </Carousel>
            </body>
        </html>
    )
}