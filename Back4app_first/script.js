Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "e2asJAHKYHSt3svhxH75Qy6Rmy9OqNmCLoQxKFZ7", // This is your Application ID
  "alxAOE4Z5fCbBrGYUAvKXKfv4mTPDKckMMA1SRbz" // This is your Javascript key
);

let musgas = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < musgas.length; ++i) {
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Música ${[i+1]}: ${musgas[i].Sons}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

const fetchmusicas = () => {
  const Musicas = Parse.Object.extend("Musicas");
  const query = new Parse.Query(Musicas);
  query
    .find()
    .then((results) => {
      musgas = [];
      for (const object of results) {
        const Sons = object.get("Sons");
        musgas.push({ Sons });
      }
      gerarLista();
    })
    .catch((error) => {
      console.error("Error while fetching Musicas", error);
    });
};

fetchmusicas();