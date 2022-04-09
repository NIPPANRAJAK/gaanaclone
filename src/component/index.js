import React from "react";
import Category from "./Category/Category";
import ImageSlider from "./ImageSlider/ImageSlider";
import Music from "./Music/Music";
import Navbar from "./Navbar/Navbar";
import NewReleases from "./NewReleases/NewReleases";


const Index = () => {
    return (
        <>
            <Navbar />
            <Category />
            <ImageSlider />
            <Music />
            <NewReleases/>
        </>
    )

}

export default Index;