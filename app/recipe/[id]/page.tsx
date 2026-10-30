
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import { recipes } from "../../data/recipes";

function LoadingRecipe() {
  return <p>Loading recipe...</p>;
}

async function RecipeContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="details-container">

      <Link href="/" className="back-link">
        ← All recipes
      </Link>

      <section className="details-header">

        <div
          className="details-emoji"
          style={{
            backgroundColor: recipe.bgColor || "#ffe4e6",
          }}
        >
          {recipe.emoji}
        </div>

        <div className="details-info">
          <h1>{recipe.title}</h1>

          <p>{recipe.blurb}</p>

          <div className="details-meta">
            <span>◴ {recipe.minutes} min</span>
            <span>{recipe.difficulty}</span>
            <span>{recipe.cuisine}</span>
          </div>
        </div>

      </section>

      <section className="details-content">

        <div>
          <h2>Ingredients</h2>

          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Method</h2>

          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

      </section>
    </main>
  );
}

export default function RecipeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="app-layout">
      <Navbar />

      <Suspense fallback={<LoadingRecipe />}>
        <RecipeContent params={params} />
      </Suspense>
    </div>
  );
}
