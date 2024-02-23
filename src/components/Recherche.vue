<script setup>
import { defineEmits, defineProps } from "vue";

// -- les events émis par le composant
const emit = defineEmits(["searchl"]);
// -- handler utile si on veut gérer le submit de cette manière
// <form @submit.prevent="handlerSubmit">
</script>

<template>
  <!-- quand le formulaire est validé,
    on doit emmetre un event vers le composant parent 
    pour faire ressortir du composant 
    les valeurs des variables "titre", "quantité" et "prix";
  -->
  <form @submit.prevent="$emit('searchl', motcle)" id="recherche">
    <input type="text" v-model="motcle" placeholder="rechercher ?" id="champ" />
    <button type="submit" id="bouton"> valider </button>
  </form>
</template>