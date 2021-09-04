// var elements = document.querySelectorAll('h1');

// for(var i = 0 ; i < elements.length ;i++)
// {
//     elements[i].addEventListener('click',hello);
// }

// function hello()
// {
//     alert('hello');
// }

// var x = document.getElementsByClassName('well');
// var x = document.getElementsByTagName('h1');
// var x = document.getElementsByName('');
// console.log(x);


// var elements = document.querySelector('h1');


// elements.style.cssText="background-color : red !important"

// var imgItem = document.querySelector('img');

// document.body.addEventListener('mousemove',function(e){
// imgItem.style.top = e.clientY-25;
// imgItem.style.left = e.clientX-25;
// })

var smallImgs = document.querySelectorAll('.imgs');

for(var i =0 ; i<smallImgs.length ; i++){

smallImgs[i].addEventListener('click', function(e) {
// console.log(e.target);
var imgsSrc = e.target.getAttribute('src');
document.querySelector('.mainImg').setAttribute('src',imgsSrc);
})
}