import api from '../lib/axios';
import Cookies from 'js-cookie';

export default {

  // Sacar el token de la Cookies
  authToken(){
    const token = Cookies.get('AUTH-TOKEN');
    if (!token) {
       throw new Error('Token de autenticación no encontrado en el almacenamiento local.');
    }
    return token;
  },

    getTokenLongin(data){
        return api.post('/login',data)
    },

    //verifica si el usuario esta autenticado para poder navegar por las rutas de la vista
    verifyUser (token){
     // Configurar el encabezado Authorization con el token
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return api.get('/authentication'); // Asume que '/user' es la ruta para verificar al usuario    
   },

    //  Todos Eventos
    getEvents (token){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return api.get('/event'); // Asume que '/user' es la ruta para verificar al usuario    
    },
    
    CreateEvent (data, token){
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
         return api.post('/event', data, token)
    },

    updateEvent (id, data, token){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return api.put('/event'); 
    },

    deleteEvent (id, token){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return api.delete('/event/' + id ,token)
    },


    // --------------------------User------------------------------------------------------------
    
    CreateUser (data, token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
      return api.post('/createuser', data, token)
 },

}