import validateSearch from '../helpers/validate_search';

const Header = props => {
    const {
        handleSearch,
        getSearchInput,
    } = props;

    return (
        <header>
            <h1>Lynda</h1>
            <input
                type='search'
                onChange={ getSearchInput }
                onKeyPress={ handleSearch } />
            <button type='button'>Search</button>
            <button type='button'>See All</button>
        </header>
    );
};

export default Header;