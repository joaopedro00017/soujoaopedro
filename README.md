# Portfólio – João Pedro (Next.js + Tailwind CSS)

Versão Next.js 14 + Tailwind CSS 3 do portfólio.

## Estrutura do projeto

```
portifolio-nextjs/
├── app/
│   ├── layout.tsx          ← layout raiz (fonte, metadata)
│   ├── globals.css         ← Tailwind + animação flutuar
│   ├── page.tsx            ← Página Home (/)
│   ├── projetos/
│   │   └── page.tsx        ← Página de Projetos (/projetos)
│   └── obrigado/
│       └── page.tsx        ← Página de agradecimento (/obrigado)
├── components/
│   ├── Header.tsx          ← Header responsivo com menu mobile
│   ├── Footer.tsx          ← Rodapé
│   └── ContatoForm.tsx     ← Formulário (reutilizado nas duas páginas)
├── public/
│   └── images/             ← ⚠️ Copie aqui todas as suas imagens!
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🚀 Como rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Copiar as imagens
Copie todos os arquivos da pasta `images/` do projeto original para `public/images/`:
```
public/images/Logo_JP_Oficial.png
public/images/Logo_JP_Oficial_branca.png
public/images/JPFOTO01.png
public/images/laptop-svgrepo-com.svg
public/images/favicon.svg
public/images/projeto_ballon_dor.png
public/images/projeto_frase_biblica.png
public/images/projeto_senai.png
public/images/projeto_calculadora.png
public/images/projeto_to-do-list.png
public/images/projeto_cadastro.png
```

### 3. Rodar em desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### 4. Build para produção
```bash
npm run build
```

## ⚠️ URL de redirecionamento do formulário

Em `components/ContatoForm.tsx`, atualize o `redirectUrl` com a URL do seu deploy:

```tsx
// Exemplo para Vercel:
<ContatoForm redirectUrl="https://seu-dominio.vercel.app/obrigado" />

// Exemplo para GitHub Pages:
<ContatoForm redirectUrl="https://joaopedro00017.github.io/portifolio-nextjs/obrigado" />
```

## O que foi convertido

| Original              | Next.js                              |
|-----------------------|--------------------------------------|
| `index.html`          | `app/page.tsx`                       |
| `html/projetos.html`  | `app/projetos/page.tsx`              |
| `html/tanks.html`     | `app/obrigado/page.tsx`              |
| `css/style.css`       | Tailwind classes inline              |
| `css/projeto.css`     | Tailwind classes inline              |
| `css/tanks.css`       | Tailwind classes inline              |
| `js/menu.js`          | `useState` em `components/Header.tsx`|
| Bootstrap Icons (CDN) | `react-icons/bs`                     |
| Google Fonts (CDN)    | `next/font/google`                   |
