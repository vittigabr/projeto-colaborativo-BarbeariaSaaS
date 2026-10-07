const agendamentos = [
  {
    id: 1,
    horario: "09:00",
    cliente: "João Silva",
    servico: "Corte masculino",
    status: "confirmado",
  },
  {
    id: 2,
    horario: "10:00",
    cliente: "Pedro Souza",
    servico: "Barba",
    status: "pendente",
  },
  {
    id: 3,
    horario: "11:00",
    cliente: "Maria Santos",
    servico: "Corte + Barba",
    status: "confirmado",
  },
  {
    id: 4,
    horario: "13:30",
    cliente: "Lucas Oliveira",
    servico: "Corte masculino",
    status: "concluido",
  },
];

const listaAgenda = document.getElementById("listaAgenda");
const agendaCompleta = document.getElementById("agendaCompleta");

function criarAgendamento(item) {
  const div = document.createElement("div");
  div.className = "agendamento";
  div.innerHTML = `<span class="hora">${item.horario}</span>
    <div class="cliente">
        <strong>${item.cliente}</strong><span>${item.servico}</span></div>
        <div>
            <span class="status ${item.status}">${item.status}</span>
            <div class="acoes">
                ${item.status === "pendente" ? `<button data-id="${item.id}" data-action="confirmar">Confirmar</button>` : ""}
                ${item.status === "confirmado" ? `<button data-id="${item.id}" data-action="concluir">Concluir</button>` : ""}
        </div>
    </div>`;

  return div;
}

function renderizar() {
  listaAgenda.innerHTML = "";
  agendaCompleta.innerHTML = "";

  agendamentos.forEach((item) => {
    listaAgenda.appendChild(criarAgendamento(item));
    agendaCompleta.appendChild(criarAgendamento(item));
  });

  document.getElementById("totalAtendimentos").textContent =
    agendamentos.length;
  document.getElementById("totalConfirmados").textContent =
    agendamentos.filter((x) => x.status === "confirmado").length;
  document.getElementById("totalPendentes").textContent =
    agendamentos.filter((x) => x.status === "pendente").length;

  const proximo = agendamentos.find((x) => x.status !== "concluido");
  document.getElementById("proximoTexto").textContent = proximo
    ? `${proximo.horario} — ${proximo.cliente} — ${proximo.servico}`
    : "Nenhum atendimento restante hoje.";

  if (proximo) {
    const status = document.getElementById("proximoStatus");
    status.textContent = proximo.status;
    status.className = `status ${proximo.status}`;
  }
}

document.querySelectorAll(".nav-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
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

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const item = agendamentos.find((x) => x.id === Number(btn.dataset.id));
  if (!item) return;

  if (btn.dataset.action === "confirmar") item.status = "confirmado";
  if (btn.dataset.action === "concluir") item.status = "concluido";

  renderizar();
});

const hoje = new Date();
document.getElementById("dataHoje").textContent = hoje.toLocaleDateString(
  "pt-BR",
  { day: "2-digit", month: "short" },
);

renderizar();