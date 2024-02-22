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
    <p id="space">
      <button @click="()=>deletea(chose.id)" id="bouton">supprimer</button>
    </p>
    <p id="space">  
     <button @click="()=>plus(chose.id)" id="bouton">augmenter la quantité</button>
    </p>
    <p id="space">
      <button @click="()=>moins(chose.id)" id="bouton">baisser la quantité</button>
    </p>
  </li>
</template>

<style>

#bouton {
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-left-style: none;
  cursor: pointer;
}

ul {
  /* afin de retirer les puces de la liste */
  list-style-type: none;
}
</style>