<template>
  <v-app>
  <!-- une barre de navigation -->
  <v-app-bar
  color="primary"
  density="compact"
  >
  <!-- mettre l'icone dans le 'slot prepend' de 'v-app-bar' soit au début à gauche -->
  <template v-slot:prepend>
  <!-- un clic sur l'icone cache/affiche la zone de menu de gauche -->
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </template>
  <!-- le titre de la barre de navigation -->
  <v-app-bar-title>Application frigo</v-app-bar-title>
  <!-- un simple bouton qui retourne à la page d'accueil route="/"-->
  <v-btn to="/PageAccueil">Home</v-btn>

  <!-- mettre l'icone dans le 'slot append' de 'v-app-bar' soit au fond à droite -->
  <template v-slot:append>
  </template>
  </v-app-bar>
  <!-- la zone où sera affichée les différentes "pages"-->
  <v-main>
  <v-container class="page">
  <!-- les "composant view" s'afficheront ici -->
  <RouterView />
  </v-container>
  </v-main>
  <!-- le footer -->
  <v-footer color="primary">
  <div>
  {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
  </div>
  </v-footer>
  </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const drawer = ref(false) // booléen pour afficher/cacher la zone de gauche
  </script>
  
  
  <style scoped>
  .page{
  min-height: 100vh;
  text-align: center;
  }
  </style>
