let num=0;
let fact=1;
for(i=1;i<=10;i++){
    num=i
    fact=fact*i
    //console.log(num);
    //console.log(fact);
    document.getElementById("main").innerHTML+=`
    <p>${num} --- ${fact}</p>
    `
}