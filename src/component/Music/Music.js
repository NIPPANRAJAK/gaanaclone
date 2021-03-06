import React from "react";
import "./style.css"
import m1 from "../Music/image/m1.jpg"
import m2 from "../Music/image/m2.jpg"
import m3 from "../Music/image/m3.jpg"
import m4 from "../Music/image/m4.jpg"
import m5 from "../Music/image/m5.jpg"
import MusicCard from "../MusicCard/MusicCard";
const arr =[{image: m1, title:"As it is"},{image:m2, title:"Big Men" }, {image:m3, title:"Mast Nazron se" },{ image:m4, title:"Mera Yaar"} , {image:m5, title:"Tera Saath Ho"}]
const Music = () => {


    return (
        <>
            <h2 className="Heading">
                Trending Songs
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

export default Music;