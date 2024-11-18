<template>
   <div class="bg-secondary-subtle"><h1 class="text-center mb-3 p-3">TIENDA 32 BITS</h1></div>
   <div class="text-center d-flex flex-column justify-content-center align-items-center">
      <h4 class="m-5">Lista de juegos</h4>
      <table class="table">
         <thead>
            <tr>
               <th>Código</th>
               <th>Nombre</th>
               <th>Stock</th>
               <th>Precio</th>
               <th>Color</th>
               <th>Modificar Stock</th>
            </tr>
         </thead>
         <tbody>
            <!-- Recorre el array de juegos desde el estado global con mapState -->
            <tr v-for="juego in juegos" :key="juego.codigo">
               <td>{{ juego.codigo }}</td>
               <td>{{ juego.nombre }}</td>
               <td>{{ juego.stock }}</td>
               <td>{{ juego.precio }}</td>
               <td>{{ juego.color }}</td>
               <td>
                  <!-- Botones para modificar el stock -->
                  <button @click="decrementStock(juego.codigo)" class="btn btn-danger btn-sm mx-3">-</button>
                  <button @click="incrementStock(juego.codigo)" class="btn btn-success btn-sm">+</button>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
 
<script>
   import { mapState, mapActions } from 'vuex';
   
   export default {
      computed: {
      ...mapState({
         juegos: state => state.juegos, // Traemos los juegos del estado global con mapState
      }),
      },
      methods: {
      ...mapActions([
         'decrementStock', // Acción para disminuir el stock
         'incrementStock'  // Acción para aumentar el stock
      ])
      }
   };
</script>
 
<style scoped>
   .table {
      width: auto;
      border-collapse: collapse;
   }
   
   .table th, .table td {
      padding: auto;
      text-align: left;
   }
   
   .table th {
      background-color: #f2f2f2;
   }
</style> 