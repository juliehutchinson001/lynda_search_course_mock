This is a mock site of Lynda Learning website built on react, sass and node (back-end server)

Lynda Mock

kyrl
kirl
Kiyrl
Kyirl
Kry
kri

/Home Func
. When I click on Main Header, take me back to home.
. Add functionality of search (onChange to search)
. show all courses button of curses available

/PlayList
. Have a default playlist: “My Playlist”
. Show at all times Playlist field with mock (blurred) video fields when empty.
. Show all button of playlist
. Re-route the person to Playlists available /PlayList
. Each Playlist should have:
. Videos Added
. Name of Playlist
. Count - number of videos

/Videos
. Have a + button that displays a pop-up with:
. Header: Add to…
. Options: # New Playlist: - header: title and button - Playlist name: - Description: - ‘Create’ button # My playlist: default option: - Toggle button +/√/-

————————————————-

```javascript
import React, { Component } from "react";

// TODO  oct 31 Halloween: Create a playlist functionality
// TODONE oct 31 Halloween: Rename scss components to reflect changes in file names

class PlaylistModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: null,
        };
    }

    render() {
        return (
            <PlaylistModalPresentation
                courseId={this.props.courseId}
                activeModal={this.props.activeModal}
                isOpen={this.state.isOpen}
                openNewPlaylist={() => this.setState({ isOpen: true })}
                hideNewPlaylist={() => this.setState({ isOpen: false })}
            />
        );
    }
}

const PlaylistModalPresentation = ({
    courseId,
    activeModal,
    isOpen,
    openNewPlaylist,
    hideNewPlaylist,
}) => {
    return (
        <div className={courseId === activeModal ? "show" : "hide"}>
            <button onClick={openNewPlaylist}>Open New Playlist</button>
            <div className={isOpen ? "show" : "hide"}>
                Content
                <button onClick={hideNewPlaylist}>{"<"}</button>
            </div>
        </div>
    );
};

/*const PlaylistModal = ({addVideoToPlaylist, activeModal, courseId, showPlaylistForm, isNewModalActive, playlists }) => (

    <div className={ activeModal === courseId ? "modal show-modal" : "modal hide-modal" } >
        <h1 className="modal__header" >Add to...</h1>
        <button
            type='button'
            onClick={ showPlaylistForm }
            >New Playlist
        </button>
        { playlists.map((playlist, index) => (
            <button
                key={ index }
                type='button'
                className={ activeModal === courseId ? "modal__list--existing show-modal" : "modal__list--existing hide-modal" }
                onClick={ addVideoToPlaylist(playlist) }
                >{ playlist.name }
                <span>+</span>
            </button>
            )
        )}

    </div>
);*/
/*
const NewPlaylist = ({ isNewModalActive, newPlaylist, openPlaylistModal, handleInputDescription, handleInputName, createPlayList }) => (

    <div className={ isNewModalActive === true ? "show-modal" : "hide-modal"
    } >
        <header className="newPlaylist__header" >
            <h1 className="newPlaylist__title" >Create Playlist</h1>
            <button
                className="newPlaylist__button--return"
                type='button'
                onClick={ openPlaylistModal }
            >
                {" < "}
            </button>
        </header>

        <form className="newPlaylist__form--new" onSubmit={ createPlayList } >
            <label>Playlist name
                <input
                    className="newPlaylist__input--name"
                    name='playlist-name'
                    type='text'
                    onChange={ handleInputName }
                    required
                />
            </label>
            <label>Description
                <input
                    className="newPlaylist__input--description"
                    name='playlist-description'
                    type='text'
                    onChange={ handleInputDescription }
                />
            </label>
            <input
                type='submit'
                value='Create'
                onClick={ openPlaylistModal }
            />
        </form>
    </div>
);
*/

export default PlaylistModal;
```

```javascript
<div className="App">
    <HeaderContainer />
    <header className="header" >
        <article className="hr header__intro" >
            <h1 class="hr header__title"
                    >Lynda Learning
            </h1>
            <p className="hr header__description" >
                Welcome to… Type In _ selection _ options:
            </p>
            <ul className="hr header__options" >
                <li>Java</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>React</li>
            </ul>
        </article>
        <article className="header header__search" >
            <input className="header header__searchBar" />
            <button className="hr header__primary-button"
                            >Search
            </button>
            <button className="hr header__secondary-button">
                Show All
            </button>
        </article>
    </header>
//————————————————————————
    <Playlist /> /* left side */
    <section id="playlists" className="playlist" >
        <h1 className="pt playlist__header"
                >Playlists
        </h1>
        <a className="pt playlist__link"
            href="#playlists"
            > Show All
        </a>
        <ul className="pt playlist__group" >
            <li className="pt playlist__list" >
                <a className="pt playlist__link--single"
                    >Here goes each one of my playlists

                    <img className="pt pt__image"
                    src=""
                    alt="playlist-thumbnail"
				/>
                    <span className="pt pt__header"
						>Name of Playlist
			    </span>
                    <span className="pt pt__count"
						>Count:
			    </span>
                </a>
            </li>
        </ul>
    </section>

//————————————————————————
        Center     <CourseContainer />     Center
    <section className="courses” >
        <div className="courses courses__credentials" >
            <h1 className="cs courses__title"
                >{ title }
            </h1>
            <img className="cs courses__image"
                    src={ img }
                    alt="Course Thumbnail"
            />
            <h4 className="cs courses__author"
                >Author: { author }
            </h4>
        </div>
        <button className="cs courses__playlist--identifier"
                    type="button"
                    >{ valid ? '+' : ' ' }
        </button>
    </section>

                                        OR

    <section>
                Error
    </section>

    <Footer />
    <footer>By
        <small>Julie Hutchinson</small>
    </footer>
</div>

```
