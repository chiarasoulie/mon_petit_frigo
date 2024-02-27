<script setup>
import { defineEmits, defineProps } from "vue";

// -- les events émis par le composant
const emit = defineEmits(["searchl"]);
// -- handler utile si on veut gérer le submit de cette manière
// <form @submit.prevent="handlerSubmit">
</script>

<template>

  <form @submit.prevent="$emit('searchl', motcle)" id="recherche">
    <div class="container">
    <input type="text" v-model="motcle" placeholder="rechercher ?" id="champ" class="zone"/>
    </div>
    <v-btn type="submit" id="bouton"> valider </v-btn>
  </form>

</template>

<style scope>

.zone{
  width: 300px; /* Largeur des zones de saisie */
  height: 40px; /* Hauteur des zones de saisie */
  border: 1px solid #ccc; /* Bordure de 1 pixel solide grise */
  padding: 5px; /* Rembourrage interne pour l'espace entre le contenu et la bordure */
  margin-bottom: 10px; /* Marge inférieure pour l'espace entre les zones de saisie */
}

.container {
  display: flex;
  flex-direction: column; /* Aligner les éléments en colonne */
  align-items: flex-start; /* Aligner les éléments au début de la colonne */
}
</style>