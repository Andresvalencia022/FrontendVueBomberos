import { defineStore } from "pinia";
import { reactive, ref} from "vue";
import APIService from "../services/APIService"
import moment from "moment";


export const UsePublicWinningTicketStore = defineStore("PublicWinningTicketStore", () => {

    const arrayPublicWinningTicket = ref([]);
    
    const PublicStatusModifier = ref(false); // Estado inicial como booleano
   
    
    const loader = ref(false);

    const objectPublicWinningTicket = reactive({
        id: "",
        winning_number: "",
        winning_name: "",
        description: "",
        game_date: "",
        phone: "",
    });

    // Ultimo ganador 
    const last_winner = async () => {
        loader.value = true;
        try {
           const { data } = await APIService.WinningNumber();
        const dataApi = data.data   
            // Asignar los valores de la respuesta al objeto reactivo
        objectPublicWinningTicket.id = dataApi.id;
        objectPublicWinningTicket.winning_number = dataApi.winning_number;
        objectPublicWinningTicket.winning_name = dataApi.winning_name;
        objectPublicWinningTicket.description = dataApi.description;
        objectPublicWinningTicket.phone = dataApi.phone;
        objectPublicWinningTicket.game_date = dataApi.game_date;        
        
        }catch{
            console.error("Error al mostrar el ultimo ganador:", error.message);
        } finally {
            loader.value = false;
        }
    }


    // Ganador 
        const winners = async () => {
            try {
               const { data } = await APIService.winners();
               arrayPublicWinningTicket.value = data.data || [];
            }catch{
                console.error("Error mostrar los últimos ganadores:", error.message);
            }
        }

    return {
        last_winner,
        winners,
        objectPublicWinningTicket,
        arrayPublicWinningTicket,
        PublicStatusModifier,
        loader
    }
})