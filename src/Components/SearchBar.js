import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchActive: false,
      searchQuery: "",
    };
    this.inputRef = React.createRef(); // Create a ref for the input element
  }

  toggleSearch = () => {
    this.setState((prevState) => ({
      isSearchActive: !prevState.isSearchActive,
    }));
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  clearSearch = () => {
    this.setState({
      searchQuery: "",
      isSearchActive: false, // Clear the search state when clearing the search
    });
  };

  render() {
    const { isSearchActive, searchQuery } = this.state;

    return (
      <div className="relative px-2 pb-4  text-white placeholder-white">
        <div
          className={`flex items-center  rounded-md p-1 bg-gray-400 transition-all duration-300 ${
            isSearchActive ? "w-10/12" : "w-5/5"
          }`}
        >
          <span className="text-gray-400 mr-2 pl-2">
            <FontAwesomeIcon className="text-gray-200" icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Search..." 
            className={`placeholder-white pr-2 py-1 w-full bg-gray-400 outline-none ${
              isSearchActive ? "pl-2 " : "pl-2"
            }`}
            value={searchQuery}
            onChange={this.handleSearchChange}
            onClick={this.toggleSearch}
            ref={this.inputRef} // Assign the ref to the input element
          />
          {isSearchActive && (
            <button
              className="absolute top-0 right-2 mt-1 mr-2 p-1 text-orange-600 focus:outline-none"
              onClick={this.clearSearch}
            >
              Vazgeç
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
