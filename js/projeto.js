var y = Math.floor(Math.random() * 20) + "%";

function atirar() {

    var estrela1 = document.getElementById("estrela1");
    var estrela2 = document.getElementById("estrela2");
    var estrela3 = document.getElementById("estrela3");
    var estrela4 = document.getElementById("estrela4");
    var estrela5 = document.getElementById("estrela5");
    var estrela6 = document.getElementById("estrela6");

    estrela1.classList.toggle("voando");
    estrela2.classList.toggle("voando");
    estrela3.classList.toggle("voando");
    estrela4.classList.toggle("voando");
    estrela5.classList.toggle("voando");
    estrela6.classList.toggle("voando");

    var variacao = 70

    estrela1.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela2.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela3.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela4.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela5.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela6.style.paddingTop = y;

}

function ativarCanvas() {

    var q = document.getElementById("quadrângulo");
    var t = document.getElementById("triângulo");
    var c = document.getElementById("círculo");

    var qtx = q.getContext("2d");
    var ttx = t.getContext("2d");
    var ctx = c.getContext("2d");

    qtx.beginPath();
    qtx.moveTo(50, 20);
    qtx.lineTo(200, 25);
    qtx.lineTo(170, 100);
    qtx.lineTo(30, 120);
    qtx.lineTo(50, 20);
    qtx.strokeStyle = "green";
    qtx.stroke();

    ttx.beginPath();
    ttx.moveTo(220, 100);
    ttx.lineTo(250, 180);
    ttx.lineTo(190, 150);
    ttx.lineTo(220, 100);
    ttx.strokeStyle = "blue";
    ttx.stroke();
    
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.stroke();

}

    var tela = document.getElementById("movendo");
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 100, 400);

    function desenhaCirculo(x, y, raio) {

        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);
    }

    var x = 20;
    var sentido = 1;

    function atualizaTela() {

        limpaTela();

        if(x > 600){
            sentido = -1;
        }else if (x < 0){
            sentido = 1;
        }

        desenhaCirculo(x, 20, 10);
        x = x + sentido;
    }

    setInterval(atualizaTela, 10);



    var telaAlvo = document.getElementById("alvo");
    var pincelAlvo = telaAlvo.getContext('2d');

    pincelAlvo.fillStyle = 'lightgray';
    pincelAlvo.fillRect(0, 0, 600, 400);

    var raio = 10;
    var xAleatorio;
    var yAleatorio;

    function desenhaCirculoAlvo(x, y, raio, cor) {

        pincelAlvo.fillStyle = cor;
        pincelAlvo.beginPath();
        pincelAlvo.arc(x, y, raio, 0, 2 * Math.PI);
        pincelAlvo.fill();

    }

    function limpaTelaAlvo() {

        pincelAlvo.clearRect(0, 0, 600, 400);

    }

    function desenhaAlvo(x,y) {

        desenhaCirculoAlvo(x, y, raio+20, 'red');
        desenhaCirculoAlvo(x, y, raio+10, 'white');
        desenhaCirculoAlvo(x, y, raio, 'red');

    }

    function sorteiaPosicaoAlvo(maximo) {

        return Math.floor(Math.random() * maximo);

    }

    function atualizaTelaAlvo() {
        limpaTelaAlvo();
        xAleatorio = sorteiaPosicaoAlvo(600);
        yAleatorio = sorteiaPosicaoAlvo(400);
        desenhaAlvo(xAleatorio, yAleatorio);
    }

    setInterval(atualizaTelaAlvo, 1000);

    var audio = document.getElementById("audio");
        audio.volume = 0.1;

   
