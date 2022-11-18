
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

//Calcolo del prezzo totale per i servizi di web developing

let workTypeArray = [15.30, 20.50, 33.60];
let discountArray = ["YHDNU32", "JANJC63","PWKCN25", "SJDPO96", "POCIE24"];

function searchDiscount(discount) {
    for (let i = 0; i < discountArray.length; i ++) {
        if (discount == discountArray[i]) {
            return true;
        }
    }
    return false;
}



function calcolatore(hour, type, discount) {
    return (hour * type - ((hour * type * discount) / 100));
}

function totalCal(event) {
    event.preventDefault();


    let hoursNumber = document.getElementById("inputHours").value;
    let typeOfWork = document.getElementById("inputWork").value;
    let discountCode = document.getElementById("inputDiscount").value;
    let discountNumber;
    if(!discountCode) {
        discountNumber = 0;
    } else if(searchDiscount(discountCode)) {
        discountNumber = 25;
    } else {
        //document.getElementById("inputDiscount").style.color="red";
        discountNumber = 0}
    console.log(hoursNumber,  workTypeArray[typeOfWork-1], discountNumber);
   

    console.log(calcolatore(hoursNumber, workTypeArray[typeOfWork-1], discountNumber));

}

