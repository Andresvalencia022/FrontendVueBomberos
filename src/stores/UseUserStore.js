import { defineStore } from "pinia";
import {reactive, ref } from "vue";
import APIService from '../services/APIService'
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';



import ModalServices from "../services/ModalServices";

// _____________________________________________________
export const UseUserStore = defineStore("UserStore", () => {
  
  // const ModalStore = UseModalStore();
  const router = useRouter(); // Obtiene el router de Vue

  //objeto modo para editar
  let editMode = ref();

  const arrayUser = ref([])

  // loginForm
  const userObjectForm = reactive({
    id: '',
    name: '',
    last_name: '',
    phone: '',
    email: '',
    state: '0',
    email: '',
    password: '',
    password_confirm: '',
    post: ''
  });

  // andresfv2016@gmail.com
  // 123456789

  const stateAlert = reactive({
    Message: '',
    showAlert: false,
    classAlert: ''
  })  

  const objectUser = reactive({
    id: '',
    name: '',
    last_name: '',
    phone: '',
    email: '',
    state: '',
  })
  
  //objeto de modal
  const modal = reactive({
   mostrar: false,
   animar: false,
 });  

  //Diccopnario errores
  const errorCode = {
    'ERR_BAD_REQUEST' : 'Credenciales incorrectas',
  }
  
  async function authenticateUser(){
     try {
    const {data} = await  APIService.getTokenLongin(userObjectForm);  
    Cookies.set('AUTH-TOKEN', data.token, { expires: 1 });
     
    router.push({ name: 'access' }); // redireccionar 
   } catch (error) {
    console.log(errorCode[error.code]);
   }
  }

  //Todos los User
  const readUser =  async () => {
   const token = APIService.authToken();
   try {
      const { data } = await APIService.getUser(token)

      // Formatear las fechas antes de asignar los datos a arrayEvents.value
       arrayUser.value =  data.data
  
    } catch (error) {
      console.error('Error al leer Eventos:', error.message);
    }
  }

    //Mostrar modal
    const show_modal = (function_mode) => {
     if(function_mode === 'new_registration'){
      editMode.value = false;
      ModalServices.show(modal);
     }else{
      editMode.value = true;
      ModalServices.show(modal);
     }
  }

 //ocultar modal
 const hideModel = (ModalType) => {
  if (ModalType === "cerrarSinGuardarUser") {
      ModalServices.hide(modal);
      restartUser();
  }else{
    ModalServices.hide(modal);
  }
};


 //Agregar Productos
 const addUser = () => {
  const name = userObjectForm.name == '' ? false : userObjectForm.name;
  const last_name = userObjectForm.last_name == '' ? false : userObjectForm.last_name;
  const phone = userObjectForm.phone == '' ? false : userObjectForm.phone;
  const email = userObjectForm.email == '' ? false : userObjectForm.email;
  // const state = userObjectForm.state == '' ? false : userObjectForm.state;
  const password = userObjectForm.password == '' ? false : userObjectForm.password;
  const password_confirm = userObjectForm.password_confirm == '' ? false : userObjectForm.password_confirm;
  const post = userObjectForm.post == '' ? false : userObjectForm.post;
  const id = userObjectForm.id == '' ? false : true ;
  if(!id){  
    //validar los campos del formulario y mostrar las alertas
    ModalServices.validateFields(name, last_name, phone, email, password, password_confirm, post, stateAlert)
    return;
  }

 if (id) {
  updateUser();
 }else{
  saveUser();
 }

 hideModel('cerrar');
 restartUser();
}

 async function saveUser() { 
  const token = APIService.authToken();
  try {
    const { data } = await APIService.CreateUser(userObjectForm, token);
    // Crear una copia del array y agregarle el nuevo objeto
    const updatedArray = [data.data,...arrayUser.value];
    // // Asignar la nueva copia al ref
    arrayUser.value = updatedArray;

} catch (error) {
    console.error('Error al crear el evento:', error.message);
}
 }

 async function searchrecord(editResult,id){
   const token = APIService.authToken();
  try {
    const { data } = await APIService.bringUser(id, token);
    userObjectForm.name = data.data.name;
    userObjectForm.last_name = data.data.last_name;
    userObjectForm.phone = data.data.phone;
    userObjectForm.email = data.data.email;
    userObjectForm.post = data.data.post;
    userObjectForm.state = data.data.state;
    if (editResult === 'edit') {
      userObjectForm.id = data.data.id
      show_modal(editResult);
    }

      }  catch (error) {
         console.error('Error al crear el evento:', error.message);
     }
 }

 async function updateUser() {
  const token = APIService.authToken();
  // Convertir objectWinningTicket a un objeto plano manualmente
  const objeto = {
    id: userObjectForm.id,
    name: userObjectForm.name,
    last_name: userObjectForm.last_name,
    phone: userObjectForm.phone,
    email: userObjectForm.email,
    state: userObjectForm.state,
    post: userObjectForm.post
  };
  try {
    const { data } = await APIService.updateUser(objeto.id, objeto ,token);
    //el método findIndex en el array se utiliza para encontrar el índice del objeto en el lista user que tiene el mismo id
    const i = arrayUser.value.findIndex((user) => user.id === objeto.id);
    //Asigna el objeto data.data al índice i del array WinningTicket.value."
    arrayUser.value[i] = data.data;
  } catch (error) {
    console.error("Error al crear el evento:", error.message);
  }
} 


const restartUser = () => {
  //  reiniciar el objeto para que no muestre los valores en los campos del formulario
 Object.assign(userObjectForm, {
  id: '',
  name: '',
  last_name: '',
  phone: '',
  email: '',
  state: '0',
  password: '',
  password_confirm: '',
  post: ''
 });
}

    return{
        userObjectForm,
        arrayUser,
        readUser,
        authenticateUser,
        objectUser,
        modal,
        show_modal,
        hideModel,
        addUser,
        stateAlert,
        searchrecord,
        editMode,
        restartUser
    };

});