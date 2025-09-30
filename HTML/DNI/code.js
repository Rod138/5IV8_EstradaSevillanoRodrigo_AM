//Arreglo de las letras
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function validar(){
    //Obtener valores
    let numbers = (document.getElementById("dni-number")).value
    let char = (document.getElementById("dni-letter")).value

    //Validar datos
    let numbers_is_valid = numbers >= 0 && numbers <= 99999999 && numbers != ""
    let char_is_valid = letras.includes(char)
    //Comparar valores
    if(numbers_is_valid && char_is_valid)
    {
        let diff = numbers%23
        if(char == letras[diff])
        {
            alert("El DNI "+numbers+char+" es correcto")
        }
        else
        {
            alert("La letra no coincide, el DNI correcto es "+numbers+letras[diff])
        }
    }
    else
    {
        if(!numbers_is_valid)
        {
            alert("Debe ingresar un número mayor a 0 y menor a 99,999,999")
        }
        if(!char_is_valid)
        {
            alert("Debe ingresar una letra mayúscula")
        }
    }
}