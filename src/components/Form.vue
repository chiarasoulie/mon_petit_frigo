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
    <div class="container">
      <input type="text" v-model="nom" placeholder="type ?" id = "champ" class="zone"/>
      <input type="int" v-model="qte" placeholder="quantité ?" id = "champ" class="zone" />
    </div>
    <v-btn type="submit" id="bouton">valider</v-btn>

  </form>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column; /* Aligner les éléments en colonne */
  align-items: flex-start; /* Aligner les éléments au début de la colonne */
}

.zone{
  width: 300px; /* Largeur des zones de saisie */
  height: 40px; /* Hauteur des zones de saisie */
  border: 1px solid #ccc; /* Bordure de 1 pixel solide grise */
  padding: 5px; /* Rembourrage interne pour l'espace entre le contenu et la bordure */
  margin-bottom: 10px; /* Marge inférieure pour l'espace entre les zones de saisie */
}
</style>