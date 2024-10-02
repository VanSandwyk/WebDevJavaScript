// This will be replaced with php, where all recipes will be loaded from a database
const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/250x150",
    rating: 4.5,
    description: "Classic Italian pasta dish with creamy sauce.",
    instructions: "",
  },
  {
    title: "Chicken Curry",
    image: "https://via.placeholder.com/250x150",
    rating: 4.8,
    description: "A spicy and flavorful curry with tender chicken.",
    instructions: "",
  },
  {
    title: "Vegetarian Pizza",
    image: "https://via.placeholder.com/250x150",
    rating: 4.2,
    description: "Delicious pizza with fresh veggies and cheese.",
    instructions: "",
  },
  {
    title: "Beef Alfredo",
    image: "https://via.placeholder.com/250x150",
    rating: 4.2,
    description: "Delicious pasta with beef strips.",
    instructions: "",
  },
  {
    title: "Vegetarian Pizza",
    image: "https://via.placeholder.com/250x150",
    rating: 4.2,
    description: "Delicious pizza with fresh veggies and cheese.",
    instructions: "",
  },
  {
    title: "Vegetarian Pizza",
    image: "https://via.placeholder.com/250x150",
    rating: 4.2,
    description: "Delicious pizza with fresh veggies and cheese.",
    instructions: "",
  },
  {
    title: "Vegetarian Pizza",
    image: "https://via.placeholder.com/250x150",
    rating: 4.2,
    description: "Delicious pizza with fresh veggies and cheese.",
    instructions: "",
  },
];

// Function to generate recipe cards
function loadRecipes() {
  const recipeContainer = document.getElementById("recipe-cards");

  // Clear container before adding recipes (just in case)
  recipeContainer.innerHTML = "";

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
    recipeCard.addEventListener("click", () => {
      localStorage.setItem("selectedRecipe", JSON.stringify(recipe)); //Save recipe data to localStorage
      window.location.href = "recipe-detail.html";
    }); //  function within event listener

    // Append to the container
    recipeContainer.appendChild(recipeCard);
  });

  // Check how many recipe cards were added
  console.log(
    `Total recipe cards added: ${
      document.querySelectorAll(".recipe-card").length
    }`
  );
}

// Load recipes on page load
window.onload = loadRecipes;

// globals
const scrollerContainer = document.querySelector(".slide-container-inner");
const userReviews = document.getElementById("user-reviews");
const latestRecipes = document.getElementById("latest-recipes-list");

//------------------------------------Latest Recipes Code_______________________________//
// latest recipes, these are temporary placeholder objects
let chocolateCake = {
  name: "Chocolate Cake",
  description: "Tasty Chocolate Cake",
  thumbnail: "img/choc_cake.jpg",
  link: "cake.html",
};

let pastaAlfredo = {
  name: "Pasta Alfredo",
  description: "Italian Pasta Alfredo",
  thumbnail: "img/pasta.jpg",
  link: "pasta.html",
};

let beefStew = {
  name: "Beef Stew",
  description: "Delicious Beef Stew",
  thumbnail: "img/stew.jpg",
  link: "beef.html",
};

let latestRecipesList = [chocolateCake, pastaAlfredo, beefStew]; // store these recipe objects in a list
latestRecipesList.forEach((recipe) => {
  addLatestRecipe(recipe); // render each recipe object in latest recipes section
});

//------------------------------------User Reviews Code_______________________________//
// user reviews, these are temporary placeholder objects
let charmie = {
  name: "Tahalia",
  body: `"This site has an amazing variety of recipes from different
          cuisines. I love how easy it is to follow the steps, and the
          user reviews help me choose the best ones. It's now my go-to
          for weeknight dinners!"`,
};

let gordon = {
  name: "Gordon",
  body: `"I'm new to cooking, but the clear instructions and helpful
          tips on this site have made the process so much easier. The
          community is also super supportive when I need advice!"`,
};

