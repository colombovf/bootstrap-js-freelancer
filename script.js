//Arrai di oggetti contenenti le info delle cards
let ourServices = [  
    {
    nome: "Cabin Website",
    preview: "Preview",
    imgFile: "<img src='./img/cabin.png' class='img-fluid'>",
    visit: "Visit Site"
    },
    {
    nome: "Cake Website",
    preview: "Preview",
    imgFile: "<img src='./img/cake.png' class='img-fluid'>",
    visit: "Visit Site"
    },
    {
    nome: "Circus Website",
    preview: "Preview",
    imgFile: "<img src='./img/circus.png' class='img-fluid'>",
    visit: "Visit Site"
    },
    {
    nome: "Game Website",
    preview: "Preview",
    imgFile: "<img src='./img/game.png' class='img-fluid'>",
    visit: "Visit Site"
    },
    {
    nome: "Safe Website",
    preview: "Preview",
    imgFile: "<img src='./img/safe.png' class='img-fluid'>",
    visit: "Visit Site"
    },
    {
    nome: "Submarine Website",
    preview: "Preview",
    imgFile: "<img src='./img/submarine.png' class='img-fluid'>",
    visit: "Visit Site"
    }
]

//Stampare le info nelle cards

let collezione_nomi = document.getElementsByClassName("nome");
let collezione_preview = document.getElementsByClassName("preview");
let collezione_imgFile = document.getElementsByClassName("imgFile");
let collezione_visit = document.getElementsByClassName("visit");

for (let i = 0; i < ourServices.length; i ++) {
    collezione_nomi[i].innerHTML = ourServices[i].nome;
    collezione_imgFile[i].innerHTML = ourServices[i].imgFile;
    collezione_preview[i].innerHTML = ourServices[i].preview;
    collezione_visit[i].innerHTML = ourServices[i].visit;
}
