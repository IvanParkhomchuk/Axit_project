let offset = 0;
const sliderLine = document.querySelector('.tabs-block-slider-line');

const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');

document.querySelector('.tab1').addEventListener('click', function() {
    offset = 0;
    sliderLine.style.top = offset + 'px';

    tab1.style.background = '#ff8b38';
    tab2.style.background = '#333333';
    tab3.style.background = '#333333';
});

document.querySelector('.tab2').addEventListener('click', function() {
    offset = -205;
    sliderLine.style.top = offset + 'px';

    tab1.style.background = '#333333';
    tab2.style.background = '#ff8b38';
    tab3.style.background = '#333333';
});

document.querySelector('.tab3').addEventListener('click', function() {
    offset = -405;
    sliderLine.style.top = offset + 'px';

    tab1.style.background = '#333333';
    tab2.style.background = '#333333';
    tab3.style.background = '#ff8b38';
});