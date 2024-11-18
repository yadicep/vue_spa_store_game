import { createStore } from 'vuex';
import juegos from '@/assets/juegos.json'; // Importamos el JSON de juegos

const store = createStore({
   state: {
      juegos: juegos, // Almacena los juegos en ele satdo global
   },
   mutations: {
      setJuegos(state, nuevosJuegos) {
         state.juegos = nuevosJuegos;
      },
      // Mutación para incrementar el stock de un juego
      incrementStock(state, codigo) {
         const juego = state.juegos.find(j => j.codigo === codigo);
         if (juego) {
         juego.stock++;
         }
      },
      // Mutación para decrementar el stock de un juego
      decrementStock(state, codigo) {
         const juego = state.juegos.find(j => j.codigo === codigo);
         if (juego && juego.stock > 0) {
         juego.stock--;
         }
      }
   },
   actions: {
      // Acción para incrementar el stock, llama a la mutación correspondiente
      incrementStock({ commit }, codigo) {
         commit('incrementStock', codigo); // Llama a la mutación
      },
      // Acción para decrementar el stock, llama a la mutación correspondiente
      decrementStock({ commit }, codigo) {
         commit('decrementStock', codigo); // Llama a la mutación
      }
   },
   getters: {
      getJuegos(state) {
         return state.juegos; // Retorna los juegos
      },
   },
});

export default store;