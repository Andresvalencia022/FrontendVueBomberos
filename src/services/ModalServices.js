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

  // --------------------------Identificar tipo de error-----------------------------------
  alertType(stateAlert, alertType) {
    if (alertType === 'Error') {
      stateAlert.classAlert =  'bg-red-600 text-white';
    }else{
      stateAlert.classAlert =  'bg-green-600';
    }

    setTimeout(() => {
      stateAlert.Message = '';
      stateAlert.showAlert = false;
      stateAlert.classAlert = '';
  }, 4000);

  }, 

  validatePasswordCriteria(password,stateAlert){
   // Expresión regular para validar contraseña
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
  
  if (!regex.test(password)) {
    stateAlert.Message = 'La contraseña debe tener al menos 10 caracteres e incluir minúsculas, mayúsculas, números y caracteres especiales.'
    stateAlert.showAlert = true;
    this.alertType(stateAlert, 'Error')
    }
  }
    
};
