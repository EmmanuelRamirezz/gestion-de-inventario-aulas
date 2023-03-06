

//validador de formulario
function menu(){
  location.href="menu.html"
}
function validar(){
  
  var form = document.form;
  
  
  if(form.correo.value=='pv18021389@vallarta.tecmm.edu.mx' && form.contraseña.value=="123"){
    menu(); 
    alert("Bienvenido");
    
    

  }else{
    alert("Datos incorrectos");
  }
}

//Overlay salir
var 
btnAbrirPopup = document.getElementById('btn-salir'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popupS'),
btnCerrar = document.getElementById('btn-cerrarS'),
btnAceptar=document.getElementById('btn-aceptarS');
//Abrir Popup
if(btnAbrirPopup){
  btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active'); //visible
  });
}
//Cancelar
if (btnCerrar) {
  btnCerrar.addEventListener('click', function(){
    overlay.classList.remove('active'); //no visible
  });
}
//Contadores de cocinas
  var c1 =0
  var c2 =0
  var c3 =0
  var c4 =0
  var c5 =0
  //Ventana emergente cocinas----------------
  //Cocina1
  var btnAbrirPopup = document.getElementById('btn-cocina1'),
  overlay = document.getElementById('overlay'),
  popup = document.getElementById('popup'),
  btnCerrar = document.getElementById('btn-cerrar'),
  

  visibilidadc1=document.getElementById('visibilidadc1'),
  vicibilidadOcupado1 = document.getElementById('btn-ocupado1'),
  vicibilidadDisponible1 = document.getElementById('btn-cocina1'),
  btnAceptar=document.getElementById('btn-aceptar');
    //btn abrir
    if(btnAbrirPopup){
      btnAbrirPopup.addEventListener('click', function(){
        overlay.classList.add('active'); //visible
      });
      
    }
  //btn cerrar
  if (btnCerrar) {
    btnCerrar.addEventListener('click', function(){
      overlay.classList.remove('active'); //no visible
    });
  }
  //Cocina2:
  var btnAbrirPopup2 = document.getElementById('btn-cocina2'),
  overlay2 = document.getElementById('overlay2'),
  popup2 = document.getElementById('popup2'),
  btnCerrar2 = document.getElementById('btn-cerrar2'),

  visibilidadc2=document.getElementById('visibilidadc2'),
  vicibilidadOcupado2 = document.getElementById('btn-ocupado2'),
  vicibilidadDisponible2 = document.getElementById('btn-cocina2'),
  btnAceptar2=document.getElementById('btn-aceptar2');


    //btn abrir
    if(btnAbrirPopup2){
      btnAbrirPopup2.addEventListener('click', function(){
        overlay2.classList.add('active'); //visible
      });
    }
  //btn cerrar
  if (btnCerrar2) {
    btnCerrar2.addEventListener('click', function(){
      overlay2.classList.remove('active'); //no visible
    });
  }
 //Cocina 3
 var btnAbrirPopup3 = document.getElementById('btn-cocina3'),
  overlay3 = document.getElementById('overlay3'),
  popup3 = document.getElementById('popup3'),
  btnCerrar3 = document.getElementById('btn-cerrar3'),

  visibilidadc3=document.getElementById('visibilidadc3'),
  vicibilidadOcupado3 = document.getElementById('btn-ocupado3'),
  vicibilidadDisponible3 = document.getElementById('btn-cocina3'),
  btnAceptar3=document.getElementById('btn-aceptar3');
    //btn abrir
    if(btnAbrirPopup3){
      btnAbrirPopup3.addEventListener('click', function(){
        overlay3.classList.add('active'); //visible
      });
    }
  //btn cerrar
  if (btnCerrar3) {
    btnCerrar3.addEventListener('click', function(){
      overlay3.classList.remove('active'); //no visible
    });
  }
 //Cocina 4
 var btnAbrirPopup4 = document.getElementById('btn-cocina4'),
 overlay4 = document.getElementById('overlay4'),
 popup4 = document.getElementById('popup4'),
 btnCerrar4 = document.getElementById('btn-cerrar4'),

 visibilidadc4=document.getElementById('visibilidadc4'),
 vicibilidadOcupado4 = document.getElementById('btn-ocupado4'),
 vicibilidadDisponible4 = document.getElementById('btn-cocina4'),
 btnAceptar4=document.getElementById('btn-aceptar4');
   //btn abrir
   if(btnAbrirPopup4){
     btnAbrirPopup4.addEventListener('click', function(){
       overlay4.classList.add('active'); //visible
     });
   }
 //btn cerrar
 if (btnCerrar4) {
   btnCerrar4.addEventListener('click', function(){
     overlay4.classList.remove('active'); //no visible
   });
 }
 //Cocina 5
 var btnAbrirPopup5 = document.getElementById('btn-cocina5'),
 overlay5 = document.getElementById('overlay5'),
 popup5 = document.getElementById('popup5'),
 btnCerrar5 = document.getElementById('btn-cerrar5'),

 visibilidadc5=document.getElementById('visibilidadc5'),
 vicibilidadOcupado5 = document.getElementById('btn-ocupado5'),
 vicibilidadDisponible5 = document.getElementById('btn-cocina5'),
 btnAceptar5=document.getElementById('btn-aceptar5');
   //btn abrir
   if(btnAbrirPopup5){
     btnAbrirPopup5.addEventListener('click', function(){
       overlay5.classList.add('active'); //visible
     });
   }
 //btn cerrar
 if (btnCerrar5) {
   btnCerrar5.addEventListener('click', function(){
     overlay5.classList.remove('active'); //no visible
   });
 }
 //DATOS
 var 
 btnAbrirPopupD = document.getElementById('btn-cocinaD'),
 overlayD = document.getElementById('overlayD'),
 popupD = document.getElementById('popupD'),
 btnCerrarD = document.getElementById('btn-cerrarD'),

 visibilidadcD=document.getElementById('visibilidadcD'),
 vicibilidadOcupadoD = document.getElementById('btn-ocupadoD'),
 vicibilidadDisponibleD = document.getElementById('btn-cocinaD'),
 btnAceptarD=document.getElementById('btn-aceptarD');
   //btn abrir
   if(btnAbrirPopupD){
     btnAbrirPopupD.addEventListener('click', function(){
       overlayD.classList.add('active'); //visible
     });
   }
 //btn aceptar
 if (btnAceptarD) {
  btnAceptarD.addEventListener('click', function(){
     overlayD.classList.remove('active'); //no visible
   });
  }
