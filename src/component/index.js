import React from "react";
import Category from "./Category/Category";
import ImageSlider from "./ImageSlider/ImageSlider";
import Music from "./Music/Music";
import Navbar from "./Navbar/Navbar";


const Index = () => {
    return (
        <>
            <Navbar />
            <Category />
            <ImageSlider />
            <Music />
        </>
    )

}

export default Index;