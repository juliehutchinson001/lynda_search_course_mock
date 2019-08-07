import React, { Component } from "react";
import ModalContainer from "./playlist-modal";

class CourseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeModal: null };
  }

  addVideoToPlaylist(event) {
    this.setState({ activeModal: 0 });
  }

  openPlaylistModal(e) {
    this.setState({
      activeModal: parseInt(e.target.dataset.id, 10)
    });
  }

  createCourse(course, index) {
    const {
      createPlayList,
      playlists,
      handleInputName,
      handleInputDescription
    } = this.props;
    /*
        // Problem: Find out if course is in playlist
        // Check all of the playlist one by one
        // Check inside of the videos in each of the playlist one by one
        // If true display checkmark
        // Else show plus
*/
    return (
      <Course
        playlists={playlists}
        handleInputDescription={handleInputDescription}
        handleInputName={handleInputName}
        addVideoToPlaylist={event => this.addVideoToPlaylist(event)}
        key={index}
        openPlaylistModal={event => this.openPlaylistModal(event)}
        course={course}
        courseId={index}
        newId={index}
        activeModal={this.state.activeModal}
        createPlayList={createPlayList}
      />
    );
  }

  render() {
    const { courses, validAnswer } = this.props;
    const coursesArr = courses.map((course, i) => this.createCourse(course, i));

    const errorMsg = <p className="courses_error">Enter a valid search term</p>;

    return (
      <main className="courses">{validAnswer ? coursesArr : errorMsg}</main>
    );
  }
}

//Block__Element--Modifier
const Course = props => {
  const {
    course,
    openPlaylistModal,
    courseId,
    activeModal,
    handleInputDescription,
    handleInputName,
    createPlayList,
    addVideoToPlaylist,
    newId,
    playlists
  } = props;

  return (
    <div className="course">
      <div className="course__credentials">
        <img
          className="course__image"
          src={course.courseImg}
          alt="Course Thumbnail"
        />
        <div className="course__information">
          <h1 className="course__title">{course.courseTitle} </h1>
          <h4 className="course__author">Author: {course.courseAuthor}</h4>
        </div>
      </div>
      <button
        data-id={courseId}
        className="course__playlist--activate-modal"
        onClick={openPlaylistModal}
        type="button"
      >
        +
      </button>
      <ModalContainer
        handleInputDescription={handleInputDescription}
        handleInputName={handleInputName}
        addVideoToPlaylist={addVideoToPlaylist}
        activeModal={activeModal}
        newId={newId}
        courseId={courseId}
        createPlayList={createPlayList}
        openPlaylistModal={openPlaylistModal}
        playlists={playlists}
      />
    </div>
  );
};

export default CourseContainer;

// valid ? '+' : '✓'