//form cocinas



// Funciones de mandar datos a cocinas 
//Overlay1
function enviarTexto1 (){
 
if (grupoc1.value=='') {
  alert('Por favor llene todos los campos');
  return
}
if (docentec1.value=='') {
  alert('Por favor llene todos los campos');
  return
}
if(llegada1.value==''){
  alert('Por favor llene todos los campos');
  return
}
if(salida1.value==''){
  alert('Por favor llene todos los campos');
  return
}

var textoGrupo = document.getElementById("grupoc1").value;
document.getElementById("grupoEstado1").value= textoGrupo;
var textoDocente = document.getElementById("docentec1").value;
document.getElementById("docenteEstado1").value= textoDocente;

var Hllegada1 = document.getElementById("llegada1").value;
document.getElementById("Hentrada1").value= Hllegada1;
var Hsalida1 = document.getElementById("salida1").value;
document.getElementById("Hsalida1").value= Hsalida1;

overlay.classList.remove('active');
vicibilidadOcupado1.classList.add('active')
vicibilidadDisponible1.classList.add('active');
c1++
var visibility1 = document.querySelectorAll('.visibility1')

visibility1[0].classList.remove('inactive')
visibility1[1].classList.remove('inactive')
visibility1[2].classList.remove('inactive')
}

// overlay2
function enviarTexto2(){
  //Validador de la ventana emergente
  if (grupoc2.value=='') {
    alert('Por favor llene todos los campos');
    return
  }
  if (docentec2.value=='') {
    alert('Por favor llene todos los campos');
    return
  }
  if(llegada2.value==''){
    alert('Por favor llene todos los campos');
    return
  }
  if(salida2.value==''){
    alert('Por favor llene todos los campos');
    return
  }
  var textoGrupo2 = document.getElementById("grupoc2").value;
  document.getElementById("grupoEstado2").value= textoGrupo2;
  var textoDocente2 = document.getElementById("docentec2").value;

  var Hllegada2 = document.getElementById("llegada2").value;
  document.getElementById("Hentrada2").value= Hllegada2;
  var Hsalida2 = document.getElementById("salida2").value;
  document.getElementById("Hsalida2").value= Hsalida2;

  document.getElementById("docenteEstado2").value= textoDocente2;
  overlay2.classList.remove('active');

  vicibilidadOcupado2.classList.add('active')
  vicibilidadDisponible2.classList.add('active')
  c2++
  
  var visibility2 = document.querySelectorAll('.visibility2')

  visibility2[0].classList.remove('inactive')
  visibility2[1].classList.remove('inactive')
  visibility2[2].classList.remove('inactive')
}
  //Overlay 3
  function enviarTexto3(){
    //Validador de la ventana emergente
    if (grupoc3.value=='') {
    alert('Por favor llene todos los campos');
    return
    }
    if (docentec3.value=='') {
    alert('Por favor llene todos los campos');
    return
    }
    if(llegada3.value==''){
    alert('Por favor llene todos los campos');
    return
    }
    if(salida3.value==''){
    alert('Por favor llene todos los campos');
    return
    }
    var textoGrupo3 = document.getElementById("grupoc3").value;
    document.getElementById("grupoEstado3").value= textoGrupo3;
    var textoDocente3 = document.getElementById("docentec3").value;
    document.getElementById("docenteEstado3").value= textoDocente3;

    var Hllegada3 = document.getElementById("llegada3").value;
    document.getElementById("Hentrada3").value= Hllegada3;
    var Hsalida3 = document.getElementById("salida3").value;
   document.getElementById("Hsalida3").value= Hsalida3;

    overlay3.classList.remove('active');
    
    vicibilidadOcupado3.classList.add('active')
    vicibilidadDisponible3.classList.add('active')
    c3++

    var visibility3 = document.querySelectorAll('.visibility3')

    visibility3[0].classList.remove('inactive')
    visibility3[1].classList.remove('inactive')
    visibility3[2].classList.remove('inactive')
}
  

  //Overlay 4
  function enviarTexto4(){
    //Validador de la ventana emergente
     if (grupoc4.value=='') {
      alert('Por favor llene todos los campos');
      return
    }
     if (docentec4.value=='') {
      alert('Por favor llene todos los campos');
      return
    }
    if(llegada4.value==''){
      alert('Por favor llene todos los campos');
      return
    }
    if(salida4.value==''){
      alert('Por favor llene todos los campos');
      return
    }
    var textoGrupo4 = document.getElementById("grupoc4").value;
    document.getElementById("grupoEstado4").value= textoGrupo4;
    var textoDocente4 = document.getElementById("docentec4").value;
    document.getElementById("docenteEstado4").value= textoDocente4;
    
    var Hllegada4 = document.getElementById("llegada4").value;
    document.getElementById("Hentrada4").value= Hllegada4;
    var Hsalida4 = document.getElementById("salida4").value;
   document.getElementById("Hsalida4").value= Hsalida4;
    overlay4.classList.remove('active');
    
    vicibilidadOcupado4.classList.add('active')
    vicibilidadDisponible4.classList.add('active')
    c4++

    var visibility4 = document.querySelectorAll('.visibility4')

    visibility4[0].classList.remove('inactive')
    visibility4[1].classList.remove('inactive')
    visibility4[2].classList.remove('inactive')
  }
  //Overlay 5
  function enviarTexto5(){
    //Validador de la ventana emergente
    if (grupoc5.value=='') {
     alert('Por favor llene todos los campos');
      return
    }
    if (docentec5.value=='') {
      alert('Por favor llene todos los campos');
      return
    } 
    if(llegada5.value==''){
      alert('Por favor llene todos los campos');
      return
    }
    if(salida5.value==''){
      alert('Por favor llene todos los campos');
      return
    }
    var textoGrupo5 = document.getElementById("grupoc5").value;
    document.getElementById("grupoEstado5").value= textoGrupo5;
    var textoDocente5 = document.getElementById("docentec5").value;
    document.getElementById("docenteEstado5").value= textoDocente5;
    var Hllegada5 = document.getElementById("llegada5").value;
    document.getElementById("Hentrada5").value= Hllegada5;
    var Hsalida5 = document.getElementById("salida5").value;
   document.getElementById("Hsalida5").value= Hsalida5;
    overlay5.classList.remove('active');
    
    vicibilidadOcupado5.classList.add('active')
    vicibilidadDisponible5.classList.add('active')
    c5++

    var visibility5 = document.querySelectorAll('.visibility5')

    visibility5[0].classList.remove('inactive')
    visibility5[1].classList.remove('inactive')
    visibility5[2].classList.remove('inactive')
  }
  
