import { defineStore } from "pinia";
import ModalServiecs from "@/services/ModalServices";
import Datepicker from 'vue3-datepicker' //librería para los select 
import { ref ,reactive } from "vue";

export const UseEventStore = defineStore("EventStore", () => {

    const start_date = ref(new Date())
    const end_date = ref(new Date())

   
        //objeto de modal
        const modal = reactive({
            mostrar: false,
            animar: false
        })

        //objeto de modal
        const objectEvent = reactive({
            event_name: '',
            start_date: start_date.value,
            end_date: end_date.value,
            hour: '',
            description: '',
        })
        
       //mostrar modal
        const show_modal = () => {
            ModalServiecs.show(modal);
        }
    
        //ocultar modal
        const hideModel = () => {
            ModalServiecs.hide(modal);
        }

      //Agregar Productos
      const addEvent = () => {
        console.log(objectEvent)
      }


  return {
    start_date,
    end_date,
    modal,
    show_modal,
    hideModel,
    objectEvent,
    addEvent, 
   };
});
