document.addEventListener("DOMContentLoaded", function() {
    const structureBoxes = document.querySelectorAll('.structurebox');
    
    structureBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const div_extext = document.querySelector('.extext');
            if (div_extext) {
                div_extext.innerHTML = box.getAttribute('data-explain');
                document.querySelector('.explainBox').style.display = 'block';
            } else {
                console.error('extext 要素が見つかりませんでした');
            }
        });
    });
});

