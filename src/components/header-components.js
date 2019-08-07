import React, { Component } from "react";

class HeaderContainer extends Component {
  render() {
    return (
      <Header
        search={this.props.search}
        handleSearchOnClick={this.props.handleSearchOnClick}
        handleSearchInputChange={this.props.handleSearchInputChange}
        handleShowAllCourses={this.props.handleShowAllCourses}
        handleSearchOnEnter={this.props.handleSearchOnEnter}
      />
    );
  }
}

const Header = props => {
  const {
    search,
    handleSearchOnClick,
    handleSearchInputChange,
    handleSearchOnEnter,
    handleShowAllCourses
  } = props;

  return (
    <header className="header">
      <section className="header__top">
        <h1 className="header__title">LYNDA MOCK</h1>
        <input
          className="header__searchBar"
          name="search"
          onChange={handleSearchInputChange}
          onKeyPress={handleSearchOnEnter}
          placeholder="search for a topic"
          type="search"
          search={search}
        />
        <button
          className="header__primary-button"
          type="button"
          onClick={handleSearchOnClick}
        >
          Search
        </button>
        <button
          className="header__secondary-button"
          type="button"
          onClick={handleShowAllCourses}
        >
          Show All
        </button>
      </section>
      <section className="header__bottom">
        <h1 className="hero__title">
          Welcome to the next stepping stone to build up your career
        </h1>
        <p className="hero__subtitle">
          Select from the following options to begin learning:
        </p>

        <ul className="header__options">
          <li className="header__option java-option">
            <div className="overlay" />
            <button className="header__button-option">Java</button>
          </li>
          <li className="header__option javascript-option">
            <div className="overlay" />
            <button className="header__button-option">Javascript</button>
          </li>
          <li className="header__option python-option">
            <div className="overlay" />
            <button className="header__button-option">Python</button>
          </li>
          <li className="header__option react-option">
            <div className="overlay" />
            <button className="header__button-option">React</button>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default HeaderContainer;
