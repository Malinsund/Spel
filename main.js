window.addEventListener("DOMContentLoaded", main);


let mySound = new Audio('audio/dark-underworld-144813.mp3');
let prassel = new Audio('audio/prassel.mp3');
let zombieSound = new Audio ('audio/zomiesound.wav');


const header = document.querySelector(".header"); 
const backPackCount = document.createElement('img')
backPackCount.src = "Assets/backpack.png";
backPackCount.className = "backPack";


header.appendChild(backPackCount);


function main (){
    loadBackPackFromLS();
    setupSceneButtons();
}

function setupSceneButtons() {
    /* här nedan växlar man mellan sidorna */
    document.getElementById("nextSceneButton").addEventListener('click', renderScenePharmacy);
    document.getElementById("outDoorStoreButton").addEventListener('click', renderSceneOutDoorStore);
    document.getElementById("clothingStoreButton").addEventListener('click', renderSceneClothingStore);
    document.getElementById('kill').addEventListener('click', renderSceneGrocerystore);
    document.getElementById("backDoorButton").addEventListener('click', renderSceneBackDoor);

    /* dessa två är vid flervalsfrågan på zombie-attack scenen */
    document.getElementById("goBackButton").addEventListener('click', renderGoBackMessage);
    document.getElementById("giveUp").addEventListener('click', renderGiveUpMessage);
}

// function showScene(htmlId) {
//     const container = document.getElementById("content-container");
//     const temp = document.getElementById(htmlId);
//     const sceneHtml = temp.content.cloneNode(true)
//     container.innerHTML = "";
//     container.append(sceneHtml);
// }
/** Hämtar nästa scen och tar bort den gamla scenen via knapptryck, bakgrundbild och innehåll ändras
 * @function
 */
function renderScenePharmacy() {
    // kommer åt startsidan
    var mallMain = document.getElementById('mallMain');
   
    
    // tar bort startsidan
    while (mallMain.firstChild) {
        mallMain.removeChild(mallMain.firstChild);
    }
    // visar apoteket
    pharmacy.style.display = 'block';

    mySound.play();
    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("assets/pharmacy.png")';
    backgroundImg.style.backgroundSize = "cover";

}
function renderSceneOutDoorStore() {
    // kommer åt apoteket?
    var pharmacy = document.getElementById('pharmacy');

    // tar bort apoteket
    while (pharmacy.firstChild) {
        pharmacy.removeChild(pharmacy.firstChild);
    }
    // visar frilufsbutiken
    outDoorStore.style.display = 'block';

   
    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("Assets/grocerystore.png")';
    backgroundImg.style.backgroundSize = "cover";

    //mySound.pause();
    prassel.play();
    
} 
// zombiescenen
function renderSceneClothingStore() {
    var pharmacy = document.getElementById('outDoorStore');

    // tar bort frilufsbutiken
    while (outDoorStore.firstChild) {
        outDoorStore.removeChild(outDoorStore.firstChild);
    }
    // visar klädbutiken
    clothingStore.style.display = 'block';

    const zombie = document.getElementById('zombieAttack');

    setTimeout(function(){
        zombieAttack.style.display = 'block';
        zombieSound.play();
    }, 1500);

    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("Assets/clothingstore.png")';
    backgroundImg.style.backgroundSize = "cover";

    prassel.pause();

}


