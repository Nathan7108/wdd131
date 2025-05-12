const themeSelect = document.getElementById('themeSelect');
const body = document.body;

function changeTheme() {
    if (themeSelect.value === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}

themeSelect.addEventListener('change', changeTheme);