window.addEventListener("DOMContentLoaded", main);

window.localStorage
//huvudfunktioner
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

/**
* tar fram en bild på ryggsäck som läggs i header
* @constant {HTMLElement} header hämtat den klassen där bilden skall ligga 
* @constant {HTMLImageElement} backPackCount bilden som jag lagt till via JS
* @memberOf document
*/
const header = document.querySelector(".header"); 
const backPackCount = document.createElement('img')
backPackCount.src = "Assets/backpack.png";
backPackCount.className = "backPack";

header.appendChild(backPackCount);


/** De olika knapparna för att generera de olika scenerna. 
 * @listens click och tillhörande funktion för att rndera de nya scenerna och ta bort den man är på.
 * 
*/
function setupSceneButtons() {
    // knapparna som gör att man växlar man mellan sidorna 
    /** apoteket knappen
     * @listens click - det är en clickbar knapp som när man klickar på den genomför följande function.
     * @function renderscenebuttons - utför funktionen när när man klickat på knappen
     */
    document.getElementById("nextSceneButton").addEventListener('click', renderScenePharmacy);
    /** Frilufsbutiken knappen
     * @listens click - det är en clickbar knapp som när man klickar på den genomför följande function.
     * @function renderscenebuttons - utför funktionen när när man klickat på knappen
     */
    document.getElementById("outDoorStoreButton").addEventListener('click', renderSceneOutDoorStore);
    /** Klädaffär knappen
     * @listens click - det är en clickbar knapp som när man klickar på den genomför följande function.
     * @function renderscenebuttons - utför funktionen när när man klickat på knappen
     */
    document.getElementById("clothingStoreButton").addEventListener('click', renderSceneClothingStore);
    /** Matbutiken knappen
     * @listens click - det är en clickbar knapp som när man klickar på den genomför följande function.
     * @function renderscenebuttons - utför funktionen när när man klickat på knappen
     */
    document.getElementById('kill').addEventListener('click', renderSceneGrocerystore);
    /** bakdörren knappen
     * @listens click - det är en clickbar knapp som när man klickar på den genomför följande function.
     * @function renderscenebuttons - utför funktionen när när man klickat på knappen
     */
    document.getElementById("backDoorButton").addEventListener('click', renderSceneBackDoor);

    // dessa två är vid flervalsfrågan på zombie-attack scenen 
    /** gå tillbaka knappen
     * @listens click - det är en clickbar knapp som när man klickar på den genomför följande function.
     * @function goBackButton - utför funktionen när när man klickat på knappen
     */
    document.getElementById("goBackButton").addEventListener('click', renderGoBackMessage);
    /** ge upp knappen
     * @listens click - det är en clickbar knapp som när man klickar på den genomför följande function.
     * @function giveUp - utför funktionen när när man klickat på knappen
     */
    document.getElementById("giveUp").addEventListener('click', renderGiveUpMessage);
}
//Funktionerna för de olika knapparna, tar bort nuvarande scen och genererar nästa scen.
/** tar fram apoteksscenen
 * 
 * @function funktion som tar bort aktiv scen och tar fram nästa scen från HTML samt lägger till ny bakgrundsbild.
 * @returns {void} finns inget att returnera
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
/** tar fram frilufsscenen
 * 
 * @function funktion som tar bort aktiv scen och tar fram nästa scen från HTML samt lägger till ny bakgrundsbild.
 * @returns {void} finns inget att returnera
 */
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
/** tar fram klädbutiksscenen
 * 
 * @function funktion som tar bort aktiv scen och tar fram nästa scen från HTML samt lägger till ny bakgrundsbild. även funktion för att ta fram zombie efter 1.5 sekunder
 * @returns {void} finns inget att returnera
 */
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
/** tar fram mataffärsscenen
 * 
 * @function funktion som tar bort aktiv scen och tar fram nästa scen från HTML samt lägger till ny bakgrundsbild.
 * @returns {void} finns inget att returnera
 */
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
/** tar fram slutsscenen
 * 
 * @function funktion som tar bort aktiv scen och tar fram nästa scen från HTML samt lägger till ny bakgrundsbild.
 * @returns {void} finns inget att returnera
 */
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
 * @listens click gör att bilderna är klickbara
 * @function funktioner som gör att föremålet försvinner från bilden, ökar antal bredvid ryggsäcken och lägger i inventory(ryggsäck)
 */
