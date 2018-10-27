import React, { Component, Fragment } from 'react';

class CourseContainer extends Component {

    createCourse(course, index) {
        return (
            <Course 
                key={ index }
                author={ course.courseAuthor }
                handleVideoOps={ this.props.handleVideoOps }
                img={ course.courseImg }
                title={ course.courseTitle }
                valid={ this.props.validAnswer }
            />
        )
    }

    render() {
        const { courses, validAnswer } = this.props;
        const coursesArr = courses.map((course, i) => this.createCourse(course, i));
        
        const errorMsg = <p className="courses courses_error" >Enter a valid search term</p>;

        return (
            <section className="courses" >
                { validAnswer ? coursesArr : errorMsg }
            </section>
        );
    }
}

//Block__Element--Modifier

const Course = ({ title, author, handleVideoOps, img, valid }) => (
    <Fragment>
        <div className="courses courses__credentials" >
            <h1 className="courses courses__title" >{ title } </h1>
            <img className="courses courses__image" src={ img } alt="Course Thumbnail"/>
            <h4 className="courses courses__author" >Author: { author }</h4>
        </div>
        <button className="courses courses__playlist--identifier" onClick={ handleVideoOps } type="button"  >{ valid ? '+' : '' }</button>    
    </Fragment>

);

export default CourseContainer;

