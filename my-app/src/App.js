import React, { Component } from 'react';
import fetchCourses from './Helpers/get_api_courses';
import validateSearch from './Helpers/validate_search';
import HeaderContainer from './Components/header';
import CourseContainer from './Components/courses';
import PlaylistSection from './Components/playlist_section';
import Footer from './Components/footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      isInPlaylist: false,
      playlists: [
        {
          name: "My Playlist",
          count: 0,
          description: "Default Playlist",
          videos: {}
        }
      ],
      search: '',
      validAnswer: true,
      activeCourse: null,
      formPlayListFields: {
        name: "",
        description: ""
      }
    };

    this.handleSearchOnClick = this.handleSearchOnClick.bind(this);
    this.handleShowAllCourses = this.handleShowAllCourses.bind(this);

  }

  getCourses() {
    //get the courses from API helper file to update state
      fetchCourses(this.state.search.toLowerCase(), courses => {
        this.setState({
          courses: courses,
          validAnswer: true
        })
      });
  }

  handleSearchOnClick() {
    //validates category of courses is valid after clicking 'search'
    const searchIsValid = validateSearch(this.state.search.toLowerCase());
    searchIsValid ? this.getCourses() : this.showError(true);

  }

  handleShowAllCourses() {
    //shows all videos
    this.setState({ courses: [] }, () => fetchCourses('all', allCourses => {
      this.setState({ courses: allCourses });
    }));

  }

  showError(searchNotValid) { searchNotValid && this.setState({ validAnswer: false }); }

  handleSearchOnEnter(event) {

    //onKeyPress tracks the 'enter' key to call the API request
    const userSearchTerm = this.state.search;

    const isValidSearch = validateSearch(userSearchTerm.toLowerCase());
    const enterKeyWasPressed = event.key === 'Enter' || event.keyCode === 13;

    isValidSearch && enterKeyWasPressed ? this.getCourses() : this.showError(enterKeyWasPressed);

  }

  //onChange updates the searched term and state
  handleSearchInputChange(e) { this.setState( { search: e.target.value } ); }

  handleInputName(event) {

    const playListName = event.target.value;
    this.setState(oldState => {
      const newState = {...oldState};
      newState.formPlayListFields.name.value = playListName;
      return newState;
    });

  }

  handleInputDescription(event) {

    const playListDescription = event.target.value;
    this.setState(oldState => {
      const newState = {...oldState};
      newState.formPlayListFields.description.value = playListDescription;
      return newState;
    });

  }

  createPlaylist(event) {

    event.preventDefault();

    /*
    playlist: [
      {
        name: ...,
        count: ...,
        videos: {
          nameOfCourse: {
            name: ...,
            author: ...,
            img: ...
          }
        }
      }
    ]
    */

    const course = this.state.courses[this.state.activeCourse];
    const videos = {};
    videos[course.courseTitle] = course;

    const newPlaylist = {
      name: this.state.formPlayListFields.name,
      count: 1,
      description: this.state.formPlayListFields.description,
      videos
    };

    this.setState(oldState => {

      return {
        playlists: [...oldState.playlists, newPlaylist]
      };

    });

  }


  render() {
    return (
      <div className="App">
        <HeaderContainer
          handleSearchOnClick={ this.handleSearchOnClick }
          handleSearchOnEnter={ event => this.handleSearchOnEnter(event)}
          handleSearchInputChange={ event => this.handleSearchInputChange(event) }
          handleShowAllCourses={ this.handleShowAllCourses }
          search={ this.state.search }
        />
        <PlaylistSection
          playLists={ this.state.playlists }
          isInPlaylist={ this.state.isInPlaylist }
        />
        <CourseContainer
          isInPlaylist={ this.state.isInPlaylist }
          courses={ this.state.courses }
          validAnswer={ this.state.validAnswer }
          createPlayList={ event => this.createPlaylist(event) }
          playlists={ this.state.playlists }
          handleInputName={ event => this.handleInputName(event) }
          handleInputDescription={ event => this.handleInputDescription(event) }
        />
        <Footer />
      </div>

    );
  }
}

export default App;

/*
 */