const recipes = [
  {
    name: "Apple Crisp",
    image: "images/apple-crisp.jpg",
    tags: ["dessert"],
    rating: 4,
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
  }
];

function renderRecipes() {
  const container = document.querySelector('.recipes');
  container.innerHTML = '';

  recipes.forEach(recipe => {
    const card = document.createElement('article');
    card.classList.add('recipe-card');

    card.innerHTML = `
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.name}" width="400" height="300">
      </div>
      <div class="recipe-info">
        <div class="tags">
          ${recipe.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <h2>${recipe.name}</h2>
        <span
          class="rating"
          role="img"
          aria-label="Rating: 4 out of 5 stars"
        >
          <span aria-hidden="true" class="icon-star">⭐</span>
          <span aria-hidden="true" class="icon-star">⭐</span>
          <span aria-hidden="true" class="icon-star">⭐</span>
          <span aria-hidden="true" class="icon-star-empty">⭐</span>
          <span aria-hidden="true" class="icon-star-empty">☆</span>
        </span>
        <p class="description">${recipe.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

renderRecipes();
