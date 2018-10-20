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

    const userSearchTerm = event.target.value;
    this.setState( { search: userSearchTerm } );

    const verifySearch = getQuery(userSearchTerm);
    const invalidAns = "Search a valid term";

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

  }

  render() {
    return (
      <div className="App">
        <HeaderContainer 
          value={ this.state.search }
          handleSearch={ (event) => this.handleSearchOnChange(event) }
        />
        <Playlist />
        <CourseContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
