let num = parseInt(window.prompt("Introduce un número"));
let suma=0;
for(i=0;i<=num;i++){
    suma+=i;
    console.log(suma);
    num>0?num=parseInt(window.prompt("Introduce otro número")):console.log("Fin");
}
