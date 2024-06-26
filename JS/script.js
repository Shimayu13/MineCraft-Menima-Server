document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function () {
            const content = this.querySelector('.dropdown-content');
            content.style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function () {
            const content = this.querySelector('.dropdown-content');
            content.style.display = 'none';
        });
    });
});