document.getElementById("penicillin").addEventListener('click', pickUpPenicillin);
document.getElementById("firstAid").addEventListener('click', pickUpFirstAid);
document.getElementById("pistol").addEventListener('click', pickUpGun);
document.getElementById("knife").addEventListener('click', pickUpKnife)
document.getElementById("konserv").addEventListener('click', pickUpKonserv)
document.getElementById("water").addEventListener('click', pickUpWater)

//Funktioner För att ta bort object/bilder från spelet och lägga de i ryggsäcken när man klickar på dom
/** funktion för att plocka upp penicillin
 * @function pickUpPenicillin tar bort bilden från skärmen efter klick, lägger till i ryggsäck och sparar till LS och ökar siffran bredvid ryggsäcken
 */
function pickUpPenicillin() {
    const medicin = document.querySelector("#penicillin");
    medicin.remove();
    increaseCount();

    saveBackPackToLS();

    backPack.push(medicin);
    console.log(backPack)
    
}
/** funktion för att plocka upp första hjälpen
 * @function pickUpFirstAid tar bort bilden från skärmen efter klick, lägger till i ryggsäck och sparar till LS och ökar siffran bredvid ryggsäcken
 */
function pickUpFirstAid() {
    const medicin2 = document.querySelector("#firstAid");
    medicin2.remove();
    increaseCount();
    saveBackPackToLS();
    backPack.push(medicin2);
}
/** funktion för att plocka upp pistolen
 * @function pickUpGun tar bort bilden från skärmen efter klick, lägger till i ryggsäck och sparar till LS och ökar siffran bredvid ryggsäcken
 */
function pickUpGun() {
    const gun = document.querySelector("#pistol");
    gun.remove();
    increaseCount();
    backPack.push(gun);
    saveBackPackToLS();
}
/** funktion för att plocka upp kniven
 * @function pickUpKnife tar bort bilden från skärmen efter klick, lägger till i ryggsäck och sparar till LS och ökar siffran bredvid ryggsäcken
 */
function pickUpKnife() {
    const knife = document.querySelector("#knife");
    knife.remove()
    increaseCount();
    backPack.push(knife);
    saveBackPackToLS();

}
/** funktion för att plocka upp konservburk
 * @function pickUpKonserv tar bort bilden från skärmen efter klick, lägger till i ryggsäck och sparar till LS och ökar siffran bredvid ryggsäcken
 */
function pickUpKonserv() {
    const konserv = document.querySelector("#konserv");
    konserv.remove()
    increaseCount();
    backPack.push(konserv);
    saveBackPackToLS();

}
/** funktion för att plocka upp vattenflaska
 * @function pickUpWater tar bort bilden från skärmen efter klick, lägger till i ryggsäck och sparar till LS och ökar siffran bredvid ryggsäcken
 */
function pickUpWater() {
    const water = document.querySelector("#water");
    water.remove()
    increaseCount();
    backPack.push(water);
    saveBackPackToLS();
}

function saveBackPackToLS(){ // sparar ryggsäcken till local storage
    const backPackString = JSON.stringify(backPack)
    localStorage.setItem('backPack', backPackString);
 }
 /** hoppas på att denna laddar från local storage */
 function loadBackPackFromLS(){
   if(localStorage.key("backPack")){
    const backPackString = localStorage.getItem('backPack');
    backPack = JSON.parse(backPackString);
    console.log(backPack)
   }
 }

