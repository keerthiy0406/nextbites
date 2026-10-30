import Link from "next/link";
import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
      <div className="card-top" style={{ backgroundColor: recipe.bgColor || "#f3f4f6" }}>
        <span className="card-emoji">{recipe.emoji}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-blurb">{recipe.blurb}</p>
        <div className="card-meta">
          <span className="meta-item">⏱ {recipe.minutes} min</span>
          <span className="meta-item">{recipe.difficulty}</span>
          <span className="meta-badge">{recipe.cuisine}</span>
        </div>
      </div>
    </Link>
  );
}