import React,{useState} from "react";
import "../Music/style.css"
import playbutton1 from "./image/playbutton1.png"

const MusicCard = ({image, title, index})=>{
    const[handleHover, setHandleHover] = useState(null)
    return(
        <div id={title} className="MusicCard" onMouseEnter={()=>{setHandleHover(index)}} onMouseLeave={()=>{setHandleHover(null)}}>
            <div className="playButton" style={{display:handleHover==index?"flex": "none"}}>
                <img src={playbutton1} style={{height: "100%", width:"100%"}} />
            </div>
          <img className="music" src={image}/>
          <p>{title}</p>
        </div>
    )
}
export default MusicCard;