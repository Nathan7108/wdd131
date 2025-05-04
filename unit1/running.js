const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = total;

const themeSelector = document.querySelector('#themeSelector');
const body = document.body;

function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

themeSelector.addEventListener('change', changeTheme);