let kaizer = {
  name: "Kaizer",
  body: `"I’m always finding new meal ideas here. The filters make it
          easy to search by dietary preferences, and the photos really
          help visualize what the final dish should look like. I've
          discovered so many favorites!"`,
};

let userReviewsList = [charmie, gordon, kaizer]; // store all obejcts in a list
userReviewsList.forEach((review) => {
  addFeaturedReview(review); // render each review in the carousel
});

const carouselContent = Array.from(scrollerContainer.children);

carouselContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true); // duplicate first element and append it to the list
  scrollerContainer.appendChild(duplicatedItem); // recycle the elemcnts to make infinite scroll effect
  scrollerContainer.style.animation = "scroll 75s linear infinite"; // animate the carousel of reviews
});

function addFeaturedReview(review) {
  // this method renders new reviews on the carousel
  userReviews.innerHTML += `<article class = 'user-review'>
        <img src='img/avatar-icon.png'>
        <hgroup>
          <p class="review-bd">${review.body}</p>
          <h3 class="review-author">- ${review.name}</h3>
        </hgroup>
      </article>`;
}

function addLatestRecipe(recipe) {
  // this method renders latest recipes in recipe section
  latestRecipes.innerHTML += `<li class="card latest-recipe">
          <a href="${recipe.link}">
            <img src="${recipe.thumbnail}" />
            <article>
              <h3>${recipe.name}</h3>
              <p>${recipe.description}</p>
            </article>
        </a>
      </li>`;
}


//Task 6 and task 7
// ----------- ADDED: Adjust column layout dynamically based on window size ----------- //
function adjustColumnLayout() {
  const recipeContainer = document.getElementById("recipe-cards");
  const width = window.innerWidth;

  if (width < 600) {
    recipeContainer.style.columnCount = 1;
  } else if (width < 1000) {
    recipeContainer.style.columnCount = 2;
  } else {
    recipeContainer.style.columnCount = 3;
  }
}

// Call adjustColumnLayout on load and resize
window.addEventListener("resize", adjustColumnLayout);
window.addEventListener("load", adjustColumnLayout);

// ---------------- Added Event Listeners for HTML DOM Events ---------------- //

function highlightOnHover(event) {
  event.target.style.backgroundColor = "lightyellow";
}

function removeHighlight(event) {
  event.target.style.backgroundColor = "";
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

function logScrollPosition() {
  console.log("Scroll Position: ", window.scrollY);
}

function preventContextMenu(event) {
  event.preventDefault();
  alert("Right-click is disabled!");
}

function onRecipeDoubleClick() {
  alert("Recipe double-clicked for details!");
}

function detectKeydown(event) {
  console.log("Key pressed: ", event.key);
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

function onFormSubmit(event) {
  event.preventDefault();
  alert("Form submitted!");
}

// ----------- Attach Event Listeners to Elements ----------- //

// Add hover effects for recipe cards
document.querySelectorAll(".recipe-card").forEach((card) => {
  card.addEventListener("mouseenter", highlightOnHover);
  card.addEventListener("mouseleave", removeHighlight);
});

// Sidebar toggle
document.querySelector(".toggle-button").addEventListener("click", toggleSidebar);

// Log scroll position
window.addEventListener("scroll", logScrollPosition);

// Disable right-click on the page
window.addEventListener("contextmenu", preventContextMenu);

// Double-click to show recipe details
document.querySelectorAll(".recipe-card").forEach((card) => {
  card.addEventListener("dblclick", onRecipeDoubleClick);
});

// Detect keypresses on the page
window.addEventListener("keydown", detectKeydown);

// Change background color on button hover
document.querySelector(".navbar").addEventListener("mouseenter", changeBackgroundColor);
document.querySelector(".navbar").addEventListener("mouseleave", resetBackgroundColor);

// Form submit example (if there is a form)
const formElement = document.querySelector("form");
if (formElement) {
  formElement.addEventListener("submit", onFormSubmit);
}
