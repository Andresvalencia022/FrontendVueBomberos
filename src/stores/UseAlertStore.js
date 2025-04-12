import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const UseAlertStore = defineStore('alertStore', () => {


  const message = ref("");
  const visible = ref(false);
  const type = ref(""); // success | error | warning | info

  //identificar el tipo de alerta, 
  //Vue actualiza classAlert solo, cada vez que cambie type por medio de computed.
  const classAlert = computed(() => {
    switch (type.value) {
      case "error":
        return "bg-red-200 border border-red-500";
      case "success":
        return "border-t-4  border-green-800 bg-green-800  text-white bg-opacity-90";
      case "error-form":
        return "bg-red-200 border border-red-500";
      default:
        return "bg-blue-600 text-white";
    }
  });

  function seeAlert(msg, msgType = "success") {

    message.value = msg;
    type.value = msgType;
    visible.value = true;

    //luego de me quite el estado
    setTimeout(() => {
      message.value = "";
      visible.value = false;
    }, 4300);
  }

  function validatePasswords(password, password_confirm) {
    if (!password || !password_confirm) {
      alertStore.seeAlert("¡Alerta! Debes ingresar una contraseña y confirmarla.", "error-form");
      return false;
    }

    if (password !== password_confirm) {
      seeAlert("Oops! Las contraseñas no coinciden.", "error");
      return false;
    }
    // Expresión regular para validar contraseña
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{10,}$/;

    if (!regex.test(password)) {
      seeAlert(
        "Oops! La contraseña debe incluir 10 caracteres, letras y símbolos.",
        "error"
      );
      return false;
    }

    return true;
  }

  // Función para ocultar la alerta
  const hideAlert = () => {
    visible.value = false; // Oculta la alerta
    type.value = "";
    message.value = "";
  };


  return {
    message,
    visible,
    type,
    classAlert,
    seeAlert,
    validatePasswords,
    hideAlert
  }
})