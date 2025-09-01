import React, { useState } from "react";
import RecipeList from "./components/RecipeList";

const recipesData = [
  { id: 1, name: "Jollof Rice", description: "A West African classic made with rice, tomatoes, and spices." },
  { id: 2, name: "Waakye", description: "Ghanaian dish made with rice and beans." },
  { id: 3, name: "Fufu", description: "Staple food made from boiled and pounded cassava and plantain." }
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipesData.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Finder App</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-6"
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}
