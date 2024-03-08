console.log("Yoooooo");

// variabelen
const drums = document.querySelector("#aap");
const aapIcoon = document.querySelector("#aapIcoon");
const kwaak = document.querySelector("#kikker");
const kikkerIcoon = document.querySelector("#kikkerIcoon");
const twiet = document.querySelector("#vogel");
const vogelIcoon = document.querySelector("#vogelIcoon");
const mauw = document.querySelector("#kat");
const katIcoon = document.querySelector("#katIcoon");
const random = document.querySelector("#random");


// audio's
let audioAap = new Audio("audio/aapje.m4a");
audioAap.loop = true;
let audioKikker = new Audio("audio/kwekkwek.mp4");
audioKikker.loop = true;
let audioVogel = new Audio("audio/vogeltje.m4a");
audioVogel.loop = true;
let audioKat = new Audio("audio/miauw.mp4");
audioKat.loop = true;


function speelAudio(dier){
    dier.play();
} 

function audioUit(){
    if(drums.classList.contains("geklikt"))
    audioAap.src = "audio/";
}


// band
function displayAap(){
    drums.classList.toggle("geklikt");
    aapIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioAap);
    audioUit(audioAap);
}

function displayKikker(){
    kwaak.classList.toggle("geklikt");
    kikkerIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioKikker);
}

function displayVogel(){
    twiet.classList.toggle("geklikt");
    vogelIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioVogel);
}

function displayKat(){
    mauw.classList.toggle("geklikt");
    katIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioKat);
}

// easter egg button
const terugButton = document.querySelector("#terug");

let timer = 5;

setInterval(terugTellen, 1000);

function terugTellen(){
    terugButton.textContent = "JE GAAT TERUG OVER " + timer + " SECONDEN";
    timer = timer -1;
    if (timer < 0){
        naarHome();
    }
}

function naarHome(){
    window.location.href = 'index.html';
}

// klikken
aapIcoon.addEventListener ("click", displayAap);
kikkerIcoon.addEventListener ("click", displayKikker);
vogelIcoon.addEventListener ("click", displayVogel);
katIcoon.addEventListener ("click", displayKat);
terugButton.addEventListener("click", terugTellen);