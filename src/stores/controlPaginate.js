import { defineStore } from "pinia";
import { reactive, ref, onMounted } from "vue";

export const useControlPagineStore = defineStore("controlPagine", () => {
  const sections = reactive({
    state: false,
    statelottery: false,
    Animationlottery: false,
  });

  const handleScroll = (event) => {
    if (window.scrollY >= 149.629638671875) {
      sections.state = true;
    } else {
      sections.state = false;
    }

    if (window.scrollY >= 130 ) {
      sections.statelottery = true;
      setTimeout(() => {
        sections.Animationlottery = true;
      }, 200);
    } else {
      sections.statelottery = false;
      setTimeout(() => {
        sections.Animationlottery = false;
      }, 200);
    }

  };

  function checkSection(seccion) {
    if (seccion == "" || seccion == "index") {
      sections.state = false;
    } else {
      sections.state = true;
    }
  }

  return {
    checkSection,
    sections,
    handleScroll,
   
  };
});
