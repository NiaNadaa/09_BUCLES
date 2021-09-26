let fecha = window.prompt("Introduce la fecha de tu nacimiento : DD-MM-AAAA"); //31-03-1989
console.log(fecha);
fecha = fecha.split("-");
console.log(fecha);
let suma = parseInt(fecha[0])+parseInt(fecha[1])+parseInt(fecha[2]);
console.log(suma);
suma=suma.toString();
console.log(suma);
let suma2=0;
for(i=0;i<suma.length;i++){
    suma2 += parseInt(suma[i]);
    console.log(suma2);
}
suma2=suma2.toString();
let suma3=0
for(i=0;i<suma2.length;i++){
    suma3 += parseInt(suma2[i]);
    console.log(suma3);
}

for(i=0;i<fecha.length;i++){
    console.log(fecha.substring(i,i+1));
}

/* let suma = 0;
let fecha = window.prompt('Introduzca fecha (DD-MM-AAAA): ').split('-');
let len = fecha.length;

for (let i=0; i<len; i++) {
    suma += parseInt(fecha[i]);
}
console.log(suma);

let suma2 = suma.toString();
len = suma2.length;

 */