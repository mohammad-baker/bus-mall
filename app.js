'use strict';


let maximumVot = 25;
let startVot = 0;
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let leftImageElement = document.getElementById('left-image');
let midlleImageElemant = document.getElementById('midlle-image');
let rightImageElement = document.getElementById('right-image');


function Bus(name,src) {
    this.name = name;
    this.src = src;
    this.vots = 0;
    this.shown = 0;
    Bus.all.push(this);
}

let button=   document.getElementById('myBtn')

Bus.all = [];
new Bus('bag', 'img/bag.jpg');
new Bus('banana', 'img/banana.jpg');
new Bus('bathroom', 'img/bathroom.jpg');
new Bus('boots', 'img/boots.jpg');
new Bus('breakfast', 'img/breakfast.jpg');
new Bus('bubblegum', 'img/bubblegum.jpg');
new Bus('chair', 'img/chair.jpg');
new Bus('cthulhu', 'img/cthulhu.jpg');
new Bus('dog-duck', 'img/dog-duck.jpg');
new Bus('dragon', 'img/dragon.jpg');
new Bus('pen', 'img/pen.jpg');
new Bus('pet-sweep', 'img/pet-sweep.jpg');
new Bus('scissors', 'img/scissors.jpg');
new Bus('shark', 'img/shark.jpg');
new Bus('sweep', 'img/sweep.png');
new Bus('tauntaun', 'img/tauntaun.jpg');
new Bus('unicorn', 'img/unicorn.jpg');
new Bus('water-can', 'img/water-can.jpg');
new Bus('wine-glass', 'img/wine-glass.jpg');
console.log(Bus.all);
function ranomImage() {
    return Math.floor(Math.random() * Bus.all.length);

}

function threeImage() {
   leftImageIndex = ranomImage();
 middleImageIndex = ranomImage();
 rightImageIndex = ranomImage();




    while (leftImageIndex === rightImageIndex || middleImageIndex === leftImageIndex || middleImageIndex === rightImageIndex) {
        middleImageIndex = ranomImage();
        rightImageIndex = ranomImage();
        leftImageIndex = ranomImage();
    }
    console.log(leftImageIndex);
    console.log(leftImageElement);

    leftImageElement.setAttribute('src', Bus.all[leftImageIndex].src)
    midlleImageElemant.setAttribute ('src',Bus.all[middleImageIndex].src)
    rightImageElement.setAttribute('src',Bus.all[rightImageIndex].src)
    Bus.all[rightImageIndex].shown++;
    Bus.all[leftImageIndex].shown++;
    Bus.all[middleImageIndex].shown++;


}

threeImage()
// leftImageElement.addEventListener('click', lookimg);
// rightImageElement.addEventListener('click', lookimg);
// midlleImageElemant.addEventListener('click', lookimg);
let imageSctuoin = document.getElementById('ocation');
imageSctuoin.addEventListener('click', lookimg);
function lookimg(event) {

    startVot++;
    if (startVot < maximumVot) {
        if (event.target.id === 'left-image') {
            Bus.all[leftImageIndex].vots++;
        }
        else if (event.target.id === 'midlle-image') {
            Bus.all[middleImageIndex].vots++;



        }
        else if (event.target.id === 'right-image') {
            Bus.all[rightImageIndex].vots++;


        }
        else{
            alert('you should vote in image');
            startVot--;
        }
        threeImage()
   
    
    }
    else {
    //     leftImageElement.removeEventListener('click',lookimg);
    //   rightImageElement.removeEventListener('click',lookimg);
    //   midlleImageElemant.removeEventListener('click',lookimg);
      imageSctuoin.removeEventListener('click', lookimg);

     button.hidden=false;   
     button.addEventListener('click',fghj);
        
    }
      }
      button.addEventListener('click',fghj);


    
function fghj(){
    let list= document.getElementById('the-result');
for (let i = 0; i < Bus.all.length; i++) {
    // const element = goats[i];
    
    let listItem=document.createElement('li');

    list.appendChild(listItem);
    
    listItem.textContent=`${Bus.all[i].name} has ${Bus.all[i].vots} votes ,and was seen ${Bus.all[i].shown} times.  `
}
    button.removeEventListener('click',fghj);
}