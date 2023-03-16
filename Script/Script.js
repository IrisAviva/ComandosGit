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
ValidarDatos(nombre,correo,textarea)
GuardarLocalStorage(nombre,correo,mensaje)
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
function GuardarLocalStorage(nombre,correo,textarea){
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('correo',correo)
    localStorage.setItem('textarea',textarea)
    ListarDatos()
}
function ListarDatos(){
    let nombreUsu = localStorage.getItem('nombre')
    let correoUsu = localStorage.getItem('correo')
    let textareaUsu = localStorage.getItem('textarea')
}