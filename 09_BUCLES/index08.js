let op = window.prompt("Escoge números pares (P) o impares (I)"); //P I
if(op==="P"){
    for(i=1;i<=100;i++){
        i%2===0?document.getElementById("main").innerHTML+=`
        <p>${i}</p>`:
        document.getElementById("main").innerHTML+=``
    }
}else{
    for(i=1;i<=100;i++){
        i%2!==0?document.getElementById("main").innerHTML+=`
        <p>${i}</p>`
        :document.getElementById("main").innerHTML+=``
    }
    
}