//-----------------------------------------
//Desocupar1
function desocupar(){
var vicibilidadOcupado1 = document.getElementById('btn-ocupado1'),
vicibilidadDisponible1 = document.getElementById('btn-cocina1'),
visibilidadc1=document.getElementById('visibilidadc1');
vicibilidadOcupado1.classList.remove('active')
vicibilidadDisponible1.classList.remove('active')


var visibility1 = document.querySelectorAll('.visibility1')
visibility1[0].classList.add('inactive')
visibility1[1].classList.add('inactive')
visibility1[2].classList.add('inactive')

}

//Desocupar2
function desocupar2(){
  var vicibilidadOcupado2 = document.getElementById('btn-ocupado2'),
  vicibilidadDisponible2 = document.getElementById('btn-cocina2'),
  visibilidadc2=document.getElementById('visibilidadc2');
  
  vicibilidadOcupado2.classList.remove('active')
  vicibilidadDisponible2.classList.remove('active')
 

  var visibility2 = document.querySelectorAll('.visibility2')
  visibility2[0].classList.add('inactive')
  visibility2[1].classList.add('inactive')
  visibility2[2].classList.add('inactive')
}

//Desocupar 3
function desocupar3(){
  var vicibilidadOcupado3 = document.getElementById('btn-ocupado3'),
  vicibilidadDisponible3 = document.getElementById('btn-cocina3'),
  visibilidadc3=document.getElementById('visibilidadc3');
  
  vicibilidadOcupado3.classList.remove('active')
  vicibilidadDisponible3.classList.remove('active')
  
  var visibility3 = document.querySelectorAll('.visibility3')
  visibility3[0].classList.add('inactive')
  visibility3[1].classList.add('inactive')
  visibility3[2].classList.add('inactive')

}

