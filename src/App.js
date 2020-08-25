import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import axios from "axios";
import CharacterGrid from "./components/character/CharacterGrid";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setisLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
