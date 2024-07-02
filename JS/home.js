document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const textElement = section.querySelector('.textopic');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            sections.forEach(sec => sec.classList.remove('active'));
            section.classList.add('active');
            
            if (textElement) {
                sections.forEach(sec => {
                    const txt = sec.querySelector('.textopic');
                    if (txt) {
                        txt.classList.remove('active');
                        txt.classList.remove('entering');
                        txt.classList.add('inactive');
                    }
                });
                textElement.classList.remove('inactive');
                textElement.classList.remove('entering');
                textElement.classList.add('active');
            }
        } else {
            if (textElement && !textElement.classList.contains('inactive')) {
                textElement.classList.remove('active');
                textElement.classList.add('inactive');
            }
        }
    });

    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        const enteringText = activeSection.querySelector('.textopic.entering');
        if (enteringText) {
            enteringText.classList.remove('entering');
            enteringText.classList.add('active');
        }
    }
});