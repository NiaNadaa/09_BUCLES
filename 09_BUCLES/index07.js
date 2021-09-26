let num = parseInt(window.prompt("Introduce un valor"));
let suma=0;

do{
    num = parseInt(window.prompt("Introduce otro valor"))
    suma += num;
}while(num>0)

console.log(suma);

/* if(num<0){
    window.alert("No se pueden introducir valores negativos");
}else{
    do{
    num = parseInt(window.prompt("Introduce otro valor"))
    suma += num;
}while(num>0)
console.log(suma);} */
