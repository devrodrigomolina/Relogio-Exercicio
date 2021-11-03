class RelogioAnalogico {
    constructor() {
        this.ponteiroSec = document.querySelector('.p_s');
        this.ponteiroMin = document.querySelector('.p_m');
        this.ponteiroHora = document.querySelector('.p_h');

        this.date = new Date();
        this.hour = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }
    
    atualizaRelogio() {

        let segDeg = ((360 / 60) * this.seconds) -90;
        let minDeg = ((360 / 60) * this.minutes) -90;
        let horaDeg = ((360 / 12) * this.hour) -90;

        this.ponteiroSec.style.transform = `rotate(${segDeg}deg)`;
        this.ponteiroMin.style.transform = `rotate(${minDeg}deg)`;
        this.ponteiroHora.style.transform = `rotate(${horaDeg}deg)`;

        const digital = new RelogioDigital(this.hour,this.minutes,this.seconds);
        digital.mostraHora();
    }
}

class RelogioDigital {
    constructor(hora,minutos,segundos) {
        this.digital = document.querySelector('.digital');
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    fixZero(time) {
       return time < 10 ? '0'+time : time;
    }
    
    mostraHora(){
        this.digital.innerHTML = `${this.fixZero(this.hora)}:${this.fixZero(this.minutos)}:${this.fixZero(this.segundos)}`;
    }
}

setInterval(() => {
    const analogico = new RelogioAnalogico();
    analogico.atualizaRelogio();
}, 1000);

const analogico = new RelogioAnalogico();
analogico.atualizaRelogio();