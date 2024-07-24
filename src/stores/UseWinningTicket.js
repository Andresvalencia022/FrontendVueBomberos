import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
import ModalServices from "../services/ModalServices";
import APIService from "../services/APIService";
import moment from "moment";

export const UseWinningTicketStore = defineStore("WinningTicketStore", () => {
 
  const arrayWinningTicket = ref([]);

  let inputDate = ref(new Date());
  //objeto modo para editar
  let editMode = ref();

  // formatear la fecha a 'YYYY-MM-DD'
  function formatDate(date) {
    return moment(date).format("YYYY-MM-DD");
  }

  function formattedWinningTicket(data) {
    // Formatear las fechas del nuevo evento
    return {
     ...data,
     start_date: formatDate(data.start_date),
   };
 }

  const objectWinningTicket = reactive({
    id: "",
    winning_number: "",
    winning_name: "",
    description: "",
    game_date: formatDate(inputDate.value),
    phone: "",
  });

  // Observar cambios en inputDate y actualizar game_date
  watch(inputDate, (newValue) => {
    objectWinningTicket.game_date = formatDate(newValue);
  });

  //objeto de modal´
  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  //Alerta
  const stateAlert = reactive({
    Message: "",
    showAlert: false,
    classAlert: "",
  });

  //Todos los WinningTicket
  const readWinningTicket = async () => {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.getWinningTicket(token);
      arrayWinningTicket.value = data.data;
    } catch (error) {
      console.error("Error al leer Eventos:", error.message);
    }
  };

  //Mostrar modal
  const show_modal = (ModalType) => {
    if (ModalType === "modal_new_registration") {
      ModalServices.show(modal);
      editMode.value = false;
    } else {
      ModalServices.show(modal);
      editMode.value = true;
    }
  };

  //ocultar modal
  const hideModel = (ModalType) => {
    if (ModalType === "cerrarSinGuardarWinningTicket") {
      ModalServices.hide(modal);
      restarWinningTicket();
    } else {
      ModalServices.hide(modal);
    }
  };

  const addWinningTicket = () => {
    const winning_number =
      objectWinningTicket.winning_number == ""
        ? false
        : objectWinningTicket.winning_number;
    const winning_name =
      objectWinningTicket.winning_name == ""
        ? false
        : objectWinningTicket.winning_name;
    const phone =
      objectWinningTicket.phone == "" ? false : objectWinningTicket.phone;
    const game_date =
      objectWinningTicket.game_date == ""
        ? false
        : objectWinningTicket.game_date;
    const description =
      objectWinningTicket.description == ""
        ? false
        : objectWinningTicket.description;
    const id = objectWinningTicket.id == "" ? false : true;

    if (
      !winning_number ||
      !winning_name ||
      !phone ||
      !game_date ||
      !game_date ||
      !description
    ) {
      stateAlert.Message =
        "¡Alerta! Debes llenar todos los campos requeridos antes de registrar.";
      stateAlert.showAlert = true;

      ModalServices.alertType(stateAlert, "Error");

      setTimeout(() => {
        stateAlert.Message = "";
        stateAlert.showAlert = false;
        stateAlert.classAlert = "";
      }, 4000);
      return;
    }
    if (id){
      updateWinningTicket()
    }else{
      saveWinningTicket();
    }
    hideModel("Cerrar");
    restarWinningTicket();
  };
  async function saveWinningTicket() {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.createWinningTicket(
        objectWinningTicket,
        token
      );
      // Crear una copia del array y agregarle el nuevo objeto
      const updatedArray = [data.data, ...arrayWinningTicket.value];
      // Asignar la nueva copia al ref
      arrayWinningTicket.value = updatedArray;
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  }

  //buscar registro para mostrar en detalles de evento
  async function searchrecord(editResult,id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.bringWinningTicket(id, token);
      objectWinningTicket.id = data.data.id;
      objectWinningTicket.winning_number = data.data.winning_number;
      objectWinningTicket.winning_name = data.data.winning_name;
      objectWinningTicket.description = data.data.description;
      objectWinningTicket.phone = data.data.phone;

      if (editResult === 'edit') {
        // Crear la fecha sin que se vea afectada por la zona horaria
        const [year, month, day] = data.data.game_date.split('-');
        inputDate.value = new Date(year, month - 1, day);
        show_modal(editResult);

      } else {
        objectWinningTicket.game_date = data.data.game_date;
      } 
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  }

  async function updateWinningTicket() {
    const token = APIService.authToken();
    // Convertir objectWinningTicket a un objeto plano manualmente
    const objeto = {
      id: objectWinningTicket.id,
      winning_number: objectWinningTicket.winning_number,
      winning_name: objectWinningTicket.winning_name,
      description: objectWinningTicket.description,
      game_date: objectWinningTicket.game_date,
      phone: objectWinningTicket.phone,
    };
    try {
      const { data } = await APIService.updateWinningTicket(objeto.id, objeto ,token);
      const format = formattedWinningTicket(data.data);

      //el método findIndex en el array se utiliza para encontrar el índice del objeto en el lista category que tiene el mismo id
      const i = arrayWinningTicket.value.findIndex((WinningTicket) => WinningTicket.id === objeto.id);
      //Asigna el objeto data.data al índice i del array WinningTicket.value."
      arrayWinningTicket.value[i] = format;
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  } 
    
  const winningTicketDelete = (id) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este registro?")
    ) {
      remove(id);
    } else {
      console.log("Eliminación cancelada");
    }
  };

  //Eliminar registros
  async function remove(id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.deleteWinningTicket(id, token);
      arrayWinningTicket.value = arrayWinningTicket.value.filter((WinningTicket) => WinningTicket.id !== id);
    } catch (error) {
      console.error("Error al leer categorías:", error.message);
    }
  }




  const restarWinningTicket = () => {
    //  reiniciar el objeto para que no muestre los valores en los campos del formulario
    Object.assign(objectWinningTicket, {
      id: "",
      winning_number: "",
      winning_name: "",
      description: "",
      game_date: "",
      phone: "",
    });
  };

  return {
    modal,
    show_modal,
    hideModel,
    inputDate,
    objectWinningTicket,
    addWinningTicket,
    readWinningTicket,
    stateAlert,
    arrayWinningTicket,
    searchrecord,
    restarWinningTicket,
    editMode,
    winningTicketDelete,
  };
});
