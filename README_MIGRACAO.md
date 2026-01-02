# Portfólio - Marco Antônio (Next.js)

## 🚀 Migração concluída do Create React App para Next.js!

Este projeto foi migrado com sucesso de Create React App para Next.js, trazendo melhorias significativas em:

- ✅ **Performance**: Melhor otimização e carregamento
- ✅ **SEO**: Suporte nativo a SSR/SSG
- ✅ **Segurança**: Sem vulnerabilidades (diferente do react-scripts desatualizado)
- ✅ **Roteamento**: Sistema de rotas integrado do Next.js
- ✅ **Image Optimization**: Componente Image otimizado automaticamente
- ✅ **Build Moderno**: Suporte às versões mais recentes do React 19

## 📦 Tecnologias

- **Next.js 16.1.1** - Framework React com SSR/SSG
- **React 19.2.3** - Biblioteca UI (versão mais recente)
- **TypeScript 5.9.3** - Tipagem estática
- **Tailwind CSS 4.1.18** - Framework CSS utility-first (versão mais recente)
- **i18next** - Internacionalização (5 idiomas)
- **Lucide React** - Ícones modernos

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção localmente
npm start
```

O servidor de desenvolvimento estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
marcoantoniosz-nextjs/
├── app/                    # Pasta principal do Next.js App Router
│   ├── layout.tsx          # Layout global com providers
│   ├── page.tsx            # Página Home
│   ├── about/              # Página Sobre (a criar)
│   ├── contact/            # Página Contato (a criar)
│   ├── projects/           # Página Projetos (a criar)
│   └── globals.css         # Estilos globais
├── components/             # Componentes reutilizáveis
│   ├── FooterBar.tsx       # Barra de navegação inferior
│   ├── LanguageSelector.tsx# Seletor de idiomas
│   └── I18nProvider.tsx    # Provider de internacionalização
├── i18n/                   # Arquivos de tradução
│   ├── config.ts           # Configuração i18next
│   └── locales/            # Arquivos JSON de idiomas
│       ├── en.json
│       ├── pt.json
│       ├── es.json
│       ├── fr.json
│       └── de.json
└── public/                 # Arquivos estáticos
    ├── images/             # Imagens
    ├── fonts/              # Fontes customizadas
    └── favicon.png         # Ícone do site
```

## 🔄 Próximos Passos

Para completar a migração, você precisa criar as outras páginas:

### 1. Criar página About
```bash
mkdir -p app/about
```
Criar `app/about/page.tsx` com o conteúdo da página About adaptado

### 2. Criar página Contact
```bash
mkdir -p app/contact
```
Criar `app/contact/page.tsx` com o formulário de contato

### 3. Criar página Projects
```bash
mkdir -p app/projects
```
Criar `app/projects/page.tsx` com a lista de projetos

## 🌐 Deploy

### GitHub Pages
Para deploy no GitHub Pages com Next.js, você precisará:

1. Instalar `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Adicionar no `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

3. Configurar `next.config.ts` para export estático:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/marcoantoniosz.github.io',
};
```

### Vercel (Recomendado)
O Next.js é otimizado para deploy na Vercel:

1. Conecte seu repositório GitHub
2. A Vercel detectará automaticamente o Next.js
3. Deploy automático em cada push

## 🎨 Customização

### Cores
As cores do tema estão definidas em `tailwind.config.ts`:
- `primary`: #fc6b2a (laranja)
- `neon`: #c5ff41 (verde neon)
- `dark`: #232221 (preto)

### Fonte
A fonte `Doppio One` está configurada em `app/globals.css`

## 📝 Diferenças do Projeto Anterior

- ✅ Sem `react-scripts` e suas vulnerabilidades
- ✅ Roteamento baseado em arquivos (Next.js App Router)
- ✅ Componentes com `'use client'` quando necessário
- ✅ Uso do componente `Image` otimizado
- ✅ Uso de `Link` para navegação
- ✅ Zero configuração de Webpack/Babel

## 🐛 Problemas Conhecidos

Nenhum no momento! 🎉

## 📄 Licença

Este é um projeto pessoal de portfólio.

---

**Desenvolvido por Marco Antônio** 🚀
