<template>
  <body>
    <div class="fond">
      <h1>Bienvenue dans le frigo de Chiara</h1><br>
      <p>Appuyez sur la poignée pour l'ouvrir</p><br>
    </div>
    <Frigo></Frigo>
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
</style>