import api from "../lib/axios";
import Cookies from "js-cookie";

export default {
  // Sacar el token de la Cookies
  authToken() {
    const token = Cookies.get("AUTH-TOKEN");
    if (!token) {
      throw new Error(
        "Token de autenticación no encontrado en el almacenamiento local."
      );
    }
    return token;
  },

  getTokenLongin(data) {
    return api.post("/login", data);
  },

  //verifica si el usuario esta autenticado para poder navegar por las rutas de la vista
  verifyUser(token) {
    // Configurar el encabezado Authorization con el token
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/authentication"); // Asume que '/user' es la ruta para verificar al usuario
  },

  //  Todos Eventos
  getEvents(token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/event");
  },

  
  createEvent(data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.post("/event", data, token);
  },
  
  bringEvent(id, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/event/" + id, token);
  },
  
  
  updateEvent(id, data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.put("/event/" + id, data, token);
  },
  
  deleteEvent(id, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.delete("/event/" + id, token);
  },
  // Evento publicos
  getPublicEvents() {
   return api.get("/public/event");
 },
  //publico
  bringPublicEvents(id) {
    return api.get("/public/event/" + id);
  },
  
  // -------------------------- News ------------------------------------------------------------

  CreateNew(data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.post("/news", data, token);
  },

  //  Todos los News
  getNews(token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/news");
  },
  
  bringNews(id, token){
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/news/" + id, token);
  },
  
  
  updateNews(id, data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.post("/news/" + id, data, token);
  },
  deleteNews(id, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.delete("/news/" + id, token);
  },
  //publico
  getPublicNews() {
    return api.get("/public/news");
  },
  //publico
  bringPublicNews(id) {
    return api.get("/public/news/" + id);
  },
  // --------------------------Winning Ticket------------------------------------------------------------
  createWinningTicket(data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.post("/Winningticket", data, token);
  },

  //  Todos los WinningTicket
  getWinningTicket(token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/Winningticket");
  },
  //buscar
  bringWinningTicket(id, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/Winningticket/" + id, token);
  },
  updateWinningTicket(id, data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.put("/Winningticket/" + id, data, token);
  },
  deleteWinningTicket(id, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.delete("/Winningticket/" + id, token);
  },
  
  // (publico) traer el ultimo ganador
  WinningNumber(){
   return api.get("/public/WinningNumber")
  },

  // (publico) Traer los ultimos 4 ganadores antes del ultimo 
  winners(){
    return api.get("/public/winners")
   },
  // --------------------------User------------------------------------------------------------

  CreateUser(data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.post("/createuser", data, token);
  },

  //  Todos los usuarios
  getUser(token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/users");
  },

  bringUser(id, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.get("/users/" + id, token);
  },
  updateUser(id, data, token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.put("/users/" + id, data, token);
  },
};
