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

// Personalized message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1'); // take references to button&h1 / store
function setUserName() {
  let myName = prompt('Please enter your name.');
  // display a dialog box, asking to enter data, store
  localStorage.setItem('name', myName);
  // API localStorage: store data in 'browser' and retrieve it later.
  // setItem: create&store 'item data', set value
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')){
  //'name' data가 존재하지 않다면
  //없을 때 false를 return하나? -> null을 return하는데 boolean 연산에서 false 취급.
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
// 이전에 입력한 게 없다 -> setUserName으로 입력하여 문구 출력
// 있다(이전에 입력하여 loalStorage, browser에 저장) -> 꺼내서 문구 출력
myButton.onclick = function() {
  setUserName();
}
// button에 onclick 'event handler'추가