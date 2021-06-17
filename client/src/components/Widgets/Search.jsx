import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";

function Search() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading === true ? (
        <Preloader />
      ) : (
        <form className="search-form">
          <label>
            <span className="screen-reader-text">Search for:</span>
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
          </label>
          <button type="submit">
            <i className="bx bx-search-alt"></i>
          </button>
        </form>
      )}
    </>
  );
}

export default Search;
