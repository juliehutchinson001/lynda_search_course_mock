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

	handlesearch(event, query) {
		const enterKey = event.keyCode || event.key;
		const isEnterKeyPressed = enterKey === 13 || enterKey === 'Enter';

		if (isEnterKeyPressed) {
			validateSearch(query)
		}
	}

	getSearchInput(event) {
		const searchTerm = event.target.value;
		this.handlesearch(_, searchTerm)

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

