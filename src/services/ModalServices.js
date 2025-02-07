//Se hace un opjeto de funciones

export default {
  show(modal) {
    modal.mostrar = true;
    // setTimeout anima el modal. ejecuta una función después de que haya transcurrido un cierto tiempo
    setTimeout(() => {
      modal.animar = true;
    }, 300);
  },

  hide(modal) {
    modal.mostrar = false;
    // setTimeout anima el modal. ejecuta una función después de que haya transcurrido un cierto tiempo
    setTimeout(() => {
      modal.animar = false;
    }, 300);
  },

  validateFields(name,last_name,phone,email,password,password_confirm,post,stateAlert) {

    if (!name || !last_name || !phone || !email || !password || !password_confirm || !post) {
      stateAlert.Message = "¡Alerta! Debes llenar todos los campos requeridos antes de continuar.";
      stateAlert.showAlert = true;
      // identificar el tipo de error para pintar la alerta
      this.alertType(stateAlert, "Error");
      return;
    }

    // ---------------Confirmar la contraseña----------------------------
    if (password !== password_confirm) {
      stateAlert.Message = "Error: las contraseñas ingresadas no son iguales.";
      stateAlert.showAlert = true;
      // identificar el tipo de error para pintar la alerta
      this.alertType(stateAlert, "Error");
      return;
    }

    //--------------Validar criterios---------------------------
    this.validatePasswordCriteria(password, stateAlert);
  },

  // --------------------------Identificar tipo de error-----------------------------------
  alertType(stateAlert, alertType) {
    if (alertType === "Error") {
      stateAlert.classAlert = "bg-red-600 text-white";
    } else {
      stateAlert.classAlert = "bg-green-600";
    }
    setTimeout(() => {
      stateAlert.Message = "";
      stateAlert.showAlert = false;
      stateAlert.classAlert = "";
    }, 4000);
  },

  validatePasswordCriteria(password, stateAlert) {
    // Expresión regular para validar contraseña
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!regex.test(password)) {
      stateAlert.Message = "La contraseña debe tener al menos 10 caracteres e incluir minúsculas, mayúsculas, números y caracteres especiales.";
      stateAlert.showAlert = true;
      this.alertType(stateAlert, "Error");
    }
  },
};
