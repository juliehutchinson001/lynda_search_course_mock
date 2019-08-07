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
        <h1 className="header__title">Lynda Learning</h1>
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
        <p className="header__description">
          Welcome to the next stepping stone of your learning. Type In your
          selection from the following options:
        </p>

        <ul className="header__options">
          <li>Java</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>React</li>
        </ul>
      </section>
    </header>
  );
};

export default HeaderContainer;
