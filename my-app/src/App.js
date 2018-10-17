import React, { Component } from 'react';
import HeaderContainer from './Components/Header';
import APIContainer from './Components/API';
import PlaylistContainer from './Components/Playlist';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

  }

  handleSearchOnChange(event) {
    this.setState( { search: event.target.value } )
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer 
          value={ this.state.search }
          handleSearch={ (event) => this.handleSearchOnChange(event) }
        />
        <PlaylistContainer />
        <APIContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
