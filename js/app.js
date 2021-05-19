'use strict'
  let randomIndex ;
 // global array for the img used in each iteration 
let image= [1, 2, 3 ,4,5,6];
//global array for the objects 
 let allProducts = [];
let imgUsed =[];
// global array for products name 
let productsNames =[];
// global array for products votes
let productVotes=[];
// global array for #  of products tine shown 
let productShown=[];

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
    productsNames.push(this.name)
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
     return Math.floor(Math.random() *allProducts.length);
    
        }
  

     console.log(generateRandomIndex ());


  




//function to render images 
function renderThreeImages (){

  leftImageIndex = generateRandomIndex ();
  middleImageIndex =generateRandomIndex ();
   rightImageIndex =generateRandomIndex ();
  
   while (leftImageIndex === middleImageIndex|| leftImageIndex === rightImageIndex || middleImageIndex=== rightImageIndex || imgUsed.includes(leftImageIndex) ||imgUsed.includes(middleImageIndex) || imgUsed.includes(rightImageIndex)){
    leftImageIndex = generateRandomIndex();
    middleImageIndex =generateRandomIndex();
    rightImageIndex =generateRandomIndex();
   }
  imgUsed[0]=leftImageIndex;
  imgUsed[1]= middleImageIndex;
  imgUsed[2]=rightImageIndex;





// assign src
 leftImageElement.src =allProducts[leftImageIndex].source;
 console.log(leftImageElement.src);
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
  
  else  {
    leftImageElement.removeEventListener('click', handleUserClick);
    middleImageElement.removeEventListener('click', handleUserClick);
    rightImageElement.removeEventListener('click', handleUserClick);
    
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
  for (var i= 0; i< allProducts.length; i++){
    productVotes.push(allProducts[i].votes)
    productShown.push(allProducts[i].timeShown)
  }
  newChart();
  createLocalStorage();
  }

}
}



function newChart() {

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: productsNames,
          datasets: [{
                  label: '# of product Votes',
                  data: productVotes,
                  backgroundColor: 'white',
                  borderColor: 'rgb(2, 21, 49)',
                  borderWidth: 2
              },
              {
                  label: '# of product img shown',
                  data: productShown,
                  backgroundColor: 'rgb(2, 21, 49)',
                  borderColor: 'white',
                  borderWidth: 2
              }
          ]
      },
      options: {

      }
  });

}



// Creating local storage

function createLocalStorage(){
  var stringifiedallProducts = JSON.stringify(allProducts);
  localStorage.setItem('allProductsStorage',stringifiedallProducts );
}

//getting the items

function checkLocalStorage(){
  if (localStorage.allProductsStorage) {
    let recoveredallProductsStorage = localStorage.getItem('allProductsStorage');
    let parsedallProductsStorage = JSON.parse(recoveredallProductsStorage);
    allProducts = parsedallProductsStorage;
    renderThreeImages();
  } else {
    renderThreeImages();
  }
}


checkLocalStorage();


//---------------form and event----------------------------

/*let allProductsForm = document.getElementById('allProductsForm');
allProductsForm.addEventListener('submit', setNumberOfRounds);
function setNumberOfRounds (event){
totalClicks;
  event.preventDefault();
  //assigning new value to totalClicks
  let totalClicks = event.target.NumberOfRounds.value;
  renderThreeImages();
}*/
