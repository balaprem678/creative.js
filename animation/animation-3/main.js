var image1 = document.querySelector('.image-1');
var image2 = document.querySelector('.image-2');

function handleImage1(){
  image1.classList.add("show");
}

function handleImage2(){
  image2.classList.add("show");
}

function handleText1(){
  text1.classList.add("show");
}
function handleText2(){
  text1.classList.add("show");
}
setTimeout(handleText1, 1000);

setTimeout(handleText2, 2000);

