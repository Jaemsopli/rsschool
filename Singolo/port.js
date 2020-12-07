
const slide = document.querySelectorAll('.flex-container');
const slideImg = document.querySelectorAll('.flex-container img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const turnOffTheScreen = document.querySelector('.button-circle')
//let first = document.querySelector('#first');
//let last = document.querySelector('#last');
//let fon =  document.querySelector('.container');


turnOffTheScreen.addEventListener('click', () => {
 alert('выключить?');
});

 
 let i = 1;

const next = () => {
if (i === slideImg.lenght - 1) {
  i = 0;
 }
}



/*i = 0;
fon.onclick = function() {
    this.style.background = 'blue';
this.style.background = 'red';
  i++;
}

let counter = 1;
const size = slideImg[0].clientWidth;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=> {
if (counter >= slideImg.length - 1) return;
slide.style.transition = "transform 0.4s ease-in-out";
counter++;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
if (counter <= 0) return;
slide.style.transition = "transform 0.4s ease-in-out";
counter--;
slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
});

slide.addEventListener('transitionend', ()=> {
if (slideImg[counter].id === 'last') {
slide.style.transition = "none";
counter = slideImg.length -2;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
if (slideImg[counter].id === 'first') {
slide.style.transition = "none";
counter = slideImg.length - counter;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});



/*{
 {
    console.log(slideImg[i]);
    
}
}
*/




