document.addEventListener('DOMContentLoaded', () => {

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

const imgArr = [img1, img2, img3, img4, img5];



function imgRandomSelector(arr) {
    arr.forEach(x => {
        x.style.display = 'none'
    });
    let i = Math.floor(Math.random() * (arr.length - 1)) + 1; // Generates a random number between 1 and arr.length - 1
    arr[i].style.display = 'block';
};


const imgSelector = () => {
        setTimeout(() => {imgRandomSelector(imgArr)}, 3000);
}; //this executes the imgRandomSelector with the correct timing between img selection based on the animation timing


imgSelector();

let skillsIcons = document.querySelectorAll('.icons');

let skillsContainer = document.getElementsByClassName('skills')[0];

skillsIcons.forEach(icon => {
    skillsContainer.addEventListener('mouseenter', (event) => {
        icon.style.transform = 'scale(1.3)';
    });
    skillsContainer.addEventListener('mouseleave', (event) => {
        icon.style.transform = 'scale(1)';
    });
});

/*const element = document.getElementsByClassName('fadingImgContainer__overlay')[0];

function startAnimation() {
    element.style.animation = `slideDown 1s ease-out 2s  forwards, slideUp 1s linear 4s forwards`;
};

function stopAnimation() {
    element.style.animation = ''
};

let animationInterval = 5000; // 5 seconds
let animationDelay = 2000; // 2 seconds

function startAnimation() {
    element.style.animation = `slideDown 1s ease-out 2s  forwards, slideUp 1s linear 4s forwards`;
}

function stopAnimation() {
    element.style.animation = '';
}

setInterval(() => {
    stopAnimation();
    setTimeout(startAnimation, animationDelay);
}, animationInterval);
 I CANT GET THE ANIMATION AND IMG CHANGE TO PERFORM SEQUENTALY REPEATEDLY  */



});

