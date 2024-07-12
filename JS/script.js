window.onload = function() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
        submenu.style.opacity = 0;
        submenu.style.visibility = 'hidden';
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const pageLink = document.querySelector('.pageLink');
    const horizontalLinks = document.querySelectorAll('.horizontal');

    hamburgerMenu.addEventListener('click', function() {
        pageLink.classList.toggle('active');
    });

    horizontalLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 600) {
                this.classList.toggle('active');
            }
        });
    });
};