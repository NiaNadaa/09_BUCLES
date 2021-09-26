let num = window.prompt('Introduzca cifra: ');
let result = '';
for(let i = num.length - 1; i>=0; i--) {
    result += num[i];
}
console.log(result);
