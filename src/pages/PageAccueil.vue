<template>
  <body>
    <div class="fond">
      <h1>Bienvenue dans le frigo de Chiara</h1><br>
      <p>Appuyez sur la poignée pour l'ouvrir</p><br>
    </div>
    <v-btn to="/PageListe" class="ouvrir">Appuyez ici</v-btn>
  </body>
</template>
  
<script setup>
    import Frigo from '@/components/Frigo.vue';
</script>

<style scoped>
.ouvrir{
  position: relative;
  bottom: 500px;
  left: 190px;
}
body{
    background-image: url('../assets/lacuisine.avif');
    /* Autres propriétés de style */
    background-size: cover; /* Ajuste la taille de l'image pour couvrir toute la zone */
    background-repeat: no-repeat; /* Empêche la répétition de l'image */
    min-height: 100vh;
}
</style>