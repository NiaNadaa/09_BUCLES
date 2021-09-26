let int = true;
for(i=1;i<=100;i++){
    i%5!==0?document.getElementById("main").innerHTML+=`<p>${i}</p>`:int=false;
}