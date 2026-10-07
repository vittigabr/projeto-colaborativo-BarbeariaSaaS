const agendamentos = [
  {
    horario: "09:00",
    cliente: "João Silva",
    funcionario: "Carlos Souza",
    servico: "Corte",
    status: "Confirmado",
  },
  {
    horario: "10:00",
    cliente: "Pedro Souza",
    funcionario: "João Lima",
    servico: "Barba",
    status: "Pendente",
  },
  {
    horario: "11:00",
    cliente: "Maria Santos",
    funcionario: "Carlos Souza",
    servico: "Corte + Barba",
    status: "Confirmado",
  },
  {
    horario: "13:30",
    cliente: "Lucas Oliveira",
    funcionario: "Pedro Alves",
    servico: "Corte",
    status: "Confirmado",
  },
];
const funcionarios = [
  { id: 1, nome: "Carlos Souza", email: "carlos@email.com", servico: "Corte" },
  { id: 2, nome: "João Lima", email: "joao@email.com", servico: "Barba" },
  {
    id: 3,
    nome: "Pedro Alves",
    email: "pedro@email.com",
    servico: "Corte + Barba",
  },
];
const servicos = [
  { id: 1, nome: "Corte masculino", preco: 35, duracao: "30 min" },
  { id: 2, nome: "Barba", preco: 25, duracao: "20 min" },
  { id: 3, nome: "Corte + Barba", preco: 50, duracao: "50 min" },
];

function agendaHTML(x) {
  return `<div class="agendamento"><span class="hora">${x.horario}</span><div class="cliente"><strong>${x.cliente}</strong><span>${x.servico} · ${x.funcionario}</span></div><span class="status">${x.status}</span></div>`;
}
function renderizar() {
  document.getElementById("resumoAgenda").innerHTML = agendamentos
    .map(agendaHTML)
    .join("");
  document.getElementById("agendaCompleta").innerHTML = agendamentos
    .map(agendaHTML)
    .join("");
  document.getElementById("resumoFuncionarios").innerHTML = funcionarios
    .map(
      (x) =>
        `<div class="employee"><div><strong>${x.nome}</strong><span>${x.servico}</span></div><small>${x.email}</small></div>`,
    )
    .join("");
  document.getElementById("funcionariosLista").innerHTML = funcionarios
    .map(
      (x) =>
        `<div class="table-row"><div><strong>${x.nome}</strong><span>${x.email}</span></div><span>${x.servico}</span><span>08:00 — 18:00</span><button>Editar</button></div>`,
    )
    .join("");
  document.getElementById("servicosLista").innerHTML = servicos
    .map(
      (x) =>
        `<article class="service"><h3>${x.nome}</h3><p>Serviço oferecido pela barbearia.</p><div class="service-info"><strong>R$ ${x.preco.toFixed(2).replace(".", ",")}</strong><span>${x.duracao}</span></div></article>`,
    )
    .join("");
  document.getElementById("totalAgendamentos").textContent =
    agendamentos.length;
  document.getElementById("totalServicos").textContent = servicos.length;
}
document.querySelectorAll(".nav-btn").forEach(
  (btn) =>
    (btn.onclick = () => {
      document
        .querySelectorAll(".nav-btn")
        .forEach((x) => x.classList.remove("active"));
      document
        .querySelectorAll(".section")
        .forEach((x) => x.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.section).classList.add("active");
    }),
);
const modal = document.getElementById("modal"),
  tipo = { value: "" };
function abrir(t) {
  tipo.value = t;
  modal.classList.add("active");
  document.getElementById("modalTitulo").textContent =
    t === "funcionario" ? "Novo funcionário" : "Novo serviço";
  document.getElementById("campoExtraLabel").firstChild.textContent =
    t === "funcionario" ? "Serviço" : "Preço";
  document.getElementById("campoExtra").placeholder =
    t === "funcionario" ? "Ex.: Corte masculino" : "Ex.: 35";
  document.getElementById("campoNome").value = "";
  document.getElementById("campoExtra").value = "";
  document.getElementById("campoNome").focus();
}
document.getElementById("novoFuncionario").onclick = () => abrir("funcionario");

document.getElementById("novoServico").onclick = () => abrir("servico");

document.getElementById("fecharModal").onclick = () =>
  modal.classList.remove("active");

document.getElementById("modalForm").onsubmit = (e) => {
  e.preventDefault();
  const nome = document.getElementById("campoNome").value,
    extra = document.getElementById("campoExtra").value;
  if (tipo.value === "funcionario")
    funcionarios.push({
      id: Date.now(),
      nome,
      email: "novo@email.com",
      servico: extra,
    });
  else
    servicos.push({
      id: Date.now(),
      nome,
      preco: Number(extra) || 0,
      duracao: "30 min",
    });
  modal.classList.remove("active");
  renderizar();
};

document.getElementById("btnSair").onclick = () =>
  alert("Aqui você poderá redirecionar para o login.");

document.getElementById("dataHoje").textContent = new Date().toLocaleDateString(
  "pt-BR",
  { day: "2-digit", month: "short" },
);

renderizar();
