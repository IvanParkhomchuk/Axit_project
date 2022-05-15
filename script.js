autoSlider();

var offset = 0;
var timer;

const tab1btn = document.querySelector('.tab1-btn');
const tab2btn = document.querySelector('.tab2-btn');
const tab3btn = document.querySelector('.tab3-btn');

function autoSlider() {
    timer = setTimeout(tabs, 5000);
}

const sliderLine = document.querySelector('.tabs-block-slider-line');

function tabs() {
    offset = offset - 200;

    if (offset == 0) {
        tab1btn.style.background = '#ff8b38';
        tab2btn.style.background = '#333333';
        tab3btn.style.background = '#333333';
    }
    else if (offset == -200) {
        tab1btn.style.background = '#333333';
        tab2btn.style.background = '#ff8b38';
        tab3btn.style.background = '#333333';
    }
    else if (offset == -400) {
        tab1btn.style.background = '#333333';
        tab2btn.style.background = '#333333';
        tab3btn.style.background = '#ff8b38';
    }
    
    if (offset < -400) {
        offset = 0;

        tab1btn.style.background = '#ff8b38';
        tab2btn.style.background = '#333333';
        tab3btn.style.background = '#333333';

        clearTimeout(timer);
    }

    sliderLine.style.top = offset + 'px';
    autoSlider();
}

tab1btn.addEventListener('click', function() {
    offset = 0;
    sliderLine.style.top = offset + 'px';

    tab1btn.style.background = '#ff8b38';
    tab2btn.style.background = '#333333';
    tab3btn.style.background = '#333333';

    clearTimeout(timer);
    autoSlider();
});

tab2btn.addEventListener('click', function() {
    offset = -200;
    sliderLine.style.top = offset + 'px';

    tab1btn.style.background = '#333333';
    tab2btn.style.background = '#ff8b38';
    tab3btn.style.background = '#333333';

    clearTimeout(timer);
    autoSlider();
});

tab3btn.addEventListener('click', function() {
    offset = -400;
    sliderLine.style.top = offset + 'px';

    tab1btn.style.background = '#333333';
    tab2btn.style.background = '#333333';
    tab3btn.style.background = '#ff8b38';

    clearTimeout(timer);
    autoSlider();
});