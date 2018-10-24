import React, { Component } from 'react';


class HeaderContainer extends Component {

    render() {

        return (
            <Header 
                value={ this.props.value } 
                handleClickSearch={ this.props.handleClickSearch }   
                handleSearch={ this.props.handleSearch }   
                handleShowAll={ this.props.handleShowAll }   
                handleEnterKeyPress={ this.props.handleEnterKeyPress }             
            />
        );

    }
}

const Header = ({ value, handleClickSearch, handleSearch, handleEnterKeyPress, handleShowAll }) => (

    <header className="header" >
        <article className="header header__intro" >
            <h1 className="header header__title" >Lynda Learning</h1>
            
            <p className="header header__description" >
                Welcome to the next stepping stone of your learning.
                Type In your selection from the following options:
            </p>
            
            <ul className="header header__options" >
                <li>Java</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>React</li>
            </ul>
        </article>
        <article className="header header__search" >
            <input 
                className="header header__searchBar"
                name='search' 
                onChange={ handleSearch }
                onKeyPress={ handleEnterKeyPress }
                placeholder="search for a topic" 
                type='search' 
                value={ value } 
            />
            <button 
                className="header header__primary-button" 
                type='button' 
                onClick={ handleClickSearch } 
            >Search
            </button>
            <button 
                className="header header__secondary-button" 
                type='button' 
                onClick={ handleShowAll } 
            >Show All
            </button>

        </article>
    </header>

);

export default HeaderContainer;