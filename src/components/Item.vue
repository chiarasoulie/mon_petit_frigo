<script setup>


// -- il faut déclarer les 2 params (props) du composant
defineProps(["aliment"]);
defineEmits(["deletea", "moins","plus"])
// -- les 2 events émis par ce composant
</script>

<template>
  <ul>
    <li>
      {{ aliment.pourAfficher }}
    <!-- au click sur le bouton, 
         on emet un événement dont on choisit le nom (ici deleteC)
         la fonction qui gèrera cet event aura en paramètre la valeur de index
    -->
        <p id="space">
          <v-btn variant="tonal" @click="$emit('deletea', aliment.id)" class="bouton">supprimer</v-btn>
       </p>
        <p id="space">  
          <v-btn variant="tonal" @click="$emit('plus', aliment)" class="bouton">augmenter la quantité</v-btn>
        </p>
        <p id="space">
          <v-btn variant="tonal" @click="$emit('moins', aliment)" class="bouton">baisser la quantité</v-btn>
         </p>
      </li>
  </ul>
</template>

<style scoped>

.bouton {
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-left-style: none;
  cursor: pointer;
  flex-grow: 1;
  width: 200px;
  margin: 5px;
}

ul {
  /* afin de retirer les puces de la liste */
  list-style-type: none;
}

</style>