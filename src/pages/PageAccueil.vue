<template>
    <h1>Bienvenue dans le frigo de Chiara</h1><br>
    <p>Appuyez sur la poignée pour l'ouvrir</p><br>
    <Frigo></Frigo>
    <v-btn to="/PageListe">Appuyez ici</v-btn>

</template>
  
<script setup>
    import Frigo from '@/components/Frigo.vue';
</script>

<style scoped>
.v-btn{
  position: relative;
  bottom: 500px;
  left: 190px;
}
</style>