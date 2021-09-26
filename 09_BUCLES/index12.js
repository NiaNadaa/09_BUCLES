let num = window.prompt("Escribe un número de varias cifras");
let suma=0;
for(i=0;i<num.length;i++){
    suma += parseInt(num.substring(i,i+1))
}
window.alert(`El resultado de sumar tus dígitos es: ${suma}`)