<script setup>
import {onMounted,reactive} from "vue";
import Aliment from '../js/Aliment.js'
import Item from "./Item.vue";
import Form from "./Form.vue";


const listeAliments = reactive([])
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/25/produits"

function listerAliments() {
    let fetchOptions = {
        method: "GET"
    };
    fetch(url, fetchOptions)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON);
        let aliments = dataJSON
        listeAliments.splice(0,listeAliments.length) // pour vider la liste
        dataJSON.forEach((aliment) =>
        listeAliments.push(new Aliment(aliment.id, aliment.nom, aliment.qte, aliment.photo)))
    })
    .catch((error) => {
        console.log(error);
    })
}
onMounted(() => {
        listerAliments();
    });

    function handlerAdd(nom,qte) {
  // -- il faut créer une nouvelle "chsoe" instance de la classe
        console.log(nom, qte);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const fetchOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ nom:nom,qte:qte, photo: photo}),
    };
    fetch(url, fetchOptions)
    .then((reponse) => {
        //console.log(reponse);
        return reponse.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON);
        listerAliments();
    })
    .catch((error) => {
        console.log(error);
    })
}
function handlerDelete(id) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const fetchOptions = {
        method: "DELETE",
    };
    fetch(url +"/" + id, fetchOptions)
    .then((reponse) => {
        return reponse.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON)
        listerAliments()
    })
    .catch((error) => console.log(error));
}

function handler1Add(aliment) {
  console.log(aliment);
  // -- ajouter 1 en quantité en stock
  aliment.add1l();
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(aliment),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des livres
      listerAliments();
    })
    .catch((error) => console.log(error));
}

function handler1Delete(aliment) {
  console.log(aliment);
  if (aliment.qte > 1) {
    // -- soustraire 1 de la quantité en stock
    aliment.delete1();
    // -- entête http pour la req AJAX
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // -- la chose modifiée est envoyé au serveur
    //  via le body de la req AJAX
    const fetchOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(aliment),
    };
    // -- la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        listerAliments();
      })
      .catch((error) => console.log(error));
  } else {
    handlerDelete(aliment.id);
    listerAliments();
  }
}

</script>

<template>
    <Form @adda="handlerAdd"></Form><br>
 
    <Item v-for=" aliment of listeAliments"
      :key="aliment.id"
      :aliment="aliment"
      @deletea="handlerDelete"
      @moins="handler1Delete"
      @plus="handler1Add"
      />


</template>

<style scoped>

</style>