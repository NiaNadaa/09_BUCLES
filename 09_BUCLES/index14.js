let num = parseInt(window.prompt("Introduce un número"));
let sign = "";

for(i=1;i<=num;i++){
    sign += `*`
    document.getElementById("main").innerHTML+=`
    <p>${sign}</p>`
}