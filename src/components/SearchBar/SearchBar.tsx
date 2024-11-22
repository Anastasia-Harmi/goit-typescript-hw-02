import React, { FC, FormEvent } from "react";
import { useState } from "react";
import css from "./SearchBar.module.css";
import { toast } from "react-toastify";

type Props = { onSearch: (searchTerm: string) => void };

const SearchBar: FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    // Перевірка, чи є поле пошуку порожнім
    if (searchTerm.trim() === "") {
      // Викликаю метод toast для показу повідомлення про помилку
      toast.error("Будь ласка, введіть запит для пошуку.");
      return; // Виходимо з функції, якщо поле порожнє
    }

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
