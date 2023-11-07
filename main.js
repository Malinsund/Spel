window.addEventListener("DOMContentLoaded", main);

let backPack = []
function main (){
    loadPickUpFromLS();
    renderPickUpCountBadge();
    //showScenes();
}

const pickUps = document.createElement("img");
pickUps.src = "Assets/penicillin.png";
pickUps.classname = "penicillin";
pickUps.onclick = function(){
    backPack.push(product)
    savepickUpsToLS();

    renderPickUpCountBadge();

    document.body.appendChild(pickUps);
};
function savepickUpsToLS(){
    const backPackString = JSON.stringify(backPack)
    localStorage.setItem('backpack', backPackString);
}
function loadPickUpFromLS(){
    if(localStorage.key("backpack")){
        const backPackString = localStorage.getItem('backpack');
        backPack = JSON.parse(backPackString);
    }
}
function renderPickUpCountBadge() { // Detta är den andra funktionen som säger till att siffran skall visas i headern i html
    const span = document.getElementById("pickUp-count");
    span.content = backPack.length;
}


document.getElementById("nextSceneButton").addEventListener('click', function() {
    // Accessing mallMain element
    var mallMain = document.getElementById('mallMain');

    // Clearing mallMain element content
    while (mallMain.firstChild) {
        mallMain.removeChild(mallMain.firstChild);
    }
    // Displaying pharmacy
    pharmacy.style.display = 'block';

    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("assets/pharmacy.png")';
    backgroundImg.style.backgroundSize = "cover";
});

document.getElementById("outDoorStoreButton").addEventListener('click', function() {
    // Accessing pharmacy element
    var pharmacy = document.getElementById('pharmacy');

    // Clearing pharmacy element content
    while (pharmacy.firstChild) {
        pharmacy.removeChild(pharmacy.firstChild);
    }
    // Displaying mallMain
    outDoorStore.style.display = 'block';

   
    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("Assets/grocerystore.png")';
    backgroundImg.style.backgroundSize = "cover";
});

document.getElementById("clothingStoreButton").addEventListener('click', function() {
    
    var pharmacy = document.getElementById('outDoorStore');

    // Clearing pharmacy element content
    while (outDoorStore.firstChild) {
        outDoorStore.removeChild(outDoorStore.firstChild);
    }
    // Displaying mallMain
    clothingStore.style.display = 'block';

    const zombie = document.getElementById('zombieAttack');

    setTimeout(function(){
        zombieAttack.style.display = 'block';
    }, 3000);

   
    const backgroundImg = document.querySelector("body");
    backgroundImg.style.backgroundImage = 'url("Assets/clothingstore.png")';
    backgroundImg.style.backgroundSize = "cover";
});



/*
document.getElementById("nextSceneButton").addEventListener('click', function() {
    var objects = document.getElementById("mallMain");
    while(objects.length > 0) {
        objects[0].parentNode.removeChild(objects[0]);
        
    }
    var mallMain = document.getElementById('mallMain');
    mallMain.style.display = 'block';
});

document.getElementById("nextSceneButton").addEventListener('click', function() {
    var objects = document.getElementById("pharmacy");
    while(objects.children.length > 0) {
        objects.removeChild(mallMain.children[0]);
        
    }

    var drugStore = document.getElementById('pharmacy');
    drugStore.style.display = 'block';

    const backgroundImg = document.querySelector("body"); 
    backgroundImg.style.backgroundImage = 'url("assets/pharmacy.png")'; //ger ph1 ny style i form av en bild
    backgroundImg.style.backgroundSize = "cover";
});


*/


