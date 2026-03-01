const themeStyle = document.createElement('link');
themeStyle.rel = 'stylesheet';
document.head.appendChild(themeStyle);

// Cargar el tema preferido
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    themeStyle.href = 'styles/dark-mode.css'; // Ruta a tu CSS de modo oscuro
    document.getElementById('toggleTheme').textContent = 'Light Mode';
} else {
    themeStyle.href = 'styles/light-mode.css'; // Ruta a tu CSS de modo claro
}

// Evento para el botón de cambio de tema
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