import React, { Component } from 'react';
import Header from './components/header';

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

	render() {
		return (
			<div className="App">
				<Header />
			</div>

		);
	}
}

export default App;

