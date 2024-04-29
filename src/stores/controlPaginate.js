import { defineStore } from "pinia";
import { reactive} from "vue";

export const useControlPagineStore = defineStore("controlPagine", () => {
  
  const sections = reactive({
    state:   false,
  })

  const handleScroll  = (event)  => {
    if (window.scrollY >= 149.629638671875) {
    //  console.log(window.scrollY);
     sections.state = true
    } else {
      sections.state = false
    }
   };
   

  function checkSection(seccion) {
    if (seccion == '' || seccion == 'index') {
       sections.state = false
    }else{
       sections.state = true
    }
  }

  return {
    checkSection,
    sections,
    handleScroll
  };
});

