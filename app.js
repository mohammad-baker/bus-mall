'use strict';


let maximumVot = 25;
let startVot = 0;
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;



let leftImageElement = document.getElementById('left-image');
let midlleImageElemant = document.getElementById('midlle-image');
let rightImageElement = document.getElementById('right-image');



Bus.all = [];
let localStorage=[];
let votesArr = [];
let shownArr = [];
let namesArr = [];
let priveIndex=[];





function Bus(name, src) {
    this.name = name;
    this.src = src;
    this.vots = 0;
    this.shown = 0;
    Bus.all.push(this);
    namesArr.push(this.name);

    
}

let button = document.getElementById('myBtn')
// console.log(Bus.all);

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



getBusmall();
function jkp() {
    let newVa=JSON.stringify(Bus.all);
    window.localStorage.setItem('Busmall',newVa);
    
}

function getBusmall() {
    // console.log('befor',Bus.all);
    let trueStoarge  =window.localStorage.getItem('Busmall');
    //  console.log(trueStoarge);
    let backBus=JSON.parse(trueStoarge);


    if (backBus !==null){
        // console.log("buck sting",backBus);
        // for (let i = 0; i < backBus.length; i++) {
        //     new Bus(backBus[i].name,backBus[i].src,backBus[i].vots,backBus[i].shown)
            
        // }

        Bus.all=backBus;
                console.log('after',Bus.all);

    }

    
}

function ranomImage() {
    return Math.floor(Math.random() * Bus.all.length);

}


function threeImage() {
    leftImageIndex = ranomImage();
    middleImageIndex = ranomImage();
    rightImageIndex = ranomImage();

    while (leftImageIndex === rightImageIndex || middleImageIndex === leftImageIndex || middleImageIndex === rightImageIndex||priveIndex.includes(leftImageIndex)||priveIndex.includes(rightImageIndex)||priveIndex.includes(middleImageIndex)) {
        middleImageIndex = ranomImage();
        rightImageIndex = ranomImage();
        leftImageIndex = ranomImage();
    }
    priveIndex=[leftImageIndex,middleImageIndex,rightImageIndex];

    


    leftImageElement.setAttribute('src', Bus.all[leftImageIndex].src)
    midlleImageElemant.setAttribute('src', Bus.all[middleImageIndex].src)
    rightImageElement.setAttribute('src', Bus.all[rightImageIndex].src)



    Bus.all[rightImageIndex].shown++;
    Bus.all[leftImageIndex].shown++;
    Bus.all[middleImageIndex].shown++;


}











threeImage()




let imageSctuoin = document.getElementById('ocation');
imageSctuoin.addEventListener('click', lookimg);
function lookimg(event) {
    
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
        else {
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
        jkp()
        button.hidden = false;
        button.addEventListener('click', fghj);

    }
    startVot++;

}
button.addEventListener('click', fghj);



function fghj() {
    let list = document.getElementById('the-result');
    for (let i = 0; i < Bus.all.length; i++) {
        // const element = goats[i];

        let listItem = document.createElement('li');

        list.appendChild(listItem);

        listItem.textContent = `${Bus.all[i].name} has ${Bus.all[i].vots} votes ,and was seen ${Bus.all[i].shown} times.  `

    }
    for (let i = 0; i < Bus.all.length; i++) {
        votesArr.push(Bus.all[i].vots);

        shownArr.push(Bus.all[i].shown);


    }
    showChart();
    
    button.removeEventListener('click', fghj);
    

}













function showChart() {

    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votesArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: shownArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };


    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}

