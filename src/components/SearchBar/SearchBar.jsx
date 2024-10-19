import React from "react";
import { useState } from "react";
import css from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    onSearch(searchTerm); // Викликаємо функцію для передачі значення
  };

  return (
    <header className={css.searchBar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          name="searchTerm"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
