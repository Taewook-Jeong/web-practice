//const myHeading = document.querySelector('h1');
/* querySelector() 'function': 'grab a reference' to heading
/* 'store' it in a const variable */
//myHeading.textContent = 'Hello world!';
/*'set' myHeading's textContent 'property'*/

// Image switcher code

let myImage = document.querySelector('img');
console.log('1');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');    //scr이 아니라 src다 하...
    console.log('2');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/rose.png');
        console.log('3');
    }   else {
        myImage.setAttribute ('src','images/firefox-icon.png');
        console.log('4');
    }
}


/*
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/rose.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}
*/