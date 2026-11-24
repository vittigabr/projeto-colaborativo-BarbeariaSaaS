# 6. Banco de Dados

## 6.1 SGBD

O sistema prevê o uso do **MySQL**, um sistema gerenciador de banco de dados relacional. Os dados são organizados em tabelas relacionadas por chaves primárias e estrangeiras.

## 6.2 Normalização

A normalização organiza os dados para reduzir repetição e evitar anomalias de inserção, atualização e exclusão.

### Primeira Forma Normal (1FN)

Cada coluna deve conter um único valor por registro, sem listas ou grupos repetidos. Por exemplo, os telefones ou serviços de um funcionário não devem ser armazenados como uma lista separada por vírgulas na mesma coluna.

### Segunda Forma Normal (2FN)

A tabela deve estar na 1FN e cada atributo não-chave deve depender da chave primária completa. Na tabela associativa `funcionario_servico`, a associação é identificada pela chave composta `(id_funcionario, id_servico)`; não se devem armazenar nela dados descritivos que dependam apenas de um dos IDs.

### Terceira Forma Normal (3FN)

A tabela deve estar na 2FN e os atributos não-chave não devem depender de outros atributos não-chave. Por exemplo, o nome do serviço fica na tabela `servico`, e não é repetido em cada agendamento; o agendamento referencia `id_servico`.

## 6.3 Tabelas propostas

> Modelo lógico inicial. Tipos, nomes e campos devem ser compatibilizados com o script SQL efetivamente adotado pela equipe.

### Tabela `usuario`

| Campo | Tipo sugerido | Chave / regra |
|---|---|---|
| id_usuario | INT | PK, AUTO_INCREMENT |
| nome | VARCHAR(80) | NOT NULL |
| sobrenome | VARCHAR(100) | NOT NULL |
| email | VARCHAR(150) | UNIQUE, NOT NULL |
| telefone | VARCHAR(20) | — |
| senha_hash | VARCHAR(255) | Para autenticação local |
| perfil | VARCHAR(20) | Papel/perfil de acesso |

**Descrição:** guarda os dados comuns de identificação e acesso. A senha deve ser armazenada somente como hash.

### Tabela `funcionario`

| Campo | Tipo sugerido | Chave / regra |
|---|---|---|
| id_funcionario | INT | PK, AUTO_INCREMENT |
| id_usuario | INT | FK → usuario.id_usuario, UNIQUE |
| hora_entrada | TIME | — |
| hora_saida | TIME | — |
| ativo | BOOLEAN | — |

**Descrição:** complementa os dados do usuário que possui perfil de funcionário, evitando duplicar nome, e-mail e telefone.

### Tabela `servico`

| Campo | Tipo sugerido | Chave / regra |
|---|---|---|
| id_servico | INT | PK, AUTO_INCREMENT |
| nome | VARCHAR(100) | NOT NULL |
| descricao | TEXT | — |
| duracao_minutos | INT | Maior que zero |
| preco | DECIMAL(10,2) | Não negativo |
| ativo | BOOLEAN | — |

**Descrição:** catálogo dos serviços oferecidos pela barbearia.

### Tabela `funcionario_servico`

| Campo | Tipo sugerido | Chave / regra |
|---|---|---|
| id_funcionario | INT | PK composta; FK |
| id_servico | INT | PK composta; FK |

**Descrição:** tabela associativa que resolve o relacionamento muitos-para-muitos. Um profissional pode executar vários serviços e um serviço pode ser executado por vários profissionais.

### Tabela `agendamento`

| Campo | Tipo sugerido | Chave / regra |
|---|---|---|
| id_agendamento | INT | PK, AUTO_INCREMENT |
| id_cliente | INT | FK → usuario.id_usuario |
| id_funcionario | INT | FK → funcionario.id_funcionario |
| id_servico | INT | FK → servico.id_servico |
| data_hora_inicio | DATETIME | NOT NULL |
| data_hora_fim | DATETIME | NOT NULL |
| status | VARCHAR(20) | Estado do atendimento |
| preco_no_agendamento | DECIMAL(10,2) | Valor registrado na reserva |
| criado_em | TIMESTAMP | Registro de criação |

**Descrição:** registra cada reserva e relaciona cliente, profissional e serviço. Guardar o preço aplicado no momento da reserva preserva o histórico mesmo que o catálogo seja alterado.

## 6.4 Relacionamentos

```text
usuario 1 ─── 0..1 funcionario
usuario (cliente) 1 ─── N agendamento
funcionario 1 ─── N agendamento
servico 1 ─── N agendamento
funcionario N ─── N servico
                  │
          funcionario_servico
```

## 6.5 Cuidados de integridade

- Criar chaves estrangeiras para os relacionamentos.
- Validar duração e preço.
- Verificar disponibilidade no servidor antes de confirmar.
- Utilizar transação ao gravar o agendamento.
- Definir política de exclusão; para histórico, preferir inativar serviços e usuários quando apropriado.
- Evitar armazenar dados desnecessários ou sensíveis.
