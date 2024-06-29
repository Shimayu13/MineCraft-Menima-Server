window.onload = function() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
        submenu.style.opacity = 0;
        submenu.style.visibility = 'hidden';
    });
};