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
const koffiepauzeKnop = document.querySelector("#koffiepauze");


// audio's
// so naar Debora
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

function audioUitAap(){
    if(drums.classList.contains("inactief"))
    audioAap.pause();
}

function audioUitKikker(){
    if(kwaak.classList.contains("inactief"))
    audioKikker.pause();
}

function audioUitVogel(){
    if(twiet.classList.contains("inactief"))
    audioVogel.pause();
}

function audioUitKat(){
    if(mauw.classList.contains("inactief"))
    audioKat.pause();
}


// band
function displayAap(){
    drums.classList.toggle("inactief");
    aapIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioAap);
    audioUitAap();
    knopverwijderen(drums);
}

function displayKikker(){
    kwaak.classList.toggle("inactief");
    kikkerIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioKikker);
    audioUitKikker();
    knopverwijderen(kwaak);
}

function displayVogel(){
    twiet.classList.toggle("inactief");
    vogelIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioVogel);
    audioUitVogel();
    knopverwijderen(twiet);
}

function displayKat(){
    mauw.classList.toggle("inactief");
    katIcoon.classList.toggle("icoonverwisselen");
    speelAudio(audioKat);
    audioUitKat();
    knopverwijderen(mauw);
}


// koffiepauze knopje
const dieren = [drums,kwaak,twiet,mauw];
const diericonen = [aapIcoon, kikkerIcoon, vogelIcoon, katIcoon];

function koffiepauze(){
    dieren.forEach((dier) => {
        dier.classList.add("inactief");
        audioUitAap();
        audioUitKat();
        audioUitKikker();
        audioUitVogel();
    });
}

function icoonresetten(){
    diericonen.forEach((diericoon) => {
        diericoon.classList.add("icoonverwisselen");
    });
}

function knopverwijderen(){
    if (drums.classList != "inactief" || kwaak.classList != "inactief" || mauw.classList != "inactief" || twiet.classList != "inactief"){
        koffiepauzeKnop.classList.add("verschijn");
    } else{
        koffiepauzeKnop.classList.remove("verschijn");
    }
}

function koffiepauzeknopFuncties(){
    koffiepauze();
    icoonresetten();
    knopverwijderen();
}


// fnaf
// bronnen van fotos:
// https://triple-a-fazbear.fandom.com/wiki/Freddy_Fazbear
// https://www.pngall.com/freddy-fazbear-png/download/124094
// https://png.toolxox.com/vhv?p=hbxiJoi_freddy-fazbear-png-page-full-body-freddy-fazbear/
let randomGenerator = Math.floor(Math.random()*3);
let freddyArray = ["freddy1.webp","freddy2.png","freddy3.png"];
let freddyLatenZien = freddyArray[randomGenerator];

const freddy = document.querySelector("#freddy").src = "images/"+freddyLatenZien;


// klikken
aapIcoon.addEventListener ("click", displayAap);
kikkerIcoon.addEventListener ("click", displayKikker);
vogelIcoon.addEventListener ("click", displayVogel);
katIcoon.addEventListener ("click", displayKat);
koffiepauzeKnop.addEventListener ("click", koffiepauzeknopFuncties);