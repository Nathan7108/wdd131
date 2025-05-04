const themeSelector = document.querySelector('#themeSelector');
const logo = document.querySelector('#logo');
const body = document.body;

function changeTheme() {
  const currentTheme = themeSelector.value;

  if (currentTheme === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo-white.png';
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo-blue.png';
  }
}

themeSelector.addEventListener('change', changeTheme);