/*
function showScenes(){
    const main = document.querySelector("#scene-container");

    for (const item of scenes){
        const scenario = showNextScene(item)

        main.append(scenario)
    }
}

function showNextScene(){

    const scenario = document.createElement('div');
    scenario.className = "scenario-screen";

    const text = document.createElement ("h2");
    text.textcontent = Scene(1).text;

    const nextSceneButton = document.createElement('button');
    nextSceneButton.className = "next-scene";
    nextSceneButton.textContent = "Apoteket";
    nextSceneButton.style.backgrond = "red";
    nextSceneButton.onclick = function(){
        const Name = prompt ("säker");
    }

    scenario.append(text);
    document.body.appendChild(nextSceneButton);

    return scenario;
    


}

/*
const backgroundImg = document.querySelector("body"); //hämtar ph1 och ger variabeln namnet BackgroundImg
    backgroundImg.style.backgroundImage = 'url("assets/mall.jpg")'; //laddar in en bild i body
    backgroundImg.style.backgroundSize = "cover";
    backgroundImg.style.backgroundRepeat = "no-repeat";





/*    
var button = document.createElement("button");


button.innerHtml = "apoteket";
button.id = "button1;"
button.classList.add("pharmacy-button");
button.style.width = "6rem";
button.style.height = "3rem";
button.textContent = "Apoteket"

document.body.appendChild(button);

var button = document.createElement("button");
button.innerHtml = "mataffären";
button.id = "button2;"
button.classList.add("pharmacy-button");
button.style.width = "6rem";
button.style.height = "3rem";
button.textContent = "Mataffären"

document.body.appendChild(button);

var button = document.createElement("button");
button.innerHtml = "apoteket";
button.id = "button3;"
button.classList.add("pharmacy-button");
button.style.width = "6rem";
button.style.height = "3rem";
button.textContent = "klädaffären"

document.body.appendChild(button);

var button = document.createElement("button");

button.innerHtml = "apoteket";
button.id = "button4;"
button.classList.add("pharmacy-button");
button.style.width = "6rem";
button.style.height = "3rem";
button.textContent = "frilufsaffären"

document.body.appendChild(button);

button1.onclick = function(){
    activeScene = currentScene.button.nextSceneIndex;

    const backgroundImg = document.querySelector("body"); //hämtar ph1 och ger variabeln namnet BackgroundImg
    backgroundImg.style.backgroundImage = 'url("assets/pharmacy.png")'; //laddar in en bild i body
    backgroundImg.style.backgroundSize = "cover";
    backgroundImg.style.backgroundRepeat = "no-repeat";
        showScene();
      

}
*/
/*
function createButton(text, id, nextSceneIndex) {
    const button = document.createElement("button");
    button.classList.add("pharmacy-button");
    button.style.width = "6rem";
    button.style.height = "3rem";
    button.textContent = text;
    button.onclick = function () {
        activeScene = nextSceneIndex;
        showScene();
    };
    button.id = id;
    document.body.appendChild(button);
}

// Usage of createButton function to create different buttons
createButton("Apoteket", "button1", 1); // For example, nextSceneIndex is 1
createButton("Mataffären", "button2", 2); // Assuming nextSceneIndex is 2
createButton("Klädaffären", "button3", 3); // Assuming nextSceneIndex is 3
createButton("Frilufsaffären", "button4", 4); 

function showScene() {
    const main = document.getElementById("main");
    main.innerHTML = ''; // Clear previous content

    const currentScene = scene.find(item => item.id === activeScene);
    if (currentScene) {
        const sceneElement = document.createElement("div");
        sceneElement.textContent = currentScene.text;
        sceneElement.style.background = currentScene.background;

        // Assuming buttons are part of the scene display
        for (let i = 1; i <= 4; i++) {
            const buttonId = `button${i}`;
            const nextScene = currentScene[buttonId];
            if (nextScene) {
                createButton(nextScene.text, buttonId, nextScene.nextSceneIndex);
            }
        }

        main.appendChild(sceneElement);
    }
}    

/*
function main(){
   

}

function LoadScene(){
    const main = document.querySelector("#sceneContainer");

    for (const item of scene){
        const scene = loadNewScene(item)

        main.append(scene)
    };
}

function loadNewScene(item){
    const nextSceneButton = document.createElement('button');
    nextSceneButton.className = "pharmasy-button";
    nextSceneButton.textContent = "Apoteket";
    nextSceneButton.onclick = function(goToNextScene) {

    };
    main.append(nextSceneButton);
}

function goToNextScene(){
    const item = document.getElementById()
}

/*

var button1 = document.createElement('button1');

function showScene() {
    const text = document.getElementById('text');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    const scenes = [
        {
            text: "This is scene 1.",
            button1: { text: "Option 1" },
            button2: { text: "Option 2" },
            background: "url('assets/grocerystore.png')"
        },
        {
            text: "This is scene 2.",
            button1: { text: "Choice A" },
            button2: { text: "Choice B" },
            background: "url('scene2.jpg')"
        }
       
    ];

    const activeScene = 1; 

    const scene = scenes[activeScene];

    text.textContent = scene.text;
    button1.textContent = scene.button1.text;
    button2.textContent = scene.button2.text;
    document.body.style.background = scene.background;
}
*/

