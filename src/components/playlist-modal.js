import React, { Component, Fragment } from "react";

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewModal: null
    };

    this.showAllPlaylists = this.showAllPlaylists.bind(this);
    this.hideNewPlaylistModal = this.hideNewPlaylistModal.bind(this);
  }

  showNewPlaylistModal(event) {
    // const { createPlayList, openPlaylistModal, newId, handleInputDescription, handleInputName } = this.props;
    // debugger;
    // this.setState({ showNewModal: parseInt(event.target.dataset.newplaylistid, 10) });
    this.setState({ showNewModal: true });
  }

  hideNewPlaylistModal() {
    this.setState({ showNewModal: null });
  }

  showAllPlaylists() {
    const { addVideoToPlaylist } = this.props;

    return this.props.playlists.map((playlist, index) => (
      <button
        key={index}
        type="button"
        className="modal__list--existing"
        onClick={playlist => addVideoToPlaylist(playlist)}
      >
        {playlist.name}
        <span>+</span>
      </button>
    ));
  }

  render() {
    const {
      activeModal,
      courseId,
      newId,
      createPlayList,
      openPlaylistModal,
      handleInputDescription,
      handleInputName
    } = this.props;

    return (
      <Fragment>
        <PlaylistModal
          activeModal={activeModal}
          courseId={courseId}
          newId={newId}
          showNewPlaylistModal={event => this.showNewPlaylistModal(event)}
          showAllPlaylists={this.showAllPlaylists}
        />
        <NewPlaylist
          newId={newId}
          showNewModal={this.state.showNewModal}
          createPlayList={createPlayList}
          openPlaylistModal={openPlaylistModal}
          handleInputDescription={handleInputDescription}
          handleInputName={handleInputName}
          showNewPlaylistModal={this.showNewPlaylistModal}
          hideNewPlaylistModal={this.hideNewPlaylistModal}
        />
      </Fragment>
    );
  }
}

const PlaylistModal = ({
  activeModal,
  courseId,
  newId,
  showNewPlaylistModal,
  showAllPlaylists
}) => (
  <div
    className={
      activeModal === courseId ? "modal show-modal" : "modal hide-modal"
    }
  >
    <h1 className="modal__header">Add to...</h1>
    <button
      type="button"
      className="modal__list--new"
      data-newplaylistid={newId}
      onClick={showNewPlaylistModal}
    >
      New Playlist
    </button>

    {showAllPlaylists()}
  </div>
);

const NewPlaylist = props => {
  // newId,

  const {
    showNewModal,
    createPlayList,
    openPlaylistModal,
    handleInputDescription,
    handleInputName,
    hideNewPlaylistModal
  } = props;

  return (
    <div
      className={
        showNewModal
          ? "playlist-modal show-new-playlist-modal"
          : "playlist-modal hide-new-playlist-modal"
      }
    >
      <header className="newPlaylist__header">
        <h1 className="newPlaylist__title">Create Playlist</h1>
        <button
          className="newPlaylist__button--return"
          type="button"
          onClick={hideNewPlaylistModal}
        >
          {" < "}
        </button>
      </header>

      <Form
        showNewModal={showNewModal}
        openPlaylistModal={openPlaylistModal}
        handleInputDescription={handleInputDescription}
        handleInputName={handleInputName}
        createPlayList={createPlayList}
      />
    </div>
  );
};

const Form = ({
  showNewModal,
  handleInputDescription,
  handleInputName,
  createPlayList
}) => (
  <form
    className={
      showNewModal === true
        ? "newPlaylist__form--new show-modal"
        : "newPlaylist__form--new hide-modal"
    }
    onSubmit={createPlayList}
  >
    <label>
      Playlist name
      <input
        className={
          showNewModal === true
            ? "newPlaylist__input--name show-modal"
            : "newPlaylist__input--name hide-modal"
        }
        name="playlist-name"
        type="text"
        onChange={handleInputName}
        required
      />
    </label>
    <label>
      Description
      <input
        className={
          showNewModal === true
            ? "show-new-playlist-modal newPlaylist__input--description"
            : "hide-new-playlist-modal newPlaylist__input--description"
        }
        name="playlist-description"
        type="text"
        onChange={handleInputDescription}
      />
    </label>
    <input type="submit" value="Create" />
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



    const PlaylistModal = ({addVideoToPlaylist, activeModal, courseId, showNewPlaylistModal, showNewModal, playlists }) => (

        <div className={ activeModal === courseId ? "modal show-modal" : "modal hide-modal" } >
            <h1 className="modal__header" >Add to...</h1>
            <button
                type='button'
                onClick={ showNewPlaylistModal }
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

    const NewPlaylist = ({ showNewModal, newPlaylist, openPlaylistModal, handleInputDescription, handleInputName, createPlayList }) => (

        <div className={ showNewModal === true ? "show-modal" : "hide-modal"
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
