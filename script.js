document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.welcome-text');


    text.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        this.style.opacity = '0.8';

        setTimeout(() => {
            this.style.transform = '';
            this.style.opacity = '';
        }, 150);
    });

    setTimeout(() => {
        text.classList.add('loaded');
    }, 100);
});


document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.logo, .welcome-text, .sub-text');

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
});