/* Detta är den cod jag och alex satt och fixade med 
var testArray = ['knapp1','knapp2','knapp3'];
 
var scenes = ['HM','Gregors Kött']
 
newScene(testArray, scenes[1])
function newScene(array, scene){
 
var divContainer = document.createElement('div');
divContainer.style.background = 'url';
divContainer.style.width="200px";
divContainer.style.height = "200px";
divContainer.setAttribute('id', 'HM');
document.body.appendChild(divContainer);
testArray.forEach((btn) => createButton(btn,'HM'));
}
function createButton(klass, scene)
{
  var button1 = document.createElement('button');
  button1.style.width="100px";
  button1.style.height = "20px";
  button1.textContent = klass;
  button1.style.color = 'white';
  button1.style.background = 'black';
  button1.setAttribute('id',klass);
  button1.onclick = function() {document.getElementById('HM').remove();};
  document.getElementById(scene).appendChild(button1);
 
}

   
/*
function main(){
    showScene();
}

 



function showScene(){
    const text = documentgetElementById('text');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');



    const scene = scene[activeScene];

    Text.textContent = scene.text;
    button1.textContent = scene.button1.text;
    button2.textcontent = scene.button2.text;
    document.body.style.background = scene.background


    button1.onclick = goToNextScene; // inga paranteser för det är inte vi som anropar funktionen*/
    /*
    button1.onclick = function() {
        goToNextScene(scene.button1.nextSceneIndex)
    };

    button2.onclick = function() {
        goToNextScene(scene.button2.nextSceneIndex)
    };

}

function goToNextScene(sceneIndex){
    activeSceneIndex = sceneIndex;
    showScene();
}*/
/*
function showScene() {
    const currentScene = scenes[activeScene];
    const textElement = document.getElementById('text');
    const button1Element = document.getElementById('button1');
    const button2Element = document.getElementById('button2');
    const button3Element = document.getElementById('button3');
    const button4Element = document.getElementById('button4');
    document.body.style.background = currentScene.background;

    textElement.textContent = currentScene.text;
    button1Element.textContent = currentScene.button1.text;
    button2Element.textContent = currentScene.button2.text;
    button3Element.textContent = currentScene.button3.text;
    button4Element.textContent = currentScene.button4.text;

    button1Element.onclick = function() {
        activeScene = currentScene.button1.nextSceneIndex;
        showScene(2);
    };
    button2Element.onclick = function() {
        activeScene = currentScene.button2.nextSceneIndex;
        showScene(3);
    };
    button3Element.onclick = function() {
        activeScene = currentScene.button3.nextSceneIndex;
        showScene(4);
    };
    button4Element.onclick = function() {
        activeScene = currentScene.button4.nextSceneIndex;
        showScene(5);
    };
}


showScene();


*/
