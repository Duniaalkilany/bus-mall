'use strict'


//global array for the objects 
let allProducts = [];

 let timeShown ;
// global variables
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

// global counters
let  totalClicks = 0;
let maxClicks =25 ;
let percent ;

//getting elements Globally
let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');


// constructor function 
function product (name,source){
    this.name = name;
    this.source =source;
    this.timeShown=0;
    this.votes=0

allProducts.push(this);

}

//// New Instances
new product ('bag','img/bag.jpg') 
new product ('banana','img/banana.jpg') 
new product ('bathroom','img/bathroom.jpg') 
new product ('boots', 'img/boots.jpg') 
new product ('breakfast','img/breakfast.jpg') 
new product ('bubblegum','img/bubblegum.jpg') 
new product ('chair','img/chair.jpg') 
new product ('cthulhu','img/cthulhu.jpg') 
new product ('dog-duck', 'img/dog-duck.jpg') 
new product ('dragon','img/dragon.jpg') 
new product ('pen','img/pen.jpg') 
new product ('pet-sweep','img/pet-sweep.jpg') 
new product ('scissors','img/scissors.jpg') 
new product ('shark','img/shark.jpg') 
new product ('sweep','img/sweep.png') 
new product ('tauntaun','img/tauntaun.jpg') 
new product ('unicorn','img/unicorn.jpg') 
new product ('water-can','img/water-can.jpg') 
new product ('wine-glass','img/wine-glass.jpg')

//function to generate random index
function generateRandomIndex (){
      // generate a random number 0-18
      let randomIndex = Math.floor(Math.random() *allProducts.length );
    return Math.floor(Math.random() *allProducts.length );
    
}

console.log(Math.floor(Math.random() *allProducts.length ));


//function to render images 
function renderThreeImages (){
leftImageIndex = generateRandomIndex ();
middleImageIndex =generateRandomIndex ();
 rightImageIndex =generateRandomIndex ();

 while (leftImageIndex===middleImageIndex || leftImageIndex=== rightImageIndex ){
    middleImageIndex=generateRandomIndex ();
    rightImageIndex=generateRandomIndex ();
 }
 while ( middleImageIndex=== rightImageIndex) {
    rightImageIndex=generateRandomIndex ();
 }
// assign src
 leftImageElement.src =allProducts[leftImageIndex].source;
 middleImageElement.src =allProducts[middleImageIndex].source;
 rightImageElement.src =allProducts[rightImageIndex].source;
// assign the alt
leftImageElement.alt =allProducts[leftImageIndex].name;
middleImageElement.alt =allProducts[middleImageIndex].name;
rightImageElement.alt =allProducts[rightImageIndex].name;

//// increment times shown
allProducts[leftImageIndex].timeShown++;
allProducts[middleImageIndex].timeShown++;
allProducts[rightImageIndex].timeShown++;

}

renderThreeImages();




// event listener
leftImageElement.addEventListener('click', handleUserClick);
middleImageElement.addEventListener('click', handleUserClick);
rightImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    totalClicks++;

    for (var i=0; i < allProducts.length; i++) {
        if(event.target.alt === allProducts[i].name) {
         allProducts[i].votes++;
        }
      }
      if (totalClicks < maxClicks){
        renderThreeImages();  
      }
  /*if ( totalClicks<maxClicks ) {
  
    if (event.target.id === 'left-image'){
        allProducts[leftImageIndex].votes =   allProducts[leftImageIndex].votes + 1; 
    
    }
    else if (event.target.id === 'middle-image'){
        allProducts[middleImageIndex].votes =  allProducts[middleImageIndex].votes + 1; 
    
     
    }
    else {
        allProducts[rightImageIndex].votes =  allProducts[rightImageIndex].votes + 1; 
   
 
    }
  
  if (totalClicks<5){
  
    
     renderThreeImages();}
   
  }*/
  else  {
    leftImageElement.removeEventListener('click', handleUserClick);
    middleImageElement.removeEventListener('click', handleUserClick);
    rightImageElement.removeEventListener('click', handleUserClick);
    //for (var i= 0; i< allProducts.length; i++){
        //debugger;
        //if (allProducts[i].timeShown === 0) {
         //percent = 0;
        //}
    // else {
          //percent = Math.round(allProducts[i].votes/ allProducts[i].timeShown * 100);
        //}
     
    //append list to the DOM ,getting elements 
    let btn = document.getElementById('new')
    btn.addEventListener('click',data);
function data (event){
    for (var i= 0; i< allProducts.length; i++){
   let list = document.getElementById('listOfData');
 let ulEl = document.createElement('ul');
 listOfData.appendChild(ulEl);
 let liEl = document.createElement('li');
    liEl.textContent = allProducts[i].name + ' has ' + allProducts[i].votes + ' votes,'+ ' and was seen ' +allProducts[i].timeShown + ' times'//+//'percent = '+ percent;
    ulEl.appendChild(liEl);}
  }
  
  }



}

