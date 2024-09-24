var altura = 0;
var largura = 0;
var vidas = 1;
var time = 60;
var subSco;
var timSubSco;
var congra;
var increCongrat;
var score = 0;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel.replace('?', '');

function increase() {
    setInterval(function(){
        score = score + congra
    document.getElementById('scorer').innerHTML = score +' + 1000 incementados!!';
    }, increCongrat)
    
}


if (nivel === '?normal') {
    criaMosquitoTempo = 1500;
    time = 50;
    subSco = 50;
    timSubSco = 5000;
    congra = 1000;
    increCongrat = 15000
    increase();
}
else if (nivel === '?dificil'){
    criaMosquitoTempo = 1000;
    time = 50;
    subSco = 40;
    timSubSco = 10000;
    congra = 1000;
    increCongrat = 30000
    increase();
}
else if (nivel === '?chuckNorris') {
    criaMosquitoTempo = 750;
    time = 75;
    subSco = 30;
    timSubSco = 10000;
    congra = 1000;
    increCongrat = 30000
    increase();
}
else if (nivel === '?god') {
    criaMosquitoTempo = 500;
    time = 100;
    subSco = 30;
    timSubSco = 10000;
    congra = 1000;
    increCongrat = 30000
    increase();
}

function tamanhoDoPalco() {
    largura = window.innerWidth;
    altura = window.innerHeight;

    console.log(largura, altura);
}

tamanhoDoPalco();

var cronometro = setInterval(function(){

    time -= 1;

    if(time < 0){
        clearInterval(cronometro);
        clearInterval(mataDengue);
        window.location.href = './vitoria.html?' + score;
    }
    else {
        document.getElementById('timer').innerHTML = time;
    }
}, 1000);



function randonPosi() {

    // removendo o mosquito anterior(caso exista).
    if (document.getElementById('dengue')) {
        document.getElementById('dengue').remove();
        

        if (vidas > 3){
            window.location.href = './gameOver.html?' + score;
        }
        else {
            document.getElementById('v' + vidas).src = "../img/coracao_vazio.png"

        vidas++

        }

    }

    var posiX = Math.floor(Math.random() * largura) - 90;
    var posiY = Math.floor(Math.random() * altura) - 90;

    posiX = posiX < 0 ? 0 : posiX;
    posiY = posiY < 0 ? 0 : posiY;

    console.log(posiX, posiY);

    // criar elemento html
    var dengue = document.createElement('img');
    dengue.src = '../img/mosca.png';
    dengue.className = aleatSize() + ' ' + randonFlip();
    dengue.style.left = posiX + 'px';
    dengue.style.top = posiY + 'px';
    dengue.style.position = 'absolute';
    dengue.id = 'dengue';
    dengue.onclick = function() {
        this.remove();
        score += 10;
        document.getElementById('scorer').innerHTML = score;
        setInterval(function(){
            score = score + subSco;
        }, timSubSco)

    }

    document.body.appendChild(dengue);
}

function aleatSize() {
    var classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0:
            return 'dengue1';
        case 1:
            return 'dengue2';
        case 2:
            return 'dengue3';
    }
} 

function randonFlip() {
    var classe = Math.floor(Math.random() * 2);

    switch(classe) {
        case 0:
            return 'flipA';
        case 1:
            return 'flipB';
    }
}

