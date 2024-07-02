document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const newsBoxes = document.querySelectorAll('.newsBox');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

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

    // スクロールが一番下まで到達した場合、position: fixedを解除
    const topictures = document.querySelectorAll('.topicture');
    const textopic = document.querySelectorAll('.textopic');
    if (window.scrollY + windowHeight >= documentHeight) {
        topictures.forEach(topicture => {
            topicture.style.position = 'absolute';
        });
        textopic.forEach(textopic => {
            textopic.style.position = 'absolute';
        });

        // newsBoxを表示
        newsBoxes.forEach(newsBox => {
            newsBox.classList.add('active');
        });
    } else {
        topictures.forEach(topicture => {
            topicture.style.position = 'fixed';
        });
        textopic.forEach(textopic => {
            textopic.style.position = 'fixed';
        });

        // newsBoxを非表示
        newsBoxes.forEach(newsBox => {
            newsBox.classList.remove('active');
        });
    }
});