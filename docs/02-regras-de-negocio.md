# 2. Regras de Negócio

As regras de negócio determinam como o sistema deve operar e quais condições precisam ser respeitadas.

| Código | Regra |
|---|---|
| RN01 | O cliente deve possuir cadastro válido para realizar um agendamento, caso o fluxo exija autenticação. |
| RN02 | O e-mail de cadastro deve ser único quando utilizado como identificador de acesso. |
| RN03 | Somente serviços ativos podem ser selecionados para novos agendamentos. |
| RN04 | Um funcionário só pode realizar serviços aos quais esteja associado e habilitado. |
| RN05 | O agendamento deve conter cliente, serviço, profissional, data e horário válidos. |
| RN06 | O horário deve respeitar o expediente e a disponibilidade do profissional. |
| RN07 | Não podem existir dois agendamentos conflitantes para o mesmo profissional. |
| RN08 | A duração do atendimento deve considerar o tempo cadastrado para o serviço. |
| RN09 | O administrador pode cadastrar, editar, ativar e desativar serviços. |
| RN10 | O administrador pode associar funcionários aos serviços que realizam. |
| RN11 | O funcionário deve visualizar somente os dados e agendamentos autorizados para seu perfil. |
| RN12 | Funcionalidades administrativas devem ser acessíveis somente a usuários autorizados. |
| RN13 | Cancelamentos e alterações de agendamento devem respeitar os procedimentos definidos pela barbearia. |
| RN14 | Senhas não podem ser armazenadas em texto puro; devem ser protegidas por hash seguro no servidor. |
| RN15 | A validação de regras críticas deve ocorrer no back-end, não apenas no navegador. |

> As regras RN01 e RN13 podem ser refinadas conforme as decisões finais sobre autenticação, prazo de cancelamento e política comercial.
