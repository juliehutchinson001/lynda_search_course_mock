import React, { Component } from 'react';
import fetchCourses from './Helpers/get_API_resp';
import getQuery from './Helpers/get_query';
import HeaderContainer from './Components/Header';
import CourseContainer from './Components/API';
import Playlist from './Components/Playlist';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      search: '',
      invalidAnswer: false
    };

  }

  handleSearchOnChange(event) {

    //onChange updates the searched term and state
    const userSearchTerm = event.target.value;
    this.setState( { search: userSearchTerm } );
  }

  handleEnterKeyPress(event) {

    //onKeyPress tracks the 'enter' key to call the API request
    const verifySearch = getQuery(userSearchTerm);

    fetchCourses(verifySearch);

/*
    if (verifySearch === invalidAns) {
      this.setState({ invalidAnswer: true });
    } else {
      const query = `search?categoryName=${verifySearch}`;
      const url = `https://mock-course-backend.herokuapp.com/${query}`;
      
      fetch(url)
        .then(resp => resp.json())
        .then(courses => this.setState({ 
            courses: courses.course,
            invalidAnswer: false
          })
        );
    }
*/
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer 
          value={ this.state.search }
          handleSearch={ (event) => this.handleSearchOnChange(event) }
          handleEnterKeyPress={ (event) => this.handleEnterKeyPress(event)}
          />
        <Playlist />
        <CourseContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
