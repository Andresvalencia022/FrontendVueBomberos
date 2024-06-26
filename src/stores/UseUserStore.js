import { defineStore } from "pinia";
import APIService from '../services/APIService'
import { useRouter} from 'vue-router';
import { reactive, ref } from "vue";
import Cookies from 'js-cookie';

import ModalServices from "../services/ModalServices";

// _____________________________________________________
export const UseUserStore = defineStore("UserStore", () => {

  const router = useRouter(); // Obtiene el router de Vue


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

     //objeto de modal
     const modal = reactive({
      mostrar: false,
      animar: false,
    });  

    //Mostrar modal
    const show_modal = (ModalType) => {
  if (ModalType === "modal_new_registration") {
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


  if (!name || !last_name || !phone ||  !email || !password || !password_confirm || !post) {
    stateAlert.Message = '¡Alerta! Debes llenar todos los campos requeridos antes de continuar.'
    stateAlert.showAlert = true;
    
    // identificar el tipo de error para pintar la alerta
    ModalServices.alertType(stateAlert, 'Error')    
    return
  }

// ---------------Confirmar la contraseña----------------------------
 if (password !== password_confirm){
  stateAlert.Message = 'Error: las contraseñas ingresadas no son iguales.'
  stateAlert.showAlert = true;
   // identificar el tipo de error para pintar la alerta
  ModalServices.alertType(stateAlert, 'Error') 
  return
 }

 //--------------Validar criterios---------------------------
 ModalServices.validatePasswordCriteria(password,stateAlert)


 saveUser();
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
        authenticateUser,
        objectUser,
        modal,
        show_modal,
        hideModel,
        addUser,
        stateAlert,
    };

});