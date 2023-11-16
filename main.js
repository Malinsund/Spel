window.addEventListener("DOMContentLoaded", main);

window.localStorage

function main() {
    loadBackPackFromLS();
    setupSceneButtons();
    saveBackPackToLS();
}

/** Ljudeffekt
 * 
 * @type {HTMLAudioElement} bakgrundsmusik
 */
let mySound = new Audio('audio/dark-underworld-144813.mp3');
/** Ljudeffekt
 * 
 * @type {HTMLAudioElement} prassel som hörs
 */
let prassel = new Audio('audio/prassel.mp3');
/** Ljudeffekt
 * 
 * @type {HTMLAudioElement} ljudet zombien ger ifrån sig.
 */
let zombieSound = new Audio ('audio/zomiesound.wav');

/** lägger till bilden på ryggsäck i headern */
const header = document.querySelector(".header"); 
const backPackCount = document.createElement('img')
backPackCount.src = "Assets/backpack.png";
backPackCount.className = "backPack";


header.appendChild(backPackCount);


/** De olika knapparna för att generera de olika scenerna. */
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

/** Funktionerna för de olika knapparna, tar bort nuvarande scen och genererar nästa scen.
 * 
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
/** Genererar ny HTML vid tryck på knappen med en funktion som tar användaren tillbaka till förstasidan */
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

}
/** Genererar ny HTML vid tryck på knappen med en funktion som tar användaren tillbaka till förstasidan */
function renderGiveUpMessage() {

    let divContainer = document.createElement('div'); 
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
    if (inventoryContainsKnife()){
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
}else {
    alert("du måste ha kniven för att döda Zombien!");
}
function inventoryContainsKnife(){
    return backPack.some(item => item.id === "knife");
}
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
/** Ryggsäcken som i detta spelet är ett inventory */
let backPack = []

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

/**Funktioner För att ta bort object/bilder från spelet och lägga de i ryggsäcken när man klickar på dom*/
function pickUpPenicillin() {
    const medicin = document.querySelector("#penicillin");
    medicin.remove();
    increaseCount();

    saveBackPackToLS();

    backPack.push(medicin);
    console.log(backPack)
    
}
function pickUpFirstAid() {
    const medicin2 = document.querySelector("#firstAid");
    medicin2.remove();
    increaseCount();
    saveBackPackToLS();
    backPack.push(medicin2);
}
function pickUpGun() {
    const gun = document.querySelector("#pistol");
    gun.remove();
    increaseCount();
    backPack.push(gun);
    saveBackPackToLS();
}
function pickUpKnife() {
    const knife = document.querySelector("#knife");
    knife.remove()
    increaseCount();
    backPack.push(knife);
    saveBackPackToLS();

}
function pickUpKonserv() {
    const konserv = document.querySelector("#konserv");
    konserv.remove()
    increaseCount();
    backPack.push(konserv);
    saveBackPackToLS();

}
function pickUpWater() {
    const water = document.querySelector("#water");
    water.remove()
    increaseCount();
    backPack.push(water);
    saveBackPackToLS();
}


function saveBackPackToLS(){ // bryter ner koder och sätter en egen function för att sparar ryggsäcken till local storage
    const backPackString = JSON.stringify(backPack)
    localStorage.setItem('backPack', backPackString);
 }
 /** Laddar ryggsäcken? */
 function loadBackPackFromLS(){
   if(localStorage.key("backPack")){
    const backPackString = localStorage.getItem('backPack');
    backPack = JSON.parse(backPackString);
    console.log(backPack)
   }
 }

