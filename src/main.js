import './style.css'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css' // Import highlight.js style

// Configure marked to use highlight.js
marked.setOptions({
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  breaks: true, // Enable line breaks
  gfm: true // Enable GitHub Flavored Markdown
});

const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');

const defaultMarkdown = `# Bem-vindo ao Markdown Preview!

Comece a digitar no editor para ver suas alterações renderizadas em tempo real.

## Recursos
- **Pré-visualização em tempo real**: Veja as alterações enquanto digita.
- **Realce de sintaxe**: Blocos de código são realçados automaticamente.
- **Compatível com GitHub**: Suporta recursos do GFM, como tabelas e listas de tarefas.

### Exemplo de código
\`\`\`javascript
function hello() {
  console.log("Olá, Mundo!");
}
\`\`\`

### Listas
1. Lista ordenada
2. Outro item
   - Sublista não ordenada
   - Outro subitem

> "A melhor maneira de prever o futuro é inventá-lo." - Alan Kay

[Exemplo de Link](https://www.google.com)

Boa escrita!
`;

const render = () => {
  const markdown = editor.value;
  const rawHtml = marked.parse(markdown);
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  preview.innerHTML = cleanHtml;
};

// Initial render
editor.value = defaultMarkdown;
render();

// Event listener
editor.addEventListener('input', render);

