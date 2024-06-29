document.querySelectorAll('.roadbox').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.querySelector('.broadpicture').style.display = 'none';
        box.querySelector('.broadtext').style.display = 'none';
        box.querySelector('.aroadpicture').style.display = 'block';
        box.querySelector('.aroadtext').style.display = 'block';
    });
    box.addEventListener('mouseout', () => {
        box.querySelector('.broadpicture').style.display = 'block';
        box.querySelector('.broadtext').style.display = 'block';
        box.querySelector('.aroadpicture').style.display = 'none';
        box.querySelector('.aroadtext').style.display = 'none';
    });
});