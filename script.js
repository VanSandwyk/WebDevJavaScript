// This will be replaced with php, where all recipes will be loaded from a database
const recipes = [
    {
      title: "Spaghetti Carbonara",
      image: "https://via.placeholder.com/250x150",
      rating: 4.5,
      description: "Classic Italian pasta dish with creamy sauce.",
      instructions : "",
    },
    {
      title: "Chicken Curry",
      image: "https://via.placeholder.com/250x150",
      rating: 4.8,
      description: "A spicy and flavorful curry with tender chicken.",
      instructions : "",
    },
    {
      title: "Vegetarian Pizza",
      image: "https://via.placeholder.com/250x150",
      rating: 4.2,
      description: "Delicious pizza with fresh veggies and cheese.",
      instructions : "",
    },
    {
      title: "Beef Alfredo",
      image: "https://via.placeholder.com/250x150",
      rating: 4.2,
      description: "Delicious pasta with beef strips.",
      instructions : "",
    },
    {
      title: "Vegetarian Pizza",
      image: "https://via.placeholder.com/250x150",
      rating: 4.2,
      description: "Delicious pizza with fresh veggies and cheese.",
      instructions : "",
    },
    {
      title: "Vegetarian Pizza",
      image: "https://via.placeholder.com/250x150",
      rating: 4.2,
      description: "Delicious pizza with fresh veggies and cheese.",
      instructions : "",
    },
    {
      title: "Vegetarian Pizza",
      image: "https://via.placeholder.com/250x150",
      rating: 4.2,
      description: "Delicious pizza with fresh veggies and cheese.",
      instructions : "",
    }
  ];
  
  
  // Function to generate recipe cards
function loadRecipes() {
  const recipeContainer = document.getElementById("recipe-cards");
  
  // Clear container before adding recipes (just in case)
  recipeContainer.innerHTML = '';
  
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    
    // Add inner HTML
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>${recipe.title}</h2>
      <div class="rating">Rating: ${recipe.rating} <span>&#9733;</span></div>
      <p>${recipe.description}</p>
    `;

    //lets add an eventlistener to each recipe card
    recipeCard.addEventListener("click", ()=> {
      localStorage.setItem('selectedRecipe',JSON.stringify(recipe)); //Save recipe data to localStorage
      window.location.href='recipe-detail.html';
    }); //  function within event listener
    
    // Append to the container
    recipeContainer.appendChild(recipeCard);
  });
  
  // Check how many recipe cards were added
  console.log(`Total recipe cards added: ${document.querySelectorAll('.recipe-card').length}`);
}

// Load recipes on page load
window.onload = loadRecipes;

  