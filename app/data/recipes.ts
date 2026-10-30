export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  blurb: string;
  ingredients: string[];
  steps: string[];
  bgColor?: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    cuisine: "Italian",
    minutes: 35,
    difficulty: "Medium",
    blurb: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    ingredients: [
  "1 pizza dough ball",
  "1/2 cup San Marzano tomato sauce",
  "125g fresh mozzarella cheese",
  "Fresh basil leaves",
  "2 tbsp olive oil",
  "Salt and black pepper"
],

steps: [
  "Preheat the oven to its highest temperature.",
  "Roll out the pizza dough into a thin circle.",
  "Spread tomato sauce evenly over the dough.",
  "Add mozzarella cheese and drizzle olive oil.",
  "Bake for 7 to 9 minutes until the crust is golden.",
  "Garnish with fresh basil and serve hot."
],
    bgColor: "#ffe4e6"
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    cuisine: "Indian",
    minutes: 40,
    difficulty: "Medium",
    blurb: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    ingredients: [
  "200g paneer cubes",
  "1/2 cup thick yogurt",
  "1 tbsp ginger garlic paste",
  "1 tsp red chilli powder",
  "1 tsp garam masala",
  "1/2 tsp turmeric powder",
  "1 capsicum cut into cubes",
  "1 onion cut into cubes",
  "Salt to taste",
  "1 tbsp lemon juice"
],

steps: [
  "Cut paneer, capsicum and onion into cubes.",
  "Mix yogurt with ginger garlic paste and spices.",
  "Add paneer and vegetables to the marinade.",
  "Keep the mixture aside for 20 minutes.",
  "Grill or pan-cook until golden on all sides.",
  "Serve hot with mint chutney and lemon."
],
    bgColor: "#ffedd5"
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    cuisine: "Drinks",
    minutes: 10,
    difficulty: "Easy",
    blurb: "Smooth, low-acid coffee steeped slow overnight.",
    ingredients: [
  "1/2 cup coarsely ground coffee",
  "2 cups cold drinking water",
  "Ice cubes",
  "1/4 cup milk (optional)",
  "Sugar or honey (optional)"
],

steps: [
  "Add coarsely ground coffee to a glass jar.",
  "Pour cold water over the coffee grounds.",
  "Stir gently and cover the jar.",
  "Refrigerate for 12 to 18 hours.",
  "Strain the coffee using a fine filter.",
  "Serve over ice with milk or sweetener if desired."
],
    bgColor: "#e0f2fe"
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    cuisine: "American",
    minutes: 30,
    difficulty: "Easy",
    blurb: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    ingredients: [
  "2 burger buns",
  "2 vegetable patties",
  "2 lettuce leaves",
  "1 tomato sliced",
  "1 onion sliced",
  "2 cheese slices",
  "2 tbsp mayonnaise",
  "2 tbsp tomato sauce",
  "1 tbsp butter"
],

steps: [
  "Heat a pan and cook the vegetable patties.",
  "Cook until both sides become crispy and golden.",
  "Cut the burger buns and lightly toast them with butter.",
  "Spread mayonnaise and tomato sauce on the buns.",
  "Add lettuce, patty, cheese, tomato and onion.",
  "Cover with the top bun and serve fresh."
],
    bgColor: "#ffedd5"
  }
];
