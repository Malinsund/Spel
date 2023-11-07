//window.addEventListener("DOMContentLoaded", main)


const activeScene = 0;

const scenes = [
    {
        scene: 1, // start
        text: "Det är zombieapokalyps och du har precis kommit till ett köpcentrum för att fylla på med förnödenheter, du har precis barrikerat huvudingången och måste ta dig igenom flera affärer tills du kommer till bakdörren, samla på dig det du behöver och ta dig sedan vidare, men var försiktig och se upp för zombies!",
        button: {
            text: "Apoteket",
        },
    },
    {
        scene: 2, // apoteket
        text: "Du har kommit till apoteket, det verkar vara lugnt än sålänge, plocka det du behöver och gå snabbt vidare till nästa butik!",
        button: {
            text: "frilufsbutiken",
        },
    },
    {
        scene: 3, // frilufsbutiken
        text: "perfekt, nu har du medicin som du kan tänkas behöva! fortsätt såhär, men var försiktig, jag tror det lät som om något prasslade",
        button: {
            text: "klädbutiken",
        },
    },
    {
        scene: 4, //klädbutiken
        text1: "sådär ja, vapen och mediciner, kolla om du inte kan hitta ett par bra skor och kanske en skinnjacka! bara en butik kvar innan du är framme vid bakdörren!",
        text2: "AAAAH en zombie!!! nu måste du välja vad du skall göra, skall du döda zombien med kniven, springa tillbaka till frilufsbutiken eller ge upp och själv bli zombie?",
        button: {
            text: "springa tillbaka!",
        },
        button: {
            text:"DÖDA!",
        },
        button: {
            text: "ge upp",
        },
    },
    {
        scene: 5, //matbutiken
        text: "BRA JOBBAT! du lyckades komma undan, sista Butiken nu! ta det du behöver för att klara dig, det kan ta flera dagar innan du hittar proviant igen!",
        button: {
            text: "till bakdörren"
        },
    },
    {
        scene: 6,
        text: "Du klarade dig! Bra jobbat, nu har du allt du behöver för att kunna klara dig i denna hemska värld fylld med zombies!"
    }];


 /*   

const scene = [
{
id: 0,
 background: "red",
 text: "det är en zombieapocalyps........",
 button1:  {
    text: "apoteket",
    nextSceneIndex : 1,
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

{
id: 1,
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


    id: 2,
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
{   

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
]; */