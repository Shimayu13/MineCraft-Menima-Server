document.addEventListener("DOMContentLoaded", function() {
    const structureBoxes = document.querySelectorAll('.structurebox');
    
    structureBoxes.forEach(box => {
        const img = document.createElement('img');
        img.src = '../Picture/map.png';
        box.appendChild(img);
    });
});