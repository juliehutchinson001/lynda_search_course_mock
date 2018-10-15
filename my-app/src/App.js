import React, { Component } from 'react';
import Header from './Components/Header';
import APIContainer from './Components/API';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      search: ''
    }

  }

  handleSearchOnChange(event) {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Header 
          value={this.state.search}
          onChange={ (event) => this.handleSearchOnChange(event) }
        />
        <APIContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