function renderGoBackMessage() {

    let divContainer = document.createElement('div');  //felmeddelande i inspektera?? whyyyyyyy???
    divContainer.className = "go-back";
    divContainer.textContent = "NEEEEJ, när du vände dig om fick zombien tag på dig! du har nu blivit middag";

    const confirmButton = document.createElement('button');
    confirmButton.className = "confirm-button";
    confirmButton.textContent = "BU!";
    confirmButton.onclick = function(){
       location.reload();
    
    },
    
    document.body.appendChild(divContainer);
    divContainer.append(confirmButton);
    
    let parent = document.getElementById('clothingStore').parentNode;
    parent.replaceChild(divContainer, document.getElementById('clothingStore'));

   // return divContainer();



}
function renderGiveUpMessage() {

    let divContainer = document.createElement('div');  //felmeddelande i inspektera?? whyyyyyyy???
    divContainer.className = "go-back";
    divContainer.textContent = "Din Fegis!! \n Du har valt ett evigt miserabelt hjärn-ätar-liv \n lycka till!";

    const confirmButton = document.createElement('button');
    confirmButton.className = "confirm-button";
    confirmButton.textContent = "BU!";
    confirmButton.onclick = function(){
        location.reload();
    },    
    
    document.body.appendChild(divContainer);
    divContainer.append(confirmButton);
    
    let parent = document.getElementById('clothingStore').parentNode;
    parent.replaceChild(divContainer, document.getElementById('clothingStore'));

    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("Assets/dead.png")';
    backgroundImg.style.backgroundSize = "cover";
    
    
}
function renderSceneGrocerystore(){
    // kommer åt klädaffären
    var clothingStore = document.getElementById('clothingStore');

    // tar bort klädaffären
    while (clothingStore.firstChild) {
        clothingStore.removeChild(clothingStore.firstChild);
    }
    // visar mataffären
    groceryStore.style.display = 'block';

   
    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("Assets/grocerystore1.png")';
    backgroundImg.style.backgroundSize = "cover";
}
function renderSceneBackDoor(){
    var groceryStore = document.getElementById('groceryStore');

    while (groceryStore.firstChild) {
        groceryStore.removeChild(groceryStore.firstChild);
    }
    backDoor.style.display = 'block';

    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("Assets/backdoor.png")';
    backgroundImg.style.backgroundSize = "cover";

}

/** Ökar antal varje gång något föremål läggs i ryggsäcken ( count badge)
 * @function 
 * 
 */
function increaseCount(){
    let badge = document.getElementById('badgeCount');
    let currentCount = parseInt(badge.innerText);
    badge.innerText = currentCount + 1;
}



/** Här är de object/bilder man kan klicka på i spelet
 * 
 */
document.getElementById("penicillin").addEventListener('click', pickUpPenicillin);
document.getElementById("firstAid").addEventListener('click', pickUpFirstAid);
document.getElementById("pistol").addEventListener('click', pickUpGun);
document.getElementById("knife").addEventListener('click', pickUpKnife)
document.getElementById("konserv").addEventListener('click', pickUpKonserv)
document.getElementById("water").addEventListener('click', pickUpWater)

/**Funktioner För att ta bort object/bilder från spelet och lägga de i ryggsäcken när man klickar på dom
 * 
 * @function
 */
function pickUpPenicillin() {
    const medicin = document.querySelector("#penicillin");
    medicin.remove();
    increaseCount();

    backPack.push();
    
}
function pickUpFirstAid() {
    const medicin2 = document.querySelector("#firstAid");
    medicin2.remove();
    increaseCount();
}
function pickUpGun() {
    const gun = document.querySelector("#pistol");
    gun.remove();
    increaseCount();
}
function pickUpKnife() {
    const knife = document.querySelector("#knife");
    knife.remove()
    increaseCount();
}
function pickUpKonserv() {
    const konserv = document.querySelector("#konserv");
    konserv.remove()
    increaseCount();

}function pickUpWater() {
    const water = document.querySelector("#water");
    water.remove()
    increaseCount();
}


let backPack = []

   // backPack.push()
   // saveBackPackToLS();
  // testBild.append(backPack);
//};

function saveBackPackToLS(){ // bryter ner koder och sätter en egen function för att spara kundkorgen till local storage
    const backPackString = JSON.stringify(backPack)
    localStorage.setItem('backPack', backPackString);
 }
 /** Loads the cart from local storage and saves it to the global array. */
 function loadBackPackFromLS(){
   // if (!localStorage.key('cart')) return;
   if(localStorage.key("backPack")){
    const backPackString = localStorage.getItem('backPack');
    cart = JSON.parse(backPackString);
   }
 }

