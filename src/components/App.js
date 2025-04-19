import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  function handleCategoryChange(newCategory) {
    if (newCategory === "All") {
      setItems(itemData); // Reset to the original list
    } else {
      setItems(itemData.filter((item) => item.category === newCategory));
    }
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]); // Add the new item to the list
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ShoppingList
        items={items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
      />
      {/* <ItemForm onItemFormSubmit={handleFormSubmit} /> */}
    </div>
  );
}

export default App;
