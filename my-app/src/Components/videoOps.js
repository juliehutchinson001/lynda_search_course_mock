import React from 'react';

const VideoOptions = ({ classOptions, createPlayList }) => (
    
    <section className={classOptions} >
        <h1>Add to...</h1>
        <ul>
            <li onClick={ createPlayList } >New Playlist
                <span></span>
            </li>
            <li>Playlist
                <span></span>
            </li>
        </ul>
    </section>
        );


export default VideoOptions;