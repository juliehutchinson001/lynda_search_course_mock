import React from 'react';

const Playlists = () => (

    <section id="playlists" className="playlist" >
        <h1 className="playlist playlist__header" >Playlists</h1>
        <a className="playlist playlist__link--whole" href="#playlists" > Show All </a>
        <ul className="playlist playlist__group" >
            <li className="playlist playlist__list" >
                <a className="playlist playlist__link--single" >Here goes each one of my playlists
                    <img className="playlist playlist__image" src="" alt="playlist-thumbnail" />
                    <span className="playlist playlist__header" >Name of Playlist</span>
                    <span className="playlist playlist__count" >Count: </span>
                </a>
            </li>        
        </ul>
    </section>

);

export default Playlists;
