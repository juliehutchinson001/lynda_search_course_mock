import React from "react";

const PlaylistSection = () => (
  <section id="playlists" className="playlist">
    <h1 className="playlist__header">Playlists</h1>
    <a className="playlist__link--whole" href="#playlists">
      {" "}
      Show All{" "}
    </a>
    <ul className="playlist__group">
      <li className="playlist__list">
        {"TODO: DUMMY HREF, TO FIX LATER"}
        <a href=".playlist.image" className="playlist__link--single">
          <img
            className="playlist__image"
            src="https://via.placeholder.com/110x50"
            alt="playlist-thumbnail"
          />
          <span className="playlist__header">Name of Playlist</span>
          <span className="playlist__count">Count: </span>
        </a>
      </li>
    </ul>
  </section>
);

export default PlaylistSection;
