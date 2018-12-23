import React, { Component } from 'react';
import Header from './components/header';
import fetchCourses from './helpers/get_api_courses';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			inputSearch: '',
			playlist: {
				'my playlist': []
			}
		};
	}

	handlesearch(event) {

	}

	render() {
		return (
			<div className="App">
				<Header
					handlesearch={event => this.handlesearch(event)}
				/>
			</div>

		);
	}
}

export default App;

