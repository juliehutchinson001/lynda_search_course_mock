import React from 'react';

const VideoOptions = ({ classOptions, createPlayList }) => (
    
    <section className={"options " + classOptions} >
        <h1 className="options options__header" >Add to...</h1>
        <ul className="options options__list" >
            <li className="options options__list--new" onClick={ createPlayList } >New Playlist
                <span></span>
            </li>
            <li className="options options__list--existing" >Playlist
                <span></span>
            </li>
        </ul>
    </section>
        );


export default VideoOptions;