# 5. Hierarquia de Pastas

A estrutura abaixo é uma **proposta recomendada de organização**. Como a estrutura atual do repositório pode mudar, compare-a com as pastas existentes e ajuste os nomes antes de documentar como estrutura definitiva.

```text
projeto-colaborativo-BarbeariaSaaS/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── styleGeral.css
│   └── [estilos específicos das páginas]
├── js/
│   ├── [scripts de interface]
│   └── [módulos reutilizáveis]
├── pages/
│   ├── [páginas públicas e do cliente]
│   ├── [área do funcionário - futura]
│   └── [área administrativa - futura]
├── docs/
│   ├── README.md
│   ├── 01-visao-geral.md
│   ├── 02-regras-de-negocio.md
│   ├── 03-requisitos-funcionais.md
│   ├── 04-requisitos-nao-funcionais.md
│   ├── 05-hierarquia-de-pastas.md
│   ├── 06-banco-de-dados.md
│   ├── 07-telas-do-sistema.md
│   └── imagens/
├── README.md
└── [arquivos de configuração, se existentes]
```

## Responsabilidade das pastas

- `assets/`: imagens, ícones e fontes utilizadas na interface.
- `css/`: folhas de estilo.
- `js/`: scripts e módulos JavaScript.
- `pages/`: páginas HTML organizadas por área.
- `docs/`: documentação técnica e de requisitos.
- `README.md`: apresentação inicial do repositório e instruções resumidas.

## Recomendações

- Evitar duplicar regras CSS comuns; centralizar estilos compartilhados em `styleGeral.css`.
- Utilizar nomes de arquivos claros e consistentes.
- Separar arquivos de cliente, funcionário e administrador conforme a aplicação crescer.
- Não colocar senhas, tokens ou credenciais dentro do front-end ou no repositório.
