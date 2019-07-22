const validateSearch = searchedWord => {
    const categories = ["java", "javascript", "python", "react"];
    const categoryExist = categories.includes( searchedWord.toLowerCase() );

    return categoryExist;

};

export default validateSearch;
