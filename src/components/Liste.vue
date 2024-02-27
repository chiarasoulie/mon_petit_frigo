<script setup>
import {onMounted,reactive} from "vue";
import Aliment from '../js/Aliment.js'
import Item from "./Item.vue";
import Form from "./Form.vue";
import Recherche from "./Recherche.vue";


const listeAliments = reactive([])
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/25/produits"
let nom = ""
let photo= ""
let qte=1
let id = ""

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
  // -- il faut créer une nouvelle  instance de la classe
       // console.log(nom, qte);
       if (qte < 1) {
        alert("Veuillez saisir une quantité valide");
    }
    else if (nom.length == 0) {
        alert("Veuillez saisir le type d'aliment");
    }
    else if (qte.length == 0) {
        alert("Veuillez saisir une quantité");
    } else {
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
  let id = aliment.id;
  let nom = aliment.nom;
  let qte = aliment.qte+1;
  let photo = aliment.photo; 

  let myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json"); 
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id: id, nom: nom, qte: qte, photo:  photo}),
  };

  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     listerAliments(); 
  })
    .catch((error) => console.log(error));
}

function handler1Delete(aliment) {
  console.log(aliment); 
  let id = aliment.id;
  let nom = aliment.nom;
  let qte = aliment.qte-1;
  let photo = aliment.photo; 

  if(qte >0){
    let myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json"); 
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id: id, nom: nom, qte: qte, photo:  photo}),
  };

  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     listerAliments(); 
  })
    .catch((error) => console.log(error));

  }else{
    handlerDelete(id);
  }
}

function handlerSearch(motcle) {
  /* on récupère le mot clé nécessaire à la recherche */
  const fetchOptions = { method: "GET" };

  fetch(url + "?search=" + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      let alimentsTrouves = dataJSON;
      document.getElementById("recherche").innerHTML += "<ul>";
      /* on insère de l'html pour créer une liste d'aliments  correspondant au critère*/
      for (let a of alimentsTrouves) {
        /* pour chaque livres, on récupère ses attributs et on l'incère dans l'html */
        document.getElementById("recherche").innerHTML +=
          "<li>" +
          a.nom +
          " quantité : " +
          a.qte +
          "</li>";
      }
      /* on oublie pas de fermer la liste */
      document.getElementById("recherche").innerHTML += "</ul>";
    })
    .catch((error) => console.log(error));
}
</script>

<template>
  <body>
    <h2>
      Liste d'aliments dans le frigo
    </h2><br>
    <Item v-for=" aliment of listeAliments"
      :key="aliment.id"
      :aliment="aliment"
      @deletea="handlerDelete"
      @moins="handler1Delete"
      @plus="handler1Add"
      /><br>
    <h2>Rechercher un aliment</h2><br>
    <Recherche @searchl="handlerSearch"></Recherche><br>
    <h2>Ajouter un aliment</h2><br>
    <Form @adda="handlerAdd"></Form>
  </body>
  
</template>

<style scoped>


</style>