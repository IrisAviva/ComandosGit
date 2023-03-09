let nombre, correo, memsaje;

let formulario = document.getElementById('form');

formulario.addEventListener('submit',(e)=>{
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
 nombre= document.getElementById('nombre').value
 correo= document.getElementById('correo').value
 mensaje= document.querySelector('textarea').value
alert(mensaje)
}
function ValidarDatos(nombre, correo, mensaje){
   if(nombre.length==0 || correo.length==0 || mensaje.length==0) {
 
   }
}