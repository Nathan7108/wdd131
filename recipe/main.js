import recipes from './recipe.mjs';

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(recipeList) {
  const randomIndex = getRandomNumber(recipeList.length);
  return recipeList[randomIndex];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<article class="recipe-card">
    <div class="recipe-image">
      <img src="${recipe.image}" alt="${recipe.name}" width="400" height="300">
    </div>
    <div class="recipe-info">
      <div class="tags">
        ${tagsTemplate(recipe.tags)}
      </div>
      <h2>${recipe.name}</h2>
      <span class="rating">
        ${ratingTemplate(recipe.rating)}
      </span>
      <p class="description">${recipe.description}</p>
    </div>
  </article>`;
}

function renderRecipes(recipeList) {
  const container = document.querySelector('.recipes');
  container.innerHTML = '';
  
  recipeList.forEach(recipe => {
    const recipeHTML = recipeTemplate(recipe);
    container.innerHTML += recipeHTML;
  });
}

function filterRecipes(query) {
  const searchTerm = query.toLowerCase();
  
  const filtered = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm) ||
           recipe.description.toLowerCase().includes(searchTerm) ||
           recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
           recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
  });
  
  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
  
  return sorted;
}

function searchHandler(e) {
  e.preventDefault();
  
  const searchInput = document.querySelector('.search-form input');
  const query = searchInput.value;
  
  if (query.trim() === '') {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
  } else {
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  }
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
  
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', searchHandler);
}

document.addEventListener('DOMContentLoaded', init);
