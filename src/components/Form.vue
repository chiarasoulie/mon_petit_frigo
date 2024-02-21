<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const nom = ref("");
const qte= ref("");
// -- les events émis par le composant
const emit = defineEmits(["adda"]);

</script>

<template>
  <!-- quand le formulaire est validé,
    on doit emmetre un event vers le composant parent 
    pour faire ressortir du composant 
    la valeur de la variable "libelle";
  -->

  <form @submit.prevent="$emit('adda', nom, qte)" id = "ajouter">
    <!-- 2ème syntaxe possible avec un handler
  <form @submit.prevent="handlerSubmit">
  -->
    <!-- la direective v-model permet de faire le lien bidirectionnel
         entre la variable et la zone de saisie ;
         si on modifie la var, la zone de saisie est modifié
         si on modifie la zone de saisir, la variable est modifié
         -->
    <input type="text" v-model="nom" placeholder="type ?" id = "champ" />
    <input type="int" v-model="qte" placeholder="quantité ?" id = "champ" />
    <button type="submit" id="bouton">valider</button>

  </form>
</template>

<style scoped>
</style>