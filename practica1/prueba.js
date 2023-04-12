function misterio3(operación, numero1, numero2){
    if((typeof(numero1) == "number" && typeof(numero2)=== "number")){
        if (operación === "suma"){
            return numero1 + numero2
        }else if(operación === "resta"){
            return numero1 - numero2
        }else if(operación === "multiplicación"){
            return numero1 * numero2
        }else if(operación === "división"){
            if(numero2 != 0){
                return numero1/numero2
            }else{
                return "No dividir por 0"
            }
        }else{
            return "Introduce operación válida"
        }
    }else{
        return "Los valores no son números"
    }
}
console.log(misterio3("división",12,0));