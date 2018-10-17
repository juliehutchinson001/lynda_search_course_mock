import React, { Component } from 'react';

class APIContainer extends Component {

    

    render() {
        const courses = this.state.courses.map(this.createCourse);
        return <section>{ courses }</section>;
    }
}


