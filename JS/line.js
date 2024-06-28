document.querySelectorAll('.planbox').forEach(box => {
    box.addEventListener('click', () => {
        const text = box.querySelector('.pltext');
        text.style.display = text.style.display === 'block' ? 'none' : 'block';
    });
});