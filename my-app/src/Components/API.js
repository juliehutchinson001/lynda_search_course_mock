import React, { Component } from 'react';

class APIContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    render() {
        const courses = this.state.courses.map(this.createCourse);
        return <section>{ courses }</section>;
    }
}



export default APIContainer;