//Desocupar 4
function desocupar4(){
  var vicibilidadOcupado4 = document.getElementById('btn-ocupado4'),
  vicibilidadDisponible4 = document.getElementById('btn-cocina4'),
  visibilidadc4=document.getElementById('visibilidadc4');
  
  vicibilidadOcupado4.classList.remove('active')
  vicibilidadDisponible4.classList.remove('active')

  var visibility4 = document.querySelectorAll('.visibility4')
  visibility4[0].classList.add('inactive')
  visibility4[1].classList.add('inactive')
  visibility4[2].classList.add('inactive')
}

//Desocupar 5
function desocupar5(){
  var vicibilidadOcupado5 = document.getElementById('btn-ocupado5'),
  vicibilidadDisponible5 = document.getElementById('btn-cocina5'),
  visibilidadc5=document.getElementById('visibilidadc5');
  
  vicibilidadOcupado5.classList.remove('active')
  vicibilidadDisponible5.classList.remove('active')
  
  var visibility5 = document.querySelectorAll('.visibility5')
  visibility5[0].classList.add('inactive')
  visibility5[1].classList.add('inactive')
  visibility5[2].classList.add('inactive')
}

function datos(){
console.log(c1);
console.log(c2);
console.log(c3);
var ctx= document.getElementById("myChart").getContext("2d");
//Globales:
Chart.defaults.global.defaultFontColor= 'white';
Chart.defaults.global.defaultFontSize= 19;

        var myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['Cocina 1','Cocina 2','Cocina 3','Cocina 4','Cocina 5'],
                datasets:[{
                        label:'Usos de las cocinas',
                        
                        data:[c1,c2,c3,c4,c5],
                        backgroundColor:[
                            'rgb(0, 204, 255)',
                            'rgb(0, 179, 0)',
                            'rgb(204, 51, 0)',
                            'rgb(255, 255, 0)',
                            'rgb(255, 255, 255)'
                        ]
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true,
                            }
                    }]
                },              
              legend: {
                display: false,
              }
            }
        });
        /*
  var cocina1D = document.getElementById('cocina1D');
 cocina1D.value=c1;

 var cocina2D = document.getElementById('cocina2D');
 cocina2D.value=c2;

 var cocina3D = document.getElementById('cocina3D');
 cocina3D.value=c3;

 var cocina4D = document.getElementById('cocina4D');
 cocina4D.value=c4;

 var cocina5D = document.getElementById('cocina5D');
 cocina5D.value=c5;
 */
}


//Botones de almacen


function botonA(){
  var 
  div = document.getElementById('divEleccion'),
  div2 =document.getElementById('divFiltro'),
  btnAtras = document.getElementById('btnAtras'),
  instruccionA=document.getElementById('instruccionA'),
  botonA =document.getElementById('botonA'),
  botonB =document.getElementById('botonB'),
  buscador = document.querySelector('.buscador'),
  eleccion = document.querySelector('.eleccion');

  eleccion.classList.add('inactivePlus')
  buscador.classList.remove('inactivePlus')
  botonA.classList.add('active')
  botonB.classList.add('active')
  div.classList.add('active')
  div2.classList.add('active')
  btnAtras.classList.add('active')
  instruccionA.classList.remove('inactivePlus')
 
}

