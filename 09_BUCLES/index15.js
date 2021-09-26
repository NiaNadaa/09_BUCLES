let pass = window.prompt("Introduce la contraseña");

if(pass.length>=8){
    
    for(i=0;i<pass.length;i++){
        pass[i]===i?console.log("correcto"):console.log("incorrecto")
    }

}else{
    window.alert("La contraseña debe tener al menos 8 dígitos");
};


/* let regExp = /^[A-Z]{1}[A-Za-z0-9]{7}$/g;

const match = regExp.test(pass);
console.log(match); */