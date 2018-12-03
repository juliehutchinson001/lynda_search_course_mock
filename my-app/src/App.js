import React, { Component } from 'react';

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
  }

  render() {
    return (
      <div className="App">
      </div>

    );
  }
}

export default App;

