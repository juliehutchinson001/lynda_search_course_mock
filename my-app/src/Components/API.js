import React, { Component } from 'react';

class APIContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }



    componentDidMount() {

        const query = `search?categoryName=javascript`;
        const url = `https://mock-course-backend.herokuapp.com/${query}`;
        
        fetch(url)
            .then(resp => resp.json())
            .then(courses => this.setState({ courses: courses.course }))
    }

    render() {
        const courses = this.state.courses.map(this.createCourse);
        return <section>{ courses }</section>;
    }
}

const Course = ({ title, author, img }) => (
    <div>
        <h1>{ title } </h1>
        <img src={ img } alt="Course Thumbnail"/>
        <h4>Author: { author }</h4>
    </div>
);

export default APIContainer;

