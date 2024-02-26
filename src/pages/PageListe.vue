<template>
    <div class="frigoO">
        <Liste></Liste>
        <img src="../assets/frigo-ouvert.jpg" alt="Description de l'image" class="fridge-image">
    </div>
    

</template>

<script setup>
    import Liste from '@/components/Liste.vue';
</script>

<style scoped>

.fridge-image {
  width: 800px; /* Largeur de l'image */
  height: auto; /* Hauteur automatique pour préserver les proportions */
  margin-left: 20px; /* Espace entre l'image et le frigo */
  position:relative;
}

.frigoO {
  display: flex;
}

</style>