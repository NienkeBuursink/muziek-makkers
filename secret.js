// audio
const audio = document.getElementById("audioNienke")
const plaatje = document.getElementById("NienkesDieZingen")

function audioSpelen(){
    audio.play();
}

function audioStoppen(){
    audio.pause();
}

plaatje.addEventListener("click", audioSpelen);
plaatje.addEventListener("mouseover", audioSpelen);
plaatje.addEventListener("mouseout", audioStoppen);

// button
const terugButton = document.querySelector("button");

function startAftellen(tijdInSecondes){
    seconden = tijdInSecondes;

    let timer = setInterval(() => {
        if (seconden > 0){
            seconden --;
            terugButton.textContent = "JE GAAT TERUG OVER " + seconden + " SECONDEN";
        }
        else {
            clearInterval(timer);
            naarHome();
        }
    }, 1000)
}
function naarHome(){
    window.location.href = 'index.html';
}

function terugKlikken(){
    startAftellen(6)
}

terugButton.addEventListener("click", terugKlikken);