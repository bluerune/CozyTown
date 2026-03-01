const themeStyle = document.createElement('link');
themeStyle.rel = 'stylesheet';
document.head.appendChild(themeStyle);

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    themeStyle.href = 'styles/dark-mode.css'; 
    document.getElementById('toggleTheme').textContent = 'Light Mode';
} else {
    themeStyle.href = 'styles/light-mode.css'; 
}

document.getElementById('toggleTheme').addEventListener('click', function () {
    if (themeStyle.href.includes('light-mode.css')) {
        themeStyle.href = 'styles/dark-mode.css';
        localStorage.setItem('theme', 'dark');
        this.textContent = 'Light Mode';
    } else {
        themeStyle.href = 'styles/light-mode.css';
        localStorage.setItem('theme', 'light');
        this.textContent = 'Dark Mode';
    }
});