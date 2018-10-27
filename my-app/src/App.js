import React, { Component } from 'react';
import fetchCourses from './Helpers/get_api_courses';
import validateSearch from './Helpers/validate_search';
import HeaderContainer from './Components/Header';
import CourseContainer from './Components/courses';
import VideoOptions from './Components/videoOps';
import NewCategories from './Components/categories';
import Playlist from './Components/Playlist';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      newList: '',
      playlists: ['myPlaylist'],
      search: '',
      toggleOptions: 'hide-videoOptions',
      validAnswer: true,
      formPlayListFields: {
        name: {
            value: '',
            id: 'category-name'
        },
        description: {
            value: '',
            id: 'category-description'
        }
      }
    };

    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleVideoOptions = this.handleVideoOptions.bind(this);
    this.createNewPlayList = this.createNewPlayList.bind(this);

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

  handleClickSearch() {
    //validates category of courses is valid after clicking 'search'
    const searchIsValid = validateSearch(this.state.search.toLowerCase());
    searchIsValid ? this.getCourses() : this.showError(true);

  }

  handleShowAll() {
    //shows all videos
    const categories = ['java', 'javascript', 'python', 'react'];
    this.setState({ courses: [] });
    
    categories.forEach(category => {
      fetchCourses(category, newCourses => {

        this.setState(prevState => {
          const oldCourses = prevState.courses;

          return {
            courses: [...oldCourses, ...newCourses],
            validAnswer: true
          };
        });

      });
      
    })

  }

  showError(searchNotValid) {
    if (searchNotValid) {        
      this.setState({ validAnswer: false });
    }
  }

  handleEnterKeyPress(event) {

    //onKeyPress tracks the 'enter' key to call the API request
    const userSearchTerm = this.state.search;

    const isValidSearch = validateSearch(userSearchTerm.toLowerCase());
    const enterKeyWasPressed = event.key === 'Enter' || event.keyCode === 13;

    isValidSearch && enterKeyWasPressed ? this.getCourses() : this.showError(enterKeyWasPressed);

  }

  //onChange updates the searched term and state
  handleSearchOnChange(e) { this.setState( { search: e.target.value } ); }

  handleVideoOptions() {
    //assigns a class to the pop-up on the videos to create/add playlist video
    const showHideOptions = this.state.toggleOptions === 'hide-VideoOptions' ? 'show-VideoOptions' : 'hide-VideoOptions';
    this.setState({ toggleOptions: showHideOptions });

  }

  createNewPlayList() {
    //asigns a class to the create playlist pop-up to show the modale
    const aNewPlayList = this.state.newList === '' ? 'create-newList' : '';
    this.setState({ newList: aNewPlayList });

  }

  handleFormChange(event) {

    const playListName = event.target.value;
    this.setState(oldState => {
      const newState = {...oldState};
      newState.formPlayListFields.name.value = playListName;
      return newState
    });

  }


  render() {
    return (
      <div className="App">
        <HeaderContainer 
          handleClickSearch={ this.handleClickSearch }
          handleEnterKeyPress={ event => this.handleEnterKeyPress(event)}
          handleSearch={ event => this.handleSearchOnChange(event) }
          handleShowAll={ this.handleShowAll }
          value={ this.state.search }
        />
        <Playlist playLists={this.state.playlists} />
        <CourseContainer 
          courses={ this.state.courses }
          validAnswer={ this.state.validAnswer }  
          handleVideoOps={ this.handleVideoOptions }
        />
        <VideoOptions 
          classOptions={ this.state.toggleOptions }
          createPlayList={ this.createNewPlayList }
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
