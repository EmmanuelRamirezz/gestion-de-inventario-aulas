

//importamos la funcion del archivo firebase 
import {saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask, db } from './firebase.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

import {
  
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"

const taskForm = document.getElementById('task-form')//nuetro formulario lo pasamos a la variable taskForm
const taskContainer = document.getElementById('tasks-container')
//lo mismo de arriba

//ordenar por nombre:
//const orden = query(ColRef, orderBy("title"));

let editStatus=false;
let id = '';
window.addEventListener('DOMContentLoaded', async () => { 
//Ejecuta este codigo cuando se caRga todo el html
onGetTasks((querySnapshot)=>{ 
  let html = ''
  querySnapshot.forEach(doc => {
    const taskss=doc.data()//la informacion
    //muestra el id
    
    
    html += `
        <div class="table_container">
       
        <div class="nombre"><h3>${taskss.title}</h3></div>
        <div class="ubicacion"><h3>${taskss.description}</h3></div>
        <div class="unidades"> <h3>${taskss.unidades}</h3></div>


        
        <div class="botones">
          <!--  <button class ="btn-delete" data-id="${doc.id}">Eliminar</button>
          <button class ="btn-edit" data-id="${doc.id}">Editar</button> -->
          <!-- <input type="image" src="img/eliminar.png" class ="btn-delete" height="40px" data-id="${doc.id}"> -->
          <input type="image" src="img/editar.png"   class ="btn-edit" height="40px" data-id="${doc.id}" onclick="editar()">
        </div>


        </div>
    `
    
  })
  
  if (taskContainer) {
    taskContainer.innerHTML = html
  
   //En el codigo de arriba nos muestra las tareas en tiempo real de la db

    //BOTON BORRAR
    //Para borrar un elemento necesitamos su id de la db. lo traemos de la siguiente forma
    const btnsDelete = taskContainer.querySelectorAll('.btn-delete')
    btnsDelete.forEach(btn=>{
    btn.addEventListener('click', ({target:{dataset}})=>{//con este evento tramos el id del boton 
        deleteTask(dataset.id)
      })
    })
  


    //BOTON EDITAR
    const btnsEdit = taskContainer.querySelectorAll('.btn-edit')
    //se seleciconan todos los botones edith
    btnsEdit.forEach((btn)=>{
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id)
        const task = doc.data()
         //Hace una consulta a la db y nos retorna un documento 
        taskForm['task-title'].value=task.title
        taskForm['task-description'].value=task.description 
        taskForm['unidades-disponibles'].value=task.unidades
        //Los datos del documento los coloca en las cajas de texto
        editStatus=true;
        id = doc.id; //le pasamos el id a la variable id

        //taskForm['btn-task-save'].innerText = 'Update'
         //al darle a update el boton save pasa a decir update
       
      })
     
    })
  } //if
  });
});





if(taskForm){
  
    //BOTON GUARDAR
    taskForm.addEventListener('submit', (e)=>{
      //ejecuta esto al presionar al boton enviar
      e.preventDefault()//detiene el evento default
      //Escucha al boton submit del formulario cuando es presionado
     
    //validador almacen---------
     let detencion=false
     var form_almacen = document.form_almacen;
     
     if(form_almacen.nombre.value ==''){
      alert("Por favor llene el campo nombre");
      detencion=true;
     }
      if(form_almacen.ubicacion.value==''){
      alert("Por favor llene el campo ubicacion");
      detencion=true;
     }

     if(form_almacen.unidades.value ==''){
      alert("Por favor llene el campo unidades");
      detencion=true;
      }
      if(detencion==true){
        return
      }
      //------------------------------
      
      console.log("Enviado");
      const title = taskForm['task-title']
      const description = taskForm['task-description']
      const unidades = taskForm['unidades-disponibles']
      //seleccionamos el titulo y la descripcion del form y los pasamos a nuevas variables
    
      if(editStatus==false){
        saveTask (title.value, description.value, unidades.value);
      }else{
        updateTask(id,{
          title: title.value,
          description: description.value,
          unidades: unidades.value
        });
    
        editStatus=false;
      }
      //el boton edit cambia el estatus a true y no guarda los datos
      
      taskForm.reset() //deja los text box al presionar el boton 
    
      
    })
  
  }


//----------------Filtro Almacen----------
//boton buscar
var 
btnBuscar = document.getElementById('btnBuscar'),
txtNombre =document.getElementById('Fnombre'),
txtUbicacion=document.getElementById('Fubicacion'),
txtUnidades=document.getElementById('Funidades');

//Buscar x Nombre
async function btnBuscar1(){
  
  if(txtNombre.value=='' && txtUnidades.value==''){
    btnBuscar2()
    return;
  }
  if(txtNombre.value=='' && txtUbicacion.value==''){
    console.log('jala unidades');
    btnBuscar3()
    return;
  }
  let html2='';

   const colRef =  collection(db, 'task');
   const q =  query(colRef, where("title", "==", txtNombre.value));
   const retorno = await getDocs(q);
   retorno.forEach((doc) => {
   const consulta = doc.data();
   console.log(consulta);
   html2+=`
      <div class="contenedor_consulta">
       
        <div class="nombre"><h3>${consulta.title}</h3></div>
        <div class="ubicacion"><h3>${consulta.description}</h3></div>
        <div class="unidades"> <h3>${consulta.unidades}</h3></div>
        <div class="botones">
          
        </div>
       </div>
    `
  });
  taskContainer.innerHTML = html2
}
//Buscar x Ubicacion
async function btnBuscar2(){
  let html3='';

   const colRef =  collection(db, 'task');
   const q =  query(colRef, where("description", "==", txtUbicacion.value));
   const retorno = await getDocs(q);
   retorno.forEach((doc) => {
   const consulta = doc.data();
   console.log(consulta);
   html3+=`
      <div class="contenedor_consulta">
       
        <div class="nombre"><h3">${consulta.title}</h3></div>
        <div class="ubicacion"><h3>${consulta.description}</h3></div>
        <div class="unidades"> <h3>${consulta.unidades}</h3></div>
        <div class="botones">
          
        </div>
       </div>
    `
  });
  taskContainer.innerHTML = html3
}

//Buscar x Unidades
async function btnBuscar3(){
  let html4='';

   const colRef =  collection(db, 'task');
   const q =  query(colRef, where("unidades", "==", txtUnidades.value));
   const retorno = await getDocs(q);
   retorno.forEach((doc) => {
   const consulta = doc.data();
   console.log(consulta);
   html4+=`
      <div class="contenedor_consulta">
       
        <div class="nombre"><h3>${consulta.title}</h3></div>
        <div class="ubicacion"><h3>${consulta.description}</h3></div>
        <div class="unidades"> <h3>${consulta.unidades}</h3></div>
        <div class="botones">
          
        </div>
       </div>
    `
  });
  taskContainer.innerHTML = html4
  
}

btnBuscar.addEventListener('click',btnBuscar1,true)

//Contar el numero de elementos en la bd:










