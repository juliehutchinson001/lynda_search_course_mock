import React, { Component, Fragment } from 'react';

class CourseContainer extends Component {

    createCourse(course, index) {
        return (
            <Course 
                key={ index }
                title={ course.courseTitle }
                author={ course.courseAuthor }
                img={ course.courseImg }
                valid={ this.props.validAnswer }
            />
        )
    }

    render() {
        const { courses, validAnswer } = this.props;
        const coursesArr = courses.map((course, i) => this.createCourse(course, i));
        
        const errorMsg = <p className="error" >Enter a valid search term</p>;

        return (
            <section>
                { validAnswer ? coursesArr : errorMsg }
            </section>
        );
    }
}

//Block__Element--Modifier

const Course = ({ title, author, img, valid }) => (
    <Fragment>
        <div>
            <h1>{ title } </h1>
            <img src={ img } alt="Course Thumbnail"/>
            <h4>Author: { author }</h4>
        </div>
        <button type="button"  >{ valid ? '+' : '' }</button>    
    </Fragment>

);

export default CourseContainer;

