import React, { Component } from 'react';
import fetchCourses from './Helpers/get_api_courses';
import validateSearch from './Helpers/validate_search';
import HeaderContainer from './Components/Header';
import CourseContainer from './Components/courses';
import Playlist from './Components/Playlist';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      search: ''
    };

    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);

  }

  handleClickSearch() {
    const searchIsValid = validateSearch(this.state.search.toLowerCase());
    searchIsValid ? this.getCourses() : this.showError(true);

  }

  handleShowAll() {
    
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

  handleEnterKeyPress(event) {

    //onKeyPress tracks the 'enter' key to call the API request
    const userSearchTerm = this.state.search;

    const isValidSearch = validateSearch(userSearchTerm.toLowerCase());
    const enterKeyWasPressed = event.key === 'Enter' || event.keyCode === 13;

    isValidSearch && enterKeyWasPressed ? this.getCourses() : this.showError(enterKeyWasPressed);

  }

  render() {
    return (
      <div className="App">
        <HeaderContainer 
          handleClickSearch={ this.handleClickSearch }
          handleEnterKeyPress={ (event) => this.handleEnterKeyPress(event)}
          handleSearch={ (event) => this.handleSearchOnChange(event) }
          handleShowAll={ this.handleShowAll }
          value={ this.state.search }
        />
        <Playlist />
        <CourseContainer 
          courses={this.state.courses}
          validAnswer={ this.state.validAnswer }  
          toggleCoursesInList={ (event) => this.toggleCoursesInList(event) }
        />
        <Footer />
      </div>
    );
  }
}

export default App;
