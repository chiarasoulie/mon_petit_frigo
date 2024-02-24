<script setup>

   


</script>

<template>
  <div class="kitchen">
    <div class="fridge">
      <div class="door"></div>
      <div class="poignee_haut"></div>
      <div class="poignee_basse"></div>
      <div class="divider"></div> 
    </div>
    <div class="meubles">
      <div class="meubled"></div>
      <div class="meubleg"></div>
      <div class="hotte"></div>
      <div class="hotte2"></div>
    </div>
  </div>
</template>

<style scoped>
.kitchen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.fridge {
  width: 500px;
  min-height: 700px;
  background-color: gray;
  position: relative;
}

.door {
  width: 10%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
}
.poignee_haut{
  width: 10px;
  height: 110px;
  right:80px;
  background-color: black;
  position: absolute;
  top: 25%;
}
.poignee_basse{
  width: 10px;
  height: 90px;
  right: 80px;
  background-color: black;
  position: absolute;
  top: 60%;
}

.divider {
  width: 100%; /* Largeur du trait de séparation */
  height: 2px; /* Épaisseur du trait */
  background-color: #fff;
  position: absolute;
  top: 50%; /* Pour diviser le frigo en deux parties */
  left: 0;
}
.meubled{
  width: 500px;
  height: 300px;
  right: 10px;
  background-color: rgb(82, 75, 75);
  position:absolute;
  top: 58.75%; 
}

.meubleg{
  width: 400px;
  height: 300px;
  left: 60px;
  background-color: rgb(82, 75, 75);
  position:absolute;
  top: 58.75%; 
}

.hotte{
  width: 50px; /* Largeur de la hotte */
  height: 200px; /* Hauteur de la hotte */
  background-color: silver; /* Couleur de la hotte */
  position: absolute;
  top: 15%; /* Position verticale au centre */
  left: 80%; /* Positionnement à droite du frigo */
  border-radius: 10px; /* Pour arrondir les coins */
}

.hotte2{
  width: 300px; /* Largeur de la hotte */
  height: 20px; /* Hauteur de la hotte */
  background-color: silver; /* Couleur de la hotte */
  position: absolute;
  top: 32%; /* Position verticale au centre */
  left: 72%; /* Positionnement à droite du frigo */
  border-radius: 10px; /* Pour arrondir les coins */
}

</style>