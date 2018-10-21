import React, { Component } from 'react';


class HeaderContainer extends Component {

    render() {

        return (
            <Header 
                value={ this.value } 
                handleClickSearch={ this.handleClickSearch }   
                handleSearch={ this.handleSearch }   
                handleShowAll={ this.handleShowAll }   
                handleEnterKeyPress={ this.handleEnterKeyPress }             
            />
        );

    }
}

const Header = ({ value, handleClickSearch, handleSearch, handleEnterKeyPress, handleShowAll }) => (

    <header>
        <h1>Lynda Learning</h1>
        
        <p>
            Welcome to the next stepping stone of your learning.
            Type In your selection from the following options:
        
            <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>React</li>
            </ul>
        </p>
        <input 
            name='search' 
            onChange={ handleSearch }
            onKeyPress={ handleEnterKeyPress }
            placeholder="search for a topic" 
            type='search' 
            value={ value } 
        />
        <button type='button' onClick={ handleClickSearch }>Search</button>
        <button type='button' onClick={ handleShowAll } >Show All</button>

    </header>

);

export default HeaderContainer;