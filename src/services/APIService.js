import api from '../lib/axios'

export default {
    getTokenLongin(data){
        return api.post('/login',data)
    },


    //verifica si el usuario esta autenticado para poder navegar por las rutas de la vista
    verifyUser (token){
     // Configurar el encabezado Authorization con el token
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return api.get('/authentication'); // Asume que '/user' es la ruta para verificar al usuario    
   }
}