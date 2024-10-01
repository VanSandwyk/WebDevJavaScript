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
          <h3 class="review-author">${review.name}</h3>
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
