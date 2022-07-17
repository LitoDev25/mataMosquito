function randonPosi() {
    var posiX = Math.floor(Math.random() * largura);
var posiy = Math.floor(Math.random() * altura);

console.log(posiX, posiy);

// criar elemento html
var dengue = document.createElement('img');

dengue.src = './src/img/mosca.png'

document.body.appendChild(dengue);
}