window.addEventListener("DOMContentLoaded", main)


const activeSceneIndex = 0;

const scene = [
{
 background: "red",
 text: "det är en zombieapocalyps........",
 button1: {
    text: "apoteket",
    nextSceneIndex : 1,
},
},
/****** här är apoteket Scene 1 ********/ 
{
background: 'green',
text: "helvete vad gör jag här?",
button1: {
    text:"Mataffären",
    nextSceneIndex: 2,
    },
button2: {
    text: "Frilufsbutiken",
    nextSceneIndex: 3,
    },
button3: {
    text: "Klädbutiken",
    nextSceneIndex: 4,
    },
button4: {
    text: "Galleria",
    nextSceneIndex: 0,
    },
       
},
{ /******  Här har vi Mataffären scene 2 *******/
    background: 'gray',
    text: "helvete vad gör jag här?",
    button1: {
        text:"Apoteket",
        nextSceneIndex: 2,
        },
    button2: {
        text: "Frilufsbutiken",
        nextSceneIndex: 3,
        },
    button3: {
        text: "Klädbutiken",
        nextSceneIndex: 4,
        },
    button4: {
        text: "Galleria",
        nextSceneIndex: 0,
        },
           
    },
{ /******  Här har vi frilufsbutiken Scene 3 *******/
background: 'gray',
text: "helvete vad gör jag här?",
button1: {
    text:"Apoteket",
    nextSceneIndex: 1,
    },
button2: {
    text: "Mataffären",
    nextSceneIndex: 2,
    },
button3: {
    text: "Klädbutiken",
    nextSceneIndex: 4,
    },
button4: {
    text: "Galleria",
    nextSceneIndex: 0,
    },
        
},
{ /************ Det här är klädbutiken Scene 4 */    
background: 'gray',
text: "helvete vad gör jag här?",
button1: {
    text:"Apoteket",
    nextSceneIndex: 1,
    },
button2: {
    text: "Mataffären",
    nextSceneIndex: 2,
    },
button3: {
    text: "Frilufsbutiken",
    nextSceneIndex: 4,
    },
button4: {
    text: "Galleria",
    nextSceneIndex: 0,
    },      
} 
];