<script setup>
// -- il faut déclarer les 2 params (props) du composant
defineProps(["aliment","deletea", "moins","plus"]);
// -- les 2 events émis par ce composant
</script>

<template>
  <li>
    {{ aliment.pourAfficher }}
    <!-- au click sur le bouton, 
         on emet un événement dont on choisit le nom (ici deleteC)
         la fonction qui gèrera cet event aura en paramètre la valeur de index
    -->
    <button @click="()=>deletea(chose.id)">supprimer</button>
    <button @click="()=>plus(chose.id)">augmenter la quantité</button>
    <button @click="()=>moins(chose.id)">baisser la quantité</button>
  </li>
</template>

<style>
</style>