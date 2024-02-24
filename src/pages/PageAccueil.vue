<template>
  <body>
    <div class="fond">
      <h1>Bienvenue dans le frigo de Chiara</h1><br>
      <p>Appuyez sur le bouton pour découvrir ce qu'il contient</p><br>
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
  bottom: 830px;
  left: 0%;
}
</style>