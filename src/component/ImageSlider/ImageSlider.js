import React from "react";
import './style.css'
import image1 from "../ImageSlider/image/image1.jpg"
import image2 from "../ImageSlider/image/image2.jpg"
import image3 from "../ImageSlider/image/image3.jpg"
import image4 from "../ImageSlider/image/image4.jpg"
import image5 from "../ImageSlider/image/image5.jpg"
import Carousel, { CarouselItem } from "../../carousel/Carousel";

const ImageSlider = () => {
    return (
        <>
            <div className="slider">
                <Carousel>
                    <CarouselItem>
                        <img className="component" src={image1} />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="component" src={image2} />
                    </CarouselItem>
                    <CarouselItem >
                        <img className="component" src={image3} />
                    </CarouselItem >
                    <CarouselItem >
                        <img className="component" src={image4} />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="component" src={image5} />
                    </CarouselItem>
                </Carousel>
            </div>
        </>
    )
}
export default ImageSlider;