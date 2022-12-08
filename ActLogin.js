let log = "Agustina";
let password = "0618";
let condicion1;
let condicion2;

let userlog = Prompt("Por Favor, ingrese su USUARIO.")
do{
    
    if(userlog !== log)
    {
        userlog = Prompt("USUARIO INCORRECTO")
    }
    else
    {
        condicion1 = userlog
    }
    
}
while(condicion1 !== userlog);


let userpass = Prompt("Por Favor, ingrese su CONTRASEÑA.")
do{
    
    if(userpass !== password)
    {
        userpass = Prompt("CONTRASEÑA INCORRECTO")
    }
    else
    {
        condicion2 = userpass
    }
    
}
while(condicion2 !== userpass);

