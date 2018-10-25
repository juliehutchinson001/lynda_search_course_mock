import React from 'react';

const Playlists = () => (

    <section id="playlists" className="playlist" >
        <h1 className="playlist playlist__header" >Playlists</h1>
        <a className="playlist playlist__link" href="#playlists" > Show All </a>
        <ul className="playlist playlist__list" >
            <li>
                <a>Here goes each one of my playlists
                    <img src="" alt="playlist thumbnail" />
                    <span>Name of Playlist</span>
                    <span>Count: </span>
                </a>
            </li>        
        </ul>
    </section>

);

export default Playlists;
