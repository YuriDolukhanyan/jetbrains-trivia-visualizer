import React, { useEffect, useState } from "react";
import { CategoryChart } from "./CategoryChart";
import { DifficultyChart } from "./DifficultyChart";
import { FilterBar } from "./FilterBar";
import "../App.css";

export const ContentContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=50");
        const data = await res.json();
        setQuestions(data.results);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  const categories = Array.from(new Set(questions.map(q => q.category)));
  const filtered =
    filteredCategory === "All"
      ? questions
      : questions.filter(q => q.category === filteredCategory);

  return (
    <div className="App">
      <h1>Trivia Data Visualization</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <FilterBar
            categories={categories}
            filteredCategory={filteredCategory}
            onChange={setFilteredCategory}
          />
          <div className="charts">
            <CategoryChart questions={filtered} />
            <DifficultyChart questions={filtered} />
          </div>
        </>
      )}
    </div>
  );
};
