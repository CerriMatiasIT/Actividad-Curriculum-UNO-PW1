document.addEventListener('DOMContentLoaded', () => {
    //VARIABLES
    const themeToggleButton = document.querySelector('.Boton-Dia-Noche');
    const body = document.body;
    const darkModeClass = 'dark-mode';
    const themeKey = 'theme';

    const loadTheme = () => {
        const savedTheme = localStorage.getItem(themeKey);
        if (savedTheme === 'dark') {
            body.classList.add(darkModeClass);
        } else {
            body.classList.remove(darkModeClass);
        }
    };

    const toggleTheme = () => {
        body.classList.toggle(darkModeClass);

        if (body.classList.contains(darkModeClass)) {
            localStorage.setItem(themeKey, 'dark');
        } else {
            localStorage.setItem(themeKey, 'light');
        }
    };

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    loadTheme();
});