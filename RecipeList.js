import React from "react";

export default function RecipeList({ recipes }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{recipe.name}</h2>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
