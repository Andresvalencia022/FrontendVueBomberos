import { defineStore } from "pinia";

import { ref ,reactive, onMounted, computed } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";
import Datepicker from 'vue3-datepicker' //librería para los select 
import ModalServices from "../services/ModalServices";
import moment from "moment";

import { UseUserStore } from "../stores/UseUserStore";
//  const {objectUser} = UserStore;

export const UseEventStore = defineStore("EventStore", () => {
  
  const UserStore = UseUserStore();

  const start_date = ref(new Date())
  const end_date = ref(new Date())
  
  
  // Función para formatear la fecha a 'YYYY-MM-DD'  
  function formatDateYMD (dateString){
    return dateString.split(' ')[0];
  }

  // Función para formatear la fecha a 'YYYY-MM-DD HH:mm:ss'
  function formatDate(date) {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }

    //objeto de modal
    const modal = reactive({
      mostrar: false,
      animar: false,
    });

  const arrayEvents = ref([]);
    
        //objeto de modal
        const objectEvent = reactive({
            id: '',
            event_name: '',
            start_date: formatDate(start_date.value),
            end_date: formatDate(end_date.value),
            time: '',
            description: '',
            user_id: UserStore.objectUser.id
        });
       
      const stateAlert = reactive({
        Message: '',
        showAlert: false,
        classAlert: ''
      })  

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


  //Mostrar modal
  const show_modal = (ModalType) => {
    if (ModalType === "modal_new_registration") {
        ModalServices.show(modal);
       }
  }

   //ocultar modal
   const hideModel = (ModalType) => {
    if (ModalType === "cerrarSinGuardarEvent") {
        ModalServices.hide(modal);
        restartEvent();
    }else{
      ModalServices.hide(modal);
    }
  };

      
      //Agregar Productos
      const addEvent = () => {
  
        const event_name = objectEvent.event_name == '' ? false : objectEvent.event_name;
        const start_date = objectEvent.start_date == '' ? false : objectEvent.start_date = formatDateYMD(objectEvent.start_date);
        const end_date = objectEvent.end_date == '' ? false : objectEvent.end_date = formatDateYMD(objectEvent.end_date);
        const time = objectEvent.time == '' ? false : objectEvent.time;
        const description = objectEvent.description == '' ? false : objectEvent.description;
        const id = objectEvent.id == '' ? false : objectEvent.id;


        if (!event_name || !start_date || !end_date ||  !time || !description) {
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
        hideModel('Cerrar');

        restartEvent();

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
          const { data } = await APIService.CreateEvent(objectEvent, token);
          // Crear una copia del array y agregarle el nuevo objeto
          const updatedArray = [data.data,...arrayEvents.value];
          console.log(updatedArray)
          // // Asignar la nueva copia al ref
          arrayEvents.value = updatedArray;

      } catch (error) {
          console.error('Error al crear el evento:', error.message);
      }
      }

     


      const restartEvent = () => {
          //  reiniciar el objeto para que no muestre los valores en los campos del formulario
         Object.assign(objectEvent, {
          id: '',
          event_name: '',
          start_date: formatDate(start_date.value),
          end_date: formatDate(end_date.value),
          time: '',
          description: '',
          user_id: '',
      });
      }

      return {
    modal,
    show_modal,
    hideModel,
    start_date,
    end_date,
    objectEvent,
    addEvent, 
    arrayEvents,
    stateAlert,
    restartEvent,
   };
});
