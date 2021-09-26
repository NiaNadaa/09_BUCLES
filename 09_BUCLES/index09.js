for(i=1;i<=12;i++){
    console.log(i);
    
    i%2!==0
    ?document.getElementById("main").innerHTML+=`
    <p>${i} ------- ${i*i}</p>
    `
    :document.getElementById("main").innerHTML+=`
    <p>${i} ------- ${i*i*i}</p>
    `
};

