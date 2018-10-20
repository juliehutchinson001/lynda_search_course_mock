import React, { Component } from 'react';


class HeaderContainer extends Component {

    render() {

        return (
            <Header 
                value={ this.value } 
                handleSearch={ this.handleSearch }                
            />
        );

    }
}



export default HeaderContainer;