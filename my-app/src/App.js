import React, { Component } from 'react';
import Header from './components/header';
import fetchCourses from './helpers/get_api_courses';
import validateSearch from './helpers/validate_search';

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
		const enterKey = event.keyCode || event.key;
		const isEnterKeyPressed = enterKey === 13 || enterKey === 'Enter';

		if (isEnterKeyPressed) {
			validateSearch()
		}
	}

	render() {
		return (
			<div className="App">
				<Header
					handlesearch={event => this.handlesearch(event)}
					getSearchInput={event => this.getSearchInput(event)}
				/>
			</div>

		);
	}
}

export default App;

