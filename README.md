# Markdown Previewer

Um visualizador de Markdown simples, elegante e em tempo real, construído com Vite e Vanilla JavaScript.

## 🚀 Funcionalidades

- **Visualização em Tempo Real**: Veja o resultado do seu Markdown instantaneamente enquanto digita.
- **Design Premium**: Interface moderna com tema escuro e efeitos de glassmorphism.
- **Realce de Sintaxe**: Suporte para coloração de código em diversos blocos de linguagem (via `highlight.js`).
- **Segurança**: O HTML gerado é sanitizado para evitar ataques XSS (via `dompurify`).
- **Responsivo**: Funciona bem em desktops e dispositivos móveis.
- **Dockerizado**: Pronto para rodar em containers.

## 🛠️ Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Build tool rápida e leve.
- [Marked](https://marked.js.org/) - Parser de Markdown.
- [DOMPurify](https://github.com/cure53/DOMPurify) - Sanitizador de HTML.
- [Highlight.js](https://highlightjs.org/) - Realce de sintaxe para código.
- [Docker](https://www.docker.com/) - Containerização da aplicação.

## 📦 Como Rodar

### Usando Docker (Recomendado)

Certifique-se de ter o Docker e o Docker Compose instalados.

1. Clone o repositório (se aplicável) ou navegue até a pasta do projeto.
2. Execute o comando:

```bash
docker-compose up -d
```

3. Acesse a aplicação em seu navegador: `http://localhost:8510`

### Rodando Localmente

Você precisará do Node.js instalado (versão 18 ou superior recomendada).

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse o link fornecido no terminal (geralmente `http://localhost:5173`).

## 📝 Estrutura do Projeto

- `index.html`: Estrutura principal da página.
- `src/main.js`: Lógica da aplicação (parsing, sanitização, eventos).
- `src/style.css`: Estilos globais e do tema.
- `Dockerfile` & `docker-compose.yml`: Configurações para containerização.

---

Desenvolvido como um exemplo de aplicação moderna e eficiente.
