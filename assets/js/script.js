const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    if(hr >= 5 && hr < 7){
        document.body.style.background = "linear-gradient(130deg,#a496ff,#f980ff)";
    }
    else if(hr >= 7 && hr < 16){
        document.body.style.background = "linear-gradient(130deg,#ffd147,#2ba7ff)";
    }
    else if(hr >= 16 && hr < 18){
        document.body.style.background = "linear-gradient(130deg,#2ba7ff,#004c82)";
    }
    else {
        document.body.style.background = "linear-gradient(130deg,#4e0082,#cc80ff)";
    }
    


})