# 3. Requisitos Funcionais

Requisitos funcionais descrevem **o que o sistema deve fazer**.

| Código | Requisito | Prioridade | Situação |
|---|---|---|---|
| RF01 | O sistema deve apresentar a página inicial e informações da barbearia. | Alta | Front-end |
| RF02 | O sistema deve listar os serviços disponíveis. | Alta | Front-end / validar |
| RF03 | O sistema deve apresentar detalhes de um serviço, como descrição, duração e preço. | Alta | A implementar/validar |
| RF04 | O sistema deve permitir o cadastro de cliente com nome, sobrenome, e-mail e telefone. | Alta | Planejado/integrar |
| RF05 | O sistema deve permitir autenticação de usuários. | Alta | Planejado/integrar |
| RF06 | O sistema deve permitir selecionar serviço, profissional, data e horário. | Alta | Planejado |
| RF07 | O sistema deve verificar disponibilidade antes de confirmar a reserva. | Alta | Back-end |
| RF08 | O sistema deve registrar e armazenar o agendamento. | Alta | Back-end/MySQL |
| RF09 | O cliente deve consultar seus agendamentos. | Média | Planejado |
| RF10 | O funcionário deve visualizar sua agenda diária. | Alta | Planejado |
| RF11 | O administrador deve cadastrar e editar serviços. | Alta | Planejado |
| RF12 | O administrador deve cadastrar e gerenciar funcionários. | Alta | Planejado |
| RF13 | O administrador deve associar funcionários aos serviços. | Alta | Planejado |
| RF14 | O administrador deve consultar e gerenciar agendamentos. | Média | Planejado |
| RF15 | O sistema deve permitir atualização de status do atendimento por perfil autorizado. | Média | Planejado |

## 3.1 Atores e permissões

- **Visitante:** acessa páginas públicas e consulta informações disponíveis.
- **Cliente autenticado:** gerencia seus dados e seus próprios agendamentos.
- **Funcionário:** consulta agenda e dados necessários aos atendimentos autorizados.
- **Administrador:** gerencia serviços, funcionários e agenda.

A autorização deve ser verificada pelo servidor em cada operação protegida.
