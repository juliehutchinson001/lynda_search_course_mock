import React, { Component, Fragment } from 'react';

// TODO by Juan oct 31 Halloween: Create a playlist functionality
// TODONE by Juan oct 31 Halloween: Rename scss components to reflect changes in file names

class ModalContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: null
        }

        this.showAllPlaylists = this.showAllPlaylists.bind(this);
        this.showPlaylistModal = this.showPlaylistModal.bind(this);
        this.hidePlaylistModal = this.hidePlaylistModal.bind(this);
    }

    showPlaylistModal() {
        this.setState({ showModal: true });
    }

    hidePlaylistModal() {
        this.setState({ showModal: false });
    }

    showAllPlaylists() {

        const { addVideoToPlaylist } = this.props;

        return (
            this.props.playlists.map((playlist, index) => (
                <button 
                    key={ index }
                    type='button' 
                    className="modal__list--existing"
                    onClick={ (playlist) => addVideoToPlaylist(playlist) }
                    >{ playlist.name }
                    <span>+</span>
                </button>
                )
            )
        );

    }

    render() {


        const { 
            playlists, 
            handleInputDescription, 
            handleInputName, 
            addVideoToPlaylist, 
            activeModal, 
            courseId, 
            createPlayList, 
            openPlaylistModal

        } = this.props;

        return(
            <Fragment>
                <PlaylistModal 
                    playlists={ playlists }
                    showModal={ this.state.showModal } 
                    addVideoToPlaylist={ addVideoToPlaylist }
                    activeModal={ activeModal }
                    courseId={ courseId }
                    openPlaylistModal={ openPlaylistModal }
                    showPlaylistModal={ this.showPlaylistModal }
                    hidePlaylistModal={ this.hidePlaylistModal }
                    showAllPlaylists={ this.showAllPlaylists }
                />
                <NewPlaylist 
                    createPlayList={ createPlayList }
                    openPlaylistModal={ openPlaylistModal }
                    showModal={ this.state.showModal } 
                    handleInputDescription={ handleInputDescription }
                    handleInputName={ handleInputName }
                    showPlaylistModal={ this.showPlaylistModal }
                    hidePlaylistModal={ this.hidePlaylistModal }
                />
            </Fragment>
            
        );
    }

}


const PlaylistModal = ({ playlists, showModal, addVideoToPlaylist, activeModal, courseId, openPlaylistModal, hidePlaylistModal, showPlaylistModal, showAllPlaylists }) => (

    <div className={ activeModal === courseId ? "modal show-modal" : "modal hide-modal" } >
        <h1 className="modal__header" >Add to...</h1>
        <button 
            type='button'
            className="modal__list--new" 
            onClick={ showPlaylistModal }
            >New Playlist
        </button>

        { showAllPlaylists() }
        
        
    </div>
);

const NewPlaylist = ({ showModal, hidePlaylistModal, newPlaylist, openPlaylistModal, handleInputDescription, handleInputName, createPlayList }) => (

    <div className={ showModal === true ? "show-modal" : "hide-modal" } >
        <header className="newPlaylist__header" >
            <h1 className="newPlaylist__title" >Create Playlist</h1>
            <button 
                className="newPlaylist__button--return" 
                type='button' 
                onClick={ hidePlaylistModal }
            > 
                {" < "}
            </button>
        </header>

        <Form 
            showModal={ showModal }
            newPlaylist={ newPlaylist }
            openPlaylistModal={ openPlaylistModal }
            handleInputDescription={ handleInputDescription }
            handleInputName={ handleInputName }
            createPlayList={ createPlayList }
        />
    </div>
); 

const Form = ({ showModal, newPlaylist, openPlaylistModal, handleInputDescription, handleInputName, createPlayList }) => (

    <form className={ showModal === true ? "newPlaylist__form--new show-modal" : "newPlaylist__form--new hide-modal" } onSubmit={ createPlayList } >
        <label>Playlist name
            <input 
                className={ showModal === true ? "newPlaylist__input--name show-modal" : "newPlaylist__input--name hide-modal"} 
                name='playlist-name' 
                type='text' 
                onChange={ handleInputName } 
                required 
            />
        </label>
        <label>Description
            <input 
                className={ showModal === true ? "show-modal newPlaylist__input--description" : "hide-modal newPlaylist__input--description"} 
                name='playlist-description' 
                type='text' 
                onChange={ handleInputDescription } 
            />
        </label>
        <input 
            type='submit' 
            value='Create' 
        />
    </form>

);




export default ModalContainer;

/*

    import React, { Component } from 'react';

    // TODO by Juan oct 31 Halloween: Create a playlist functionality
    // TODONE by Juan oct 31 Halloween: Rename scss components to reflect changes in file names

    class PlaylistModal extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpen: null,
            }
        }

        render() {
            return (
                <PlaylistModalPresentation
                    courseId={ this.props.courseId }
                    activeModal={ this.props.activeModal }
                    isOpen={ this.state.isOpen }
                    openNewPlaylist={ () => this.setState({ isOpen: true }) }
                    hideNewPlaylist={ () => this.setState({ isOpen: false }) }
                />
            );
        }
    }

    const PlaylistModalPresentation = ({ courseId, activeModal, isOpen, openNewPlaylist, hideNewPlaylist }) => {
        
        return (
            <div className={ courseId === activeModal ? 'show' : 'hide' }>
                <button onClick={ openNewPlaylist }>Open New Playlist</button>
                <div className={ isOpen ? 'show' : 'hide' }>
                    Content
                    <button onClick={ hideNewPlaylist }>{"<"}</button>
                </div>
                
            </div>
        );
    }



    const PlaylistModal = ({addVideoToPlaylist, activeModal, courseId, showPlaylistModal, showModal, playlists }) => (

        <div className={ activeModal === courseId ? "modal show-modal" : "modal hide-modal" } >
            <h1 className="modal__header" >Add to...</h1>
            <button 
                type='button'
                onClick={ showPlaylistModal }
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
    );

    const NewPlaylist = ({ showModal, newPlaylist, openPlaylistModal, handleInputDescription, handleInputName, createPlayList }) => (

        <div className={ showModal === true ? "show-modal" : "hide-modal" 
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

