"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <h1 className="hero-title">
          Find your next <span className="highlight">bite.</span>
        </h1>
        <p className="hero-subtitle">
          {recipes.length} recipes to browse, search, and cook. Pick one and get the full method.
        </p>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search recipes or cuisines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}