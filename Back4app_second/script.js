Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'e2asJAHKYHSt3svhxH75Qy6Rmy9OqNmCLoQxKFZ7', // This is your Application ID
  'alxAOE4Z5fCbBrGYUAvKXKfv4mTPDKckMMA1SRbz' // This is your Javascript key
);


let tarefasn = [];
const div = document.getElementById("div");
const input_tarefa = document.getElementById("input_tarefa");
const insert_button = document.getElementById("insert");

const criar_lista = async () => {
  div.innerHTML = "";
  for (let i = 0; i < tarefasn.length; ++i) {
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `${tarefasn[i].get("descricao")} `
    );
    txt.id= "txt";
    const check = document.createElement("input");
      check.type = "checkbox";
      check.id = "check";
      check.checked = tarefasn[i].get("status");
      check.onclick = (evt1) => check_tarefa(evt1, tarefasn[i], txt);
      const remove_button = document.createElement("button");
      remove_button.innerHTML = 'remover';
      remove_button.id = "remove_button";
      remove_button.onclick = (evt2) => remover_tarefa(evt2, tarefasn[i]);
    li.appendChild(check);
    li.appendChild(txt);
    div.appendChild(li);
    li.appendChild(remove_button);
  }
  }
  

const dados_lista = async () => {
  const Tarefas = Parse.Object.extend('Tarefas');
  const query = new Parse.Query(Tarefas);
  try {
    const results = await query.find();
    tarefasn = results;
    criar_lista();
  } catch (error) {
      console.error('Error while fetching Tarefa', error);
  }
};

const inserir = async () => {
  if(input_tarefa.value == null || input_tarefa.value == ""){
    alert("Descrição vazia!")
    inserir.stop
  }
  else{
  const Tarefas = new Parse.Object('Tarefas');
  Tarefas.set('descricao', input_tarefa.value);
  Tarefas.set('status', false);
  input_tarefa.value = "";
  input_tarefa.focus();
  try {
    const result = await Tarefas.save();
    console.log('Tarefas created', result);
    dados_lista();
  } catch (error) {
    console.error('Error while creating Tarefas: ', error);
  }
}};

const remover_tarefa = async (evt2, tarefa) => {
    tarefa.set(evt2.target.remove);
    try {
      const response = await tarefa.destroy();
      console.log('Delet ParseObject', response);
      dados_lista();
    } catch (error) {
      console.error('Error while updating Tarefa', error);
    }
  };

const check_tarefa = async (evt1, tarefa, txt) => {
  tarefa.set('status', evt1.target.checked);
  try {
    const response = await tarefa.save();
    console.log(response.get('status'));
    console.log('Tarefa updated', response)
  } catch (error) {
    console.error('Error while updating Tarefa', error);
  }
};

insert_button.onclick = inserir;
dados_lista();
criar_lista();