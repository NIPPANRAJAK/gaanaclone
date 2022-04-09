import React from "react";
import './style.css'
import scrolldown from"../Category/image/scrolldown.jpg.png"

const Category = () => {
    return (
        <>
            <div id="category">
                <div>All</div>
                <div>Treanding Songs</div>
                <div>New Songs</div>
                <div>Old Songs</div>
                <div>
                    <div class="scrolldown">
                        Moods & Genres
                        <img src={scrolldown} />
                    </div>
                </div>
                <div>Album</div>
                <div>Radio</div>
                <div>Podcast</div>
                <div>My Music</div>
            </div>
        </>
    )
}

export default Category;