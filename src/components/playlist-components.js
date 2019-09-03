import React from "react";

const PlaylistSection = ({ playLists, isInPlaylist }) => (
  <aside id="playlists" className="playlist">
    <header className="playlist__header-container">
      <h1 className="playlist__header">Playlists</h1>
      <a className="playlist__link--whole" href="#playlists">
        Show All
      </a>
    </header>
    <section className="playlist__legend--middle-section">
      <p className="playlist__legend-text">
        Add courses by clicking the &#43; to save and watch later.
      </p>
    </section>
    <PlaylistComponent playLists={playLists} isInPlaylist={isInPlaylist} />
  </aside>
);

const PlaylistComponent = ({ playLists, isInPlaylist }) => {
  const allPlaylists = playLists.map(({ name, count }) => (
    <li className="playlist__list" key={name}>
      <a href=".playlist.image" className="playlist__link--single">
        <img
          className="playlist__image"
          src="https://via.placeholder.com/110x50"
          alt="playlist-thumbnail"
        />
        <section className="playlist__information">
          <span className="playlist__header">{name}</span>
          <span className="playlist__count">Count: {count}</span>
        </section>
      </a>
    </li>
  ));

  return <ul className="playlist__content-container">{allPlaylists}</ul>;
};

export default PlaylistSection;
