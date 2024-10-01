//load recipe from storage
const recipe = JSON.parse(localStorage.getItem('selectedRecipe')); // as recipe cards are created, its saved in storage 

if(recipe){
    document.getElementById('recipe-title').textContent= recipe.title; // inherits object attributes
    document.getElementById('recipe-detail').src =   recipe.image;
    document.getElementById('recipe-discription').textContent = recipe.description;
    document.getElementById('recipe-instructions').textContent = recipe.instructions;

    const ingredientsList = document.getElementById('recipe-ingredients');
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent=ingredient;
        ingredientsList.appendChild(li);

    });
        

}else{
    document.getElementById("recipe-title").textContent = 'no recipe';
}