import React from "react";
import "../Music/style.css"
import m5 from "../Music/image/m5.jpg"
import i1 from "./Image/i1.jpeg"
import i2 from "./Image/i2.jpeg"
import i3 from "./Image/i3.jpeg"
import i4 from "./Image/i4.jpeg"
import MusicCard from "../MusicCard/MusicCard";
const arr =[{image: i1, title:"Jo Mujhe Deewana Kar"},{image:i2, title:"Miss Hairan" }, {image:i3, title:"Dream" },{ image:i4, title:"Familia"} , {image:m5, title:"Tera Saath Ho"}]
const NewReleases = () => {


    return (
        <>
            <h2 className="Heading">
                New Releases
            </h2>

            <div id="allMusic">
                <div className="Music1">
                 {arr.map((item, index)=>{
                        return <MusicCard key={index} index={index} image={item.image} title={item.title}/>
                 })}
                </div>

                <div className="Music1">
                 {arr.map((item, index)=>{
                        return <MusicCard key={index} index={index} image={item.image} title={item.title}/>
                 })}
                </div>

                <div className="Music1">
                 {arr.map((item, index)=>{
                        return <MusicCard key={index} index={index} image={item.image} title={item.title}/>
                 })}
                </div>
            </div>
        </>
    )
}

export default NewReleases;