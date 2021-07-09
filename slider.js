'use strict';

(() => {
    const SLIDER = {
        BODY: document.querySelector('.slider-carousel').querySelector('ul'),
        START: 1000,
        SPEED: 5000
    };

    if (SLIDER) {
        let elements = document.querySelectorAll('li');
        let count = elements.length;

        function animation(number) {
            elements[number].style.opacity = 0;

            if (number == 0) {
                number = count; 

                elements.forEach((element) => {
                    element.style.opacity = 1;
                });
            }

            setTimeout(() => { animation(number - 1) }, SLIDER.SPEED);
        }

        setTimeout(() => { animation(count - 1) }, SLIDER.START);
    }
})();