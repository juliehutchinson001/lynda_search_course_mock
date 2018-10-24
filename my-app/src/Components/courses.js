import React, { Component, Fragment } from 'react';

class CourseContainer extends Component {

    render() {
        const { courses, validAnswer } = this.props;
        const coursesArr = courses.map((course, i) => this.createCourse(course, i));
        
        const errorMsg = <p className="error" >Enter a valid search term</p>;

        return (
            );
    }
}

//Block__Element--Modifier



export default CourseContainer;

