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

};