function botonB(){
  var 
  div = document.getElementById('divEleccion'),
  btnAtras = document.getElementById('btnAtras'),
  instruccionB=document.getElementById('instruccionB'),
  botonA =document.getElementById('botonA'),
  botonB =document.getElementById('botonB'),
  filtro = document.querySelector('.filtro');

  filtro.classList.remove('inactivePlus')
  botonA.classList.add('active')
  botonB.classList.add('active')
  div.classList.add('inactivePlus')
  btnAtras.classList.add('active')
  instruccionB.classList.remove('inactivePlus')
}

function editar(){
  var 
  div = document.getElementById('divEleccion'),
  div2 =document.getElementById('divFiltro'),
  btnAtras = document.getElementById('btnAtras'),
  instruccionA=document.getElementById('instruccionA'),
  botonA =document.getElementById('botonA'),
  botonB =document.getElementById('botonB');
  

  botonA.classList.add('active')
  botonB.classList.add('active')
  div.classList.add('active')
  div2.classList.add('active')
  btnAtras.classList.add('active')
  instruccionA.classList.add('active') 
}

function btnAtras(){
  var 
  div = document.getElementById('divEleccion'),
  div2 =document.getElementById('divFiltro'),
  btnAtras = document.getElementById('btnAtras'),
  botonA =document.getElementById('botonA'),
  botonB =document.getElementById('botonB');

  botonA.classList.remove('active')
  botonB.classList.remove('active')
  div.classList.remove('active')
  div2.classList.remove('active')
  btnAtras.classList.remove('active')

  location.reload();
}
//Bloqueo de textbox
var 
btnBuscar = document.getElementById('btnBuscar'),
txtNombre =document.getElementById('Fnombre'),
txtUbicacion=document.getElementById('Fubicacion'),
txtUnidades=document.getElementById('Funidades');

function bloqueoN(){
  if(txtNombre.value==''){
    document.getElementById('Fubicacion').disabled = false;
    document.getElementById('Funidades').disabled = false;
    
    return;
  }
  document.getElementById('Fubicacion').disabled = true;
  document.getElementById('Funidades').disabled = true;
}

function bloqueoU(){
  if(txtUbicacion.value==''){
    document.getElementById('Fnombre').disabled = false;
    document.getElementById('Funidades').disabled = false;
    return;
  }
  document.getElementById('Fnombre').disabled = true;
  document.getElementById('Funidades').disabled = true;
}
function bloqueoUN(){
  if(txtUnidades.value==''){
    document.getElementById('Fnombre').disabled = false;
    document.getElementById('Fubicacion').disabled = false;
    return;
  }
  document.getElementById('Fnombre').disabled = true;
  document.getElementById('Fubicacion').disabled = true;
}


//--------------Graficas de Almacen-----------------
function generarColorHexadecimal() {
  let colorHex = (Math.random() * 0xffffff * 1000000).toString(16);
  return `#${colorHex.slice(0, 6)}`;
}

 var grafica = document.getElementById('grafica'),
 popupG = document.getElementById('popupG'),
 saliralv = document.getElementById('btn-aceptarG'),
 overlayG = document.getElementById('overlayG'),
 Tarticulos= document.getElementById('Tarticulos');


function estadisticasG(){
  overlayG.classList.add('active');

  //btn cerrar
  if (saliralv) {
    saliralv.addEventListener('click', function(){
    overlayG.classList.remove('active'); //no visible
    location.reload();
    });
  }
  

  //Mostrar contenido
  var elementos = document.getElementsByTagName('h3');
  var total = elementos.length
  var nombres = [];
  var unidades = [];
  var colores =[];
  console.log(total);
  console.log(total/3);
  //Total de articulos
  Tarticulos.value=total/3;
  //Generador de colores--------
  for(var i=0; i<=(total/3)-1; i++){
  colores[i]=generarColorHexadecimal()
}
//titulo-------------------
var el= 0;
for(var i=0; i<=total-3; i=i+3){
  nombres[el]=elementos[i].innerHTML;
  el++;
}
//unidades------------------
var un= 0;
for(var j=2; j<=total; j=j+3){
  //console.log(titulo[i].innerHTML);
  unidades[un]=elementos[j].innerHTML;
  un++;
}
console.log(nombres);
console.log(unidades);
console.log(colores);
//Grafica como tal----------------------
  var myChartG = document.getElementById('myChartG').getContext('2d');
  var estadisticasG = new Chart(myChartG,{
    type: 'bar',
    data:{
      labels: nombres,
      datasets: [{
        label: 'Elementos actuales en almacenw',
        data: unidades,
        backgroundColor: colores,
      }]
    },
    options:{
      legend:{
        display:false,
        
      }
    }
  });

}

  






