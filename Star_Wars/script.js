let pessoas = [];
let people = [];
let currentPage = "https://swapi.dev/api/people";
let nextPage = null;

const btFetch = document.getElementById("btFetch");
const listaFetch = document.getElementById("listaFetch");

const liNode = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const cabecalho1 = document.createElement('th');
const cabecalho2 = document.createElement('th');
const cabecalho3 = document.createElement('th');
const cabecalho4 = document.createElement('th');
const cabecalho5 = document.createElement('th');
const cabecalho6 = document.createElement('th');
const cabecalho7 = document.createElement('th');
cabecalho1.innerHTML = "Nome";
cabecalho2.innerHTML = "Ano de nascimento";
cabecalho3.innerHTML = "Altura";
cabecalho4.innerHTML = "Peso";
cabecalho5.innerHTML = "Cor de cabelo";
cabecalho6.innerHTML = "Cor da pele";
cabecalho7.innerHTML = "Gênero";


function exibirListaStarWars() {
  for (let i = 0; i < people.length; ++i) {
    const textNode = document.createTextNode(
      ``
      );
      liNode.appendChild(thead);
      liNode.appendChild(tbody);
      listaFetch.appendChild(liNode);
      const row_1 = document.createElement('tr');
      row_1.appendChild(cabecalho1);
      row_1.appendChild(cabecalho2);
      row_1.appendChild(cabecalho3);
      row_1.appendChild(cabecalho4);
      row_1.appendChild(cabecalho5);
      row_1.appendChild(cabecalho6);
      row_1.appendChild(cabecalho7);
      thead.appendChild(row_1);

      const row_2 = document.createElement('tr');
      const row_2_data_1 = document.createElement('td');
      const row_2_data_2 = document.createElement('td');
      const row_2_data_3 = document.createElement('td');
      const row_2_data_4 = document.createElement('td');
      const row_2_data_5 = document.createElement('td');
      const row_2_data_6 = document.createElement('td');
      const row_2_data_7 = document.createElement('td');

      row_2_data_1.innerHTML=`${people[i].name}`;
      row_2_data_2.innerHTML=`${people[i].birth_year}`
      row_2_data_3.innerHTML=`${people[i].height}`
      row_2_data_4.innerHTML=`${people[i].mass}`
      row_2_data_5.innerHTML=`${people[i].hair_color}`
      row_2_data_6.innerHTML=`${people[i].skin_color}`
      row_2_data_7.innerHTML=`${people[i].gender}`

      row_2.appendChild(row_2_data_1); 
      row_2.appendChild(row_2_data_2);
      row_2.appendChild(row_2_data_3);
      row_2.appendChild(row_2_data_4);
      row_2.appendChild(row_2_data_5);
      row_2.appendChild(row_2_data_6);
      row_2.appendChild(row_2_data_7);
      tbody.appendChild(row_2);
      
  }
}

const fetchStarWarsPeople = () => {
  fetch(currentPage)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      people = data.results;
      nextPage = data.next;
      exibirListaStarWars();
    })
    .catch((err) => {
      console.log("Erro recebido: ", err);
    });
};

const fetchProxPag = () => {
  currentPage = nextPage;
  nextPage = null;
  fetchStarWarsPeople();
};

btFetch.onclick = fetchStarWarsPeople;

exibirLista();
exibirListaStarWars();
