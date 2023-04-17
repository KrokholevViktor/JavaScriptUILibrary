import $ from "../core";

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        
        slidesField.style.width = 100 * slides.length +'%';
        slides.forEach(slide => {
            slide.style.width = width;
        })

        let offset = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offs += +width.replace(/\D/g, '')            
            }

            slidesField.style.transform = `translateX(-${offset}x)`
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1)
            } else {
                offs -= +width.replace(/\D/g, '')            
            }

            slidesField.style.transform = `translateX(-${offset}x)`
        });
    }
};

$('.carousel').carousel();