const getQuery = searchedWord => {

    const categories = ["java", "javascript", "python", "react"];

    const queries = categories.filter(category => 
        category === searchedWord.toLowerCase()
    );

    const invalidAnswer = "Search a valid term";
    const verifySearch = queries.length ? queries[0] : invalidAnswer;


    return verifySearch;

};

export default getQuery;
