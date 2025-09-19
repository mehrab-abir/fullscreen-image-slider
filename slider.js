const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let intervalID; //to clear/reset the inerval

const nextSlide = () =>{
    //get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if(current.nextElementSibling){
        //add current class to next slide
        current.nextElementSibling.classList.add('current');
    }
    else{
        //add current class to first slide
        slides[0].classList.add('current');
    }
    //setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () =>{
    //get current element through the 'current' class
    const currentElement = document.querySelector('.current');
    //remove 'current' class from the currentElement
    currentElement.classList.remove('current');
    //check for previous slide
    if(currentElement.previousElementSibling){
        //add 'current' class to previous slide
        currentElement.previousElementSibling.classList.add('current');
    }
    else{
        //add 'current' class to last slide
        slides[slides.length-1].classList.add('current');
    }
    //setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click',function(e){
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        intervalID = setInterval(nextSlide,intervalTime);
    }
})
prev.addEventListener('click',function(e){
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        intervalID = setInterval(prevSlide,intervalTime);
    }
})

//slide autoplay
if(auto){
    intervalID = setInterval(nextSlide,intervalTime);
}
