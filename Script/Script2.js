let Dueno, Modelo, Placa, Tipo, Fecha, Hora, Cantidad;

 let formulario = document.getElementById('infor');

 formulario.addEventListener('submit',(e)=>{

    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
    Dueno= document.getElementById('Dueno').value
    Modelo= document.getElementById('Modelo').value
    Placa= document.querySelector('#Placa').value
    Tipo= document.querySelector('#Tipo').value
    Fecha= document.getElementById('Entrada').value
    Hora= document.getElementById('Inicio').value
    Cantidad= document.getElementById('Horas').value

   ValidarDatos(Dueno, Modelo, Placa, Tipo, Fecha, Hora, Cantidad)
   }

   function ValidarDatos(Dueno, Modelo, Placa, Tipo, Fecha, Hora, Cantidad){
    if(Dueno.length==0 || Modelo.length==0 || Placa.length==0 || Tipo.length==0 || Fecha.length==0 || Hora.length==0 || Cantidad.length==0 ) {
  
     Swal.fire({
         title: 'Error',
         text: 'Si quiere enviar, debe llenar la información completa.',
         icon: 'error',
         confirmButtonText: 'ok', 
         confirmButtonColor: 'black',
         iconColor: 'black'
     })
    }
    else GuardarLocalStorage(Dueno, Modelo, Placa, Tipo, Fecha, Hora, Cantidad)
    
 }

 function GuardarLocalStorage(Dueno, Modelo, Placa, Tipo, Fecha, Hora, Cantidad){
    localStorage.setItem('Dueno',Dueno)
    localStorage.setItem('Modelo',Modelo)
    localStorage.setItem('Placa',Placa)
    localStorage.setItem('Tipo',Tipo)
    localStorage.setItem('Entrada',Fecha)
    localStorage.setItem('Inicio',Hora)
    localStorage.setItem('Horas',Cantidad)

    ListarDatos()
}
function ListarDatos(){
    let DuenoUsu = localStorage.getItem('Dueno')
    let ModeloUsu = localStorage.getItem('Modelo')
    let placaUsu = localStorage.getItem('Placa')
    let tipoUsu = localStorage.getItem('Tipo')
    let fechaUsu = localStorage.getItem('Entrada')
    let horaUsu = localStorage.getItem('Inicio')
    let cantidadUsu  = localStorage.getItem('Horas')

}