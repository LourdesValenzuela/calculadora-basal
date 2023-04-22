let form = document.getElementById('calculadora');
form.style.backgroundColor = 'pink';

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const VOLUMEN = document.getElementById('volumen');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){ //si es mayor a 0
        ERROR.style.display = 'none'
        if (DATO <= 30) { // calcFlujo no se calculara si el peso es mayor a 30 kg
            let flujo = calcFlujo(DATO);
            let mantenimiento = (flujo/24)*1.5;
            FLU.innerHTML = flujo + ' cc';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block';

        } else {
            FLU.style.display = 'none'
            MAN.style.display = 'none'
        }
        // llamo a calcularVolumen
        const volumen = calcularVolumen(DATO);
        if (volumen) {
            VOLUMEN.innerHTML = `El volumen esta entre ${volumen[0]} y ${volumen[1]} ml`;
        } else {
            VOLUMEN.innerHTML = "";
        }
        VOLUMEN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(peso){
    //para que no calcule cuando el peso es mayor a 30kg
    if (peso > 30) {
        return null;
    }
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*20;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*50;
        resto -= aux;
    }
    flujo += resto*100;
    return flujo;
    
}

function calcularVolumen(peso) {
    if (peso > 30) {  //si el peso es mayor a 30kg
      const superficieCorporal = ((peso * 4) + 7) / (peso + 90);
      const volumen1 = superficieCorporal * 1500;
      const volumen2 = superficieCorporal * 2000;
      return [volumen1, volumen2];
    } 
    else {
      return null;
    }
  }
  
