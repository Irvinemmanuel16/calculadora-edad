const $fecha_actual = document.getElementById('actual_date');
const $fecha_nacimiento = document.getElementById('born_date');
const $btn = document.getElementById('ejecutar')
const para = document.createElement('p');

window.onload = () => {
  let date = new Date();
  let month = date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
  let day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : `${date.getDate()}`
  $fecha_actual.setAttribute('value', `${date.getFullYear()}-${month}-${day}`)
}

const datos = () => {
  return[
    actual = {
      año: $fecha_actual.value.slice(0, 4),
      mes: $fecha_actual.value.slice(5, 7),
      dia: $fecha_actual.value.slice(-2),
    },
    nacimiento = {
      año: $fecha_nacimiento.value.slice(0, 4),
      mes: $fecha_nacimiento.value.slice(5, 7),
      dia: $fecha_nacimiento.value.slice(-2),
    }
  ]
}

function calcEdad(){
  let [actual, nacimiento] = datos();
  let dia_actual = parseInt(actual.dia)
  let mes_actual = parseInt(actual.mes)
  let año_actual = parseInt(actual.año)
  let dia_nacimiento = parseInt(nacimiento.dia)
  let mes_nacimiento = parseInt(nacimiento.mes)
  let año_nacimiento = parseInt(nacimiento.año)
  let cantidad_dias = 30
  let dias, meses, años;
  
  if(dia_actual < dia_nacimiento){
    mes_actual -= 1;
    dia_actual += cantidad_dias;
    dias = dia_actual - dia_nacimiento;
  }

  dias = dia_actual - dia_nacimiento;

  if(mes_actual < mes_nacimiento){
    año_actual -= 1;
    mes_actual += 12;
    meses = mes_actual - mes_nacimiento;
  }
  
  meses = mes_actual - mes_nacimiento;
  
  if(año_actual < año_nacimiento){
    alert("El año ingresado no es valido");
  }
  else{
    años = año_actual - año_nacimiento;
  }
  return[años, dias, meses]
}

function mostrarEdad(){
  let [años, dias, meses] = calcEdad();
  if(años != undefined && !isNaN(años) && !isNaN(meses) && !isNaN(dias)){
    para.textContent = `Usted tiene ${años} años con ${meses} meses y ${dias} dias`;
  }
  else{
    alert("Debe colocar todos los datos");
  }
  document.body.append(para);
}

$btn.onclick = e => {
  e.preventDefault();
  mostrarEdad()
}