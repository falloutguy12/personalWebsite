

const img1 = document.getElementsByClassName('img1');
const img2 = document.getElementsByClassName('img2');
const img3 = document.getElementsByClassName('img3');
const img4 = document.getElementsByClassName('img4');
const img5 = document.getElementsByClassName('img5');

const imgArr = [img1, img2, img3, img4, img5];



function imgRandomSelector(arr) {
    arr.forEach(x => {
        x.style.display = 'none'
    });
    let i = Math.floor(Math.random() * 5);
    arr[i].style.display = 'block';
};

const imgSelectorTimer = () => {
    let executionCounter = 0;
    if (executionCounter < 1) {
        setTimeout(() => {imgRandomSelector(imgArr)}, 3000);
        executionCounter++;
    } else if (executionCounter == 1) {
        setInterval(() => {imgRandomSelector(imgArr)}, 4000);
    } else {
        console.log("imgSelectorTimer error")
    }
};

window.onload = function() {
    imgSelectorTimer();
};

const element = document.querySelector('.fadingImgContainer:before');

function startAnimation() {
    element.style.animation = `slideDown 1s ease-out 2s  forwards, slideUp 1s linear 4s forwards`;
}

element.addEventListener('animationend', () => {
    setTimeout(startAnimation, 0);
});

startAnimation();

