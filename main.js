

const img1 = document.getElementsByClassName('img1');
const img2 = document.getElementsByClassName('img2');
const img3 = document.getElementsByClassName('img3');
const img4 = document.getElementsByClassName('img4');
const img5 = document.getElementsByClassName('img5');

const imgArr = [img1, img2, img3, img4, img5];

function imgRandomSelector(arr) {
    let i = Math.floor(Math.random() * 4);
    console.log(i);
}