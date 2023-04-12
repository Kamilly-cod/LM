const CODIGO=25;

function misterio1(edad){
    if((typeof(edad)==="number") && (edad >=18 && edad <=120)){
        return "Puedes conducir"
    }else{
        return "Introduce un numero válido"
    }     
}


function misterio2(numero){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    numero = parseInt(numero);
    if(numero <= 0 || numero >= 13){
        return "No es un mes"
    }else{
        return meses[numero - 1]
    } 
} 

function misterio3(operación, numero1, numero2){
    if((typeof(numero1) === "number" && typeof(numero2)=== "number")){
        if (operación === "suma"){
            return numero1 + numero2;
        }else if(operación === "resta"){
            return numero1 - numero2;
        }else if(operación === "multiplicación"){
            return numero1 * numero2;
        }else if(operación === "división"){
            if(numero2 != 0){
                return numero1/numero2;
            }else{
                return "No dividir por 0";
            }
        }else{
            return "Introduce operación válida";
        }
    }else{
        return "Los valores no son números";
    }
}

function misterio4(numero, letra) {
    if (numero < 0 || numero > 999999999) {
      return 'El número no es válido';
    }
  
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var letraCalculada = letras[numero % 23];
  
    if (letraCalculada === letra.toUpperCase()) {
      return 'El DNI es correcto';
    } else {
      return 'La letra o el número proporcionados no son correctos';
    }
}

function misterio5(array) {
    
    if (!Array.isArray(array)) {
      return "No es posible"
    }
  
    if (array.length >= 3) {
      return array[2];
    }
   
    return "No es posible"
  }

function misterio6(nota){
    
    if (nota == "A"){
        return "Nota entre 8 y 10";
    } else if (nota == "B") {
        return "Nota entre 6.5 y 8";
    }else if (nota == "C"){
        return "Nota entre 5 y 6.5";
    }else if (nota == "D"){
        return "Nota entre 4 y 5";
    }else if (nota == "E"){
        return "Nota entre 0 y 4";
    }else {
        return "Introduce una nota válida";
    }
    
}
function misterio7(num){
    num = parseInt(num);
    if (num < 1 || isNaN(num)) {
      return "Introduce un número positivo";
    }
    let count = 0;
    let sum = 0;
    while (sum < 100) {
      sum += num;
      count++;
    }
    return count;
}

function misterio8(num){
    num = parseInt(num);
    if (num >  9 || num < 1 || isNaN(num)){
        return "Introduce un número de 1 a 9";
    } else {
        let tabla="";
        for (let i = 1; i < 10 ; i++) {
            if (i == 9){
                tabla += i + "x" + num + "=" + num*i + ".";
            } else{
                tabla += i + "x" + num + "=" + num*i + ",";
            }
        }
        return tabla;
    }    
}

function misterio9(){
    return true;
}

function misterio10(){
    return true;
}

function misterio11(){
    return true;
}
function misterio12(){
    return true;
}
function misterio13(){
    return true;
}
function misterio14(){
    return true;
}
function misterio15(){
    return true;
}
function misterio16(){
    return true;
}
function misterio17(){
    return true;
}
function misterio18(){
    return true;
}
function misterio19(){
    return true;
}
function misterio20(){
    return true;
}



 module.exports = {
    misterio1,
    misterio2,
    misterio3,
    misterio4,
    misterio5,
    misterio6,
    misterio7,
    misterio8,
    misterio9,
    misterio10,
    misterio11,
    misterio12,
    misterio13,
    misterio14,
    misterio15,
    misterio16,
    misterio17,
    misterio18,
    misterio19,
    misterio20,
    CODIGO
}