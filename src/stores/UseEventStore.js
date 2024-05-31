import { defineStore } from "pinia";
import { ref ,reactive, onMounted } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";
import Datepicker from 'vue3-datepicker' //librería para los select 

import ModalServices from "../services/ModalServices";

export const UseEventStore = defineStore("EventStore", () => {

    const start_date = ref(new Date())
    const end_date = ref(new Date())

    const arrayEvents = ref([]);
    
        //objeto de modal
        const objectEvent = reactive({
            id: '',
            event_name: '',
            start_date: start_date.value,
            end_date: end_date.value,
            hour: '',
            description: '',
        });
       
      const stateAlert = reactive({
        Message: '',
        showAlert: false,
        classAlert: ''
      })  


      
      // Función para formatear la fecha a 'YYYY-MM-DD'  
      function formatDate(dateString){
        return dateString.split(' ')[0];
      }
      
      //Todos los eventos
      const getEvent =  async () => {
       const token = APIService.authToken();

       try {
          const { data } = await APIService.getEvents(token)
           // Formatear las fechas antes de asignar los datos a arrayEvents.value
          arrayEvents.value =  data.data.map(event => ({
            ...event,
            start_date: formatDate(event.start_date),
            end_date: formatDate(event.end_date),
          }));

        } catch (error) {
          console.error('Error al leer Eventos:', error.message);
        }
      }
      
      onMounted(() => {
        getEvent();
      });
      
      //Agregar Productos
      const addEvent = () => {
  
        const event_name = objectEvent.event_name == '' ? false : objectEvent.event_name;
        const start_date = objectEvent.start_date == '' ? false : objectEvent.start_date;
        const end_date = objectEvent.end_date == '' ? false : objectEvent.end_date;
        const hour = objectEvent.hour == '' ? false : objProduct.price;
        const description = objectEvent.description == '' ? false : objProduct.category_id;
        const id = objectEvent.id == '' ? false : objectEvent.id;

        if (!event_name || !start_date || !end_date ||  !hour || !description) {
          stateAlert.Message = '¡Alerta! Debes llenar todos los campos requeridos antes de continuar.'
          stateAlert.showAlert = true;
      
          identifyTypeAlert('Error');
        
          setTimeout(() => {
            stateAlert.Message = '';
            stateAlert.showAlert = false;
            stateAlert.classAlert = '';
        }, 4000);
        return
        }


        saveEvent();
        console.log('lll');
        ModalServices.hide();

         //reiniciar el objeto para que no muestre los valores en los campos del formulario
         Object.assign(objProduct, {
          reference: "",
          name: "",
          description: "",
          price: "",
          category_id: "",
          location: "",
          category_description: "",
      });
      }
     
      //identificar el tipo de Alerta
      function identifyTypeAlert (typeaAlert){
        if (typeaAlert === 'Error') {
          stateAlert.classAlert =  'bg-red-600 text-white';
        }else{
          stateAlert.classAlert =  'bg-green-600';
        }
      }

      async function saveEvent() {
        const token = APIService.authToken();
        try {
          const { data } = await APIService.createProduct(objectEvent, token);
          // Crear una copia del array y agregarle el nuevo objeto
          const updatedArray = [data.data,...objectEvent.value];
          // Asignar la nueva copia al ref
          objectEvent.value = updatedArray;
      } catch (error) {
          console.error('Error al leer categorías:', error.message);
      }
      }

    
  
      return {
    start_date,
    end_date,
    objectEvent,
    addEvent, 
    arrayEvents,
    stateAlert,
   };
});
