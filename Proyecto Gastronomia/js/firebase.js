  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  onSnapshot,
  getDoc,
  updateDoc,
  query,
  where,
  orderBy
  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
  //segun la documentacion, usando collection se puede hacer tablas o coleccion de datos

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBiraak3KEahoFlDJSFFIropdd6-8UrpMg",
    authDomain: "fir-javascript-crud-b2d2b.firebaseapp.com",
    projectId: "fir-javascript-crud-b2d2b",
    storageBucket: "fir-javascript-crud-b2d2b.appspot.com",
    messagingSenderId: "492801096100",
    appId: "1:492801096100:web:eaaf634169c06f4fc0a931"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //inicia la conexion a la db
  export const db = getFirestore();


  //Hacemos una funcion cuyos parametros son titulo y descripcion. y agregamos export para usarlos en otro archivo 
  export const saveTask = (title, description, unidades) =>{ console.log(title, description, unidades);
    addDoc(collection(db, 'task'), {title, description, unidades});
    //Para guardar datos hacemos lo siguietne:
    // llamamos una coleccion la cual necesita la conexion de bd y la coleccion donde quiero guardar (le pondremos task) y le paso el dato que quiero guardar.
    //Añadimos addDoc aqui y arriba 
    //Cuando se le pase un titulo y una descripcion a esta funcion, se va a guardar un documento en al coleccion de tareas y se va a crear un objeto   que está compuesto por el titulo y la descripcion
  }

  export const getTasks = () => getDocs (collection (db, 'task'));
  //hacemos una funcion sin parametros la cual con la funcion getDocs la cual importamos más arriba la cual va a agarrar un documento de la bd para eso le indicamos la coleccion, la conexion y el nombre de la coleccion (tasks) 
 

  export const onGetTasks = (callback) => onSnapshot (collection (db, 'task'), callback);
  //creamos esta funcion para traer nuestros elementos de la base de datos y mostrarlos en pantalla sin necesidad de actualizar 

  export const deleteTask = id => deleteDoc(doc(db, 'task', id));
  //Con esto Eliminamos un documento de la db lo cual necesita la coleccion (task) y el id a eliminar
  
  export const getTask = id=> getDoc(doc(db, 'task', id));
  //Con esto traemos un documento de la db task que coincida con el id que pido. (gracias a getTask el cual importé)

  export const updateTask = (id, newFields)=> updateDoc(doc(db, 'task', id), newFields);
  //Actualiza los datos. esta funcion ocupa el id y los campos(newFields)

  //--------------Consultas---------------
  


   
  



  
 
  

  
  

   

 

  
  

  


  
 
  