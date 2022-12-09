let log = "Agustina";
let password = "0618";
let condicion1;
let contador = 0;


let userlog = prompt("Por Favor, ingrese su USUARIO.")
let userpass = prompt("Por Favor, ingrese su CONTRASEÑA.")
do{
    contador = contador + 1

    if(userlog !== log || userpass !== password)
    {
        alert("USUARIO O CONTRASEÑA INCORRECTOS")
        let userlog = prompt("Por Favor, ingrese su USUARIO otra vez.")
        let userpass = prompt("Por Favor, ingrese su CONTRASEÑA otra vez.")

        if(userlog == log && userpass == password)
        {
            condicion1 = userlog, userpass
            alert("BIENVENID@ AL SISTEMA")
            
        }
    
    }
   else
    {
    condicion1 = userlog, userpass
    alert("BIENVENID@ AL SISTEMA")
    }

if(condicion1 != userlog, userpass || condicion1 == userlog, userpass)
{
    contador = contador + 1
}
}
while(contador < 3)

while(contador = 3)
{
    if(contador = 3 && userlog != log || userpass != password)
    {
       alert("INICIO DE SESIÓN DESHABILITADO. POR FAVOR, INTÉNTELO MÁS TARDE.") 
    }
}

while(contador = 3)
{
    if(contador = 3 && userlog == log && userpass == password)
    {
        alert("BIENVENID@ AL SISTEMA") 

    }
}