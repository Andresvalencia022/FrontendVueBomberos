import { defineStore } from "pinia";
import APIService from '../services/APIService'
import { useRouter} from 'vue-router';
import { reactive } from "vue";
import Cookies from 'js-cookie';

export const UseUserStore = defineStore("UserStore", () => {

  const router = useRouter(); // Obtiene el router de Vue

  const loginForm = reactive({
    email: 'andresfv2016@gmail.com',
    password: '123456789',
  })

  //Diccopnario errores
  const errorCode = {
    'ERR_BAD_REQUEST' : 'Credenciales incorrectas',
  }

  async function authenticateUser(){
     try {
    const {data} = await  APIService.getTokenLongin(loginForm);
    
    Cookies.set('AUTH-TOKEN', data.token, { expires: 1 });
    router.push({ name: 'access' }); // redireccionar 
   } catch (error) {
    console.log(errorCode[error.code]);
   }
  }

    return{
        loginForm,
        authenticateUser,
    };

});