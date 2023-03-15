let nombre, correo, memsaje;

let formulario = document.getElementById('form');

formulario.addEventListener('submit',(e)=>{

    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
 nombre= document.getElementById('nombre').value
 correo= document.getElementById('correo').value
 mensaje= document.querySelector('#textarea').value
console.log(nombre)
}
function ValidarDatos(nombre, correo, mensaje){
   if(nombre.length==0 || correo.length==0 || mensaje.length==0) {
 
    Swal.fire({
        title: 'Error1',
        text: 'do you want to continue',
        icon: 'error',
        confirmButtonText: 'cool',
        iconColor: 'purple'
    })
   }
}