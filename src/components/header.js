import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Option 1");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //   // Function to toggle the class
  //   const toggleDropdown = () => {
  //     setIsToggled(!isToggled);
  //   };

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="row header-row">
        <div className="header-left-side">
          <div className="header-suggestions">
            <img
              src={process.env.PUBLIC_URL + "/img/bulb.png"}
              alt="Your Image"
              className="immg-2"
            />
            <span>Suggestions</span>
          </div>
          <div className="header-dropdown">
            <div className="most-upvoted-dropdown-content">
              <div className="most-upvoted-list">
                <span onClick={toggleDropdown}>Sort By:</span>
                <span id="show-content">
                  <h2>
                    {selectedSortOption}
                    <i
                      className={`fas fa-caret-${
                        isDropdownOpen ? "up" : "down"
                      }`}
                      onClick={toggleDropdown}
                    ></i>
                  </h2>
                </span>

                <div>
                  <ul
                    className={
                      isDropdownOpen
                        ? "sort-dropdown-list open"
                        : "sort-dropdown-list"
                    }
                    id="sort-dropdown-list"
                  >
                    <li
                      className="sort-dropdown-list-item"
                      onClick={() => handleSortOptionClick("Option 1")}
                    >
                      <span className="sort-dropdown-list-text ">Option 1</span>
                      {selectedSortOption === "Option 1" && (
                        <span className="sort-dropdown-list-check sort-dropdown-list-text">
                          ✔
                        </span>
                      )}
                    </li>
                    <li
                      className="sort-dropdown-list-item"
                      onClick={() => handleSortOptionClick("Option 2")}
                    >
                      <span className="sort-dropdown-list-text ">Option 2</span>
                      {selectedSortOption === "Option 2" && (
                        <span className="sort-dropdown-list-check sort-dropdown-list-text">
                          ✔
                        </span>
                      )}
                    </li>
                    <li
                      className="sort-dropdown-list-item"
                      onClick={() => handleSortOptionClick("Option 3")}
                    >
                      <span className="sort-dropdown-list-text sort-dropdown-list-text">
                        Option 3
                      </span>
                      {selectedSortOption === "Option 3" && (
                        <span className="sort-dropdown-list-check sort-dropdown-list-text">
                          ✔
                        </span>
                      )}
                    </li>
                    <li
                      className="sort-dropdown-list-item"
                      onClick={() => handleSortOptionClick("Option 4")}
                    >
                      <span className="sort-dropdown-list-text ">Option 4</span>
                      {selectedSortOption === "Option 4" && (
                        <span className="sort-dropdown-list-check sort-dropdown-list-text">
                          ✔
                        </span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="herder-rightside-btn">
          <button title="btn" className="btn">
            <a className="btn-content" href="#">
              + Add Feedback
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
