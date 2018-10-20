import React, { Component } from 'react';

class CourseContainer extends Component {

    createCourse(course, index) {
        return (
            <Course 
                key={ index }
                title={ course.courseTitle }
                author={ course.courseTitle }
                img={ course.courseImg }
            />
        )
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

export default CourseContainer;

