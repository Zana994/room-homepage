var previous_slide = document.querySelector('[data-previous]');
var next_slide = document.querySelector('[data-next]');
var slides_arr = document.getElementsByClassName('slide');

var current_index = 0;

previous_slide.addEventListener('click', getPreviousSlide);
next_slide.addEventListener('click', getNextSlide);

function getPreviousSlide() {
    for(var i=0; i < slides_arr.length; i++)
    slides_arr[i].style.display = 'none';

    if(current_index === 0) {
        current_index = slides_arr.length - 1;
    } else {
        current_index = current_index - 1;
    }
    slides_arr[current_index].style.display = 'flex';
}

function getNextSlide() {
    for(var i=0; i < slides_arr.length; i++)
    slides_arr[i].style.display = 'none';

    if(current_index === slides_arr.length - 1) {
        current_index = 0;
    } else {
        current_index = current_index + 1;
    }
    slides_arr[current_index].style.display = 'flex';
}