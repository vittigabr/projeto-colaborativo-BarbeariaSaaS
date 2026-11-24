# 4. Requisitos Não Funcionais

Requisitos não funcionais definem **como o sistema deve funcionar**, incluindo qualidade, segurança e restrições técnicas.

| Código | Requisito | Critério de verificação |
|---|---|---|
| RNF01 | A interface deve ser responsiva. | Testar em celular, tablet e desktop. |
| RNF02 | A navegação deve ser clara e consistente. | Usuário consegue localizar serviços e agendamento sem caminhos confusos. |
| RNF03 | O sistema deve validar entradas. | Campos obrigatórios e formatos inválidos são tratados com mensagens. |
| RNF04 | Dados privados devem ser protegidos. | Não exibir dados de outros clientes nem credenciais. |
| RNF05 | Senhas devem ser armazenadas com hash seguro. | Verificar implementação no servidor. |
| RNF06 | O acesso a áreas restritas deve usar autenticação e autorização. | Testar acesso com perfis diferentes. |
| RNF07 | O sistema deve manter integridade dos dados. | Chaves e restrições do banco impedem referências inválidas. |
| RNF08 | O código deve ser organizado e documentado. | Arquivos separados por responsabilidade e instruções de execução disponíveis. |
| RNF09 | O projeto deve utilizar controle de versão. | Histórico de commits e branches no GitHub. |
| RNF10 | A aplicação deve apresentar feedback para operações. | Mensagens claras de sucesso, erro ou carregamento. |
| RNF11 | O sistema deve evitar agendamentos duplicados/conflitantes. | Teste de concorrência e validação transacional no servidor. |
| RNF12 | O sistema deve ser compatível com navegadores modernos. | Testes nos navegadores definidos pela equipe. |
