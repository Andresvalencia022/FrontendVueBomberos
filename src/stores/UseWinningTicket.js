import { defineStore } from "pinia";
import { reactive, ref, watchEffect, toRaw } from "vue";
import ModalServices from "../services/ModalServices";
import APIService from "../services/APIService";
import TextFormatterService from "../services/TextFormatterService";
import moment from "moment";

export const UseWinningTicketStore = defineStore("WinningTicketStore", () => {

  const arrayWinningTicket = ref([]);

  let inputDate = ref(new Date());


  const isScrollable = ref(false); // Nueva variable para manejar el scroll
  //objeto modo para editar
  let editMode = ref();

  // Función para formatear fechas en 'YYYY-MM-DD'
  const formatDateYMD = (game_date) => (game_date ? moment(game_date).format("YYYY-MM-DD") : "");


  function formattedWinningTicket(data) {
    // Formatear las fechas del nuevo evento
    return {
      ...data,
      start_date: formatDateYMD(data.start_date),
    };
  }

  const objectWinningTicket = reactive({
    id: "",
    winning_number: "",
    winning_name: "",
    description: "",
    game_date: formatDateYMD(inputDate.value),
    phone: "",
  });

  // 📌 Sincronización automática entre `date` y `objectEvent.date`
  watchEffect(() => {
    objectWinningTicket.game_date = formatDateYMD(inputDate.value);
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
      console.error("Error al leer todos los registros:", error.message);
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

  //buscar registro para mostrar en detalles de evento
  async function searchrecord(id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.bringWinningTicket(id, token);
      const dataWinningTicket = data.data;
      objectWinningTicket.id = dataWinningTicket.id;
      objectWinningTicket.winning_number = dataWinningTicket.winning_number;
      objectWinningTicket.winning_name = dataWinningTicket.winning_name;
      const decodedDescription = TextFormatterService.decodeHTMLEntities(
        dataWinningTicket.description
      ).replace(/<br\s*\/?>/g, "\n\n") //Convierte <br> a \n
        .replace(/\n{3,}/g, "\n\n"); // Evita más de dos saltos seguidos

      objectWinningTicket.description = decodedDescription.trim();
      objectWinningTicket.phone = dataWinningTicket.phone;

      // Formatear las fechas antes de asignarlas
      inputDate.value = moment(dataWinningTicket.game_date, "YYYY-MM-DD").isValid()
        ? moment(dataWinningTicket.game_date, "YYYY-MM-DD").toDate()
        : null;
      // ✅ Verificar si la info es mayor a 645 caracteres para activar el scroll
      isScrollable.value = dataWinningTicket.description.length > 210;

    } catch (error) {
      console.error("Error buscar el registro del ganador:", error.message);
    }
  }

  function formattedWinningTicket(data) {
    // Formatear las fechas del nuevo evento
    return {
      ...data, // Mantiene el resto de los datos sin cambios
      date: formatDateYMD(data.date), // Convierte la fecha
    };
  }

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
    //Condicion si hay id 
    objectWinningTicket.id ? updateWinningTicket() : saveWinningTicket();

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
      // Formatear las fechas del nuevo evento y luego agrego al final de mi array la consulta 
      arrayWinningTicket.value.unshift(formattedWinningTicket(data.data));

    } catch (error) {
      console.error("Error al crear el nuevo ganador:", error.message);
    }
  }

  const eventUpdate = (id) => {
    searchrecord(id);
    show_modal();
  };

  async function updateWinningTicket() {

    const token = APIService.authToken();

    objectWinningTicket.description = objectWinningTicket.description
      .replace(/\r\n/g, "\n") // Normaliza saltos de línea de Windows (\r\n → \n)
      .replace(/\n{3,}/g, "\n\n"); // Mantiene máximo dos saltos seguidos

    // Convertir objectWinningTicket a un objeto plano manualmente
    const objeto = {
      ...toRaw(objectWinningTicket),
      date: typeof objectWinningTicket.game_date === "string" ? objectWinningTicket.game_date : "",
    };

    try {
      const { data } = await APIService.updateWinningTicket(objeto.id, objeto, token);

      //el método findIndex en el array se utiliza para encontrar el índice del objeto en el lista category que tiene el mismo id
      const i = arrayWinningTicket.value.findIndex((WinningTicket) => WinningTicket.id === objeto.id);
      if (i !== -1) arrayWinningTicket.value[i] = formattedWinningTicket(data.data);

    } catch (error) {
      console.error("Error al editar el ganador:", error.message);
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
      console.error("Error al eliminar el registro:", error.message);
    }
  }




  const restarWinningTicket = () => {
    //  reiniciar el objeto para que no muestre los valores en los campos del formulario
    Object.assign(objectWinningTicket, {
      id: "",
      winning_number: "",
      winning_name: "",
      description: "",
      game_date: formatDateYMD(inputDate.value),
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
    eventUpdate,
    searchrecord,
    isScrollable,
    restarWinningTicket,
    editMode,
    winningTicketDelete,
  };
});
