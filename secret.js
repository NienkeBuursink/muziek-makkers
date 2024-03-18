const terugButton = document.querySelector("#terug");

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