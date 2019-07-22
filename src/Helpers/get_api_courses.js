const fetchCourses = (category, callback) => {

    const query = category === 'all'
        ? 'search/all'
        : `search?categoryName=${category}`;

    const url = `https://mock-course-backend.herokuapp.com/${query}`;

    fetch(url)
        .then(resp => resp.json())
        .then(coursesObj => callback(coursesObj.course))

};


export default fetchCourses;
