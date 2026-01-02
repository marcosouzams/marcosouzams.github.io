# Configuração do GitHub Pages

## ✅ Configurações Aplicadas

Este projeto está configurado para funcionar com GitHub Pages usando Next.js com exportação estática.

### Arquivos Modificados:

1. **next.config.ts** - Configurado para exportação estática
2. **package.json** - Adicionado script de export
3. **.github/workflows/deploy.yml** - Workflow do GitHub Actions para deploy automático
4. **public/.nojekyll** - Arquivo necessário para o GitHub Pages

## 🚀 Próximos Passos

### 1. Configurar o GitHub Pages no Repositório

1. Faça commit e push das alterações:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. Acesse as configurações do seu repositório no GitHub:
   - Vá para **Settings** > **Pages**
   - Em **Source**, selecione **GitHub Actions**
   - O deploy será feito automaticamente após cada push na branch `main`

### 2. Verificar o Branch Correto

Se sua branch principal não for `main`, edite o arquivo `.github/workflows/deploy.yml` e altere:
```yaml
on:
  push:
    branches:
      - main  # Altere para o nome da sua branch (ex: master)
```

### 3. BasePath (se necessário)

**Importante**: Se o seu repositório **NÃO** for `username.github.io`, você precisa descomentar e configurar o basePath no `next.config.ts`:

```typescript
basePath: '/nome-do-repositorio',
```

Como seu repositório é `marcoantoniosz.github.io`, **não é necessário** configurar o basePath.

## 🧪 Testar Localmente

Para testar a build estática localmente:

```bash
npm run build
```

Os arquivos serão gerados na pasta `out/`. Você pode testar localmente com:

```bash
npx serve out
```

## 📝 Observações

- A pasta `out/` está no `.gitignore` e não deve ser commitada
- O GitHub Actions fará o build e deploy automaticamente
- As imagens estão configuradas como `unoptimized: true` (necessário para exportação estática)
- O arquivo `.nojekyll` evita processamento Jekyll no GitHub Pages

## 🔍 Troubleshooting

Se houver problemas:

1. Verifique os logs do GitHub Actions na aba **Actions** do repositório
2. Certifique-se de que as permissões do GitHub Pages estão corretas
3. Aguarde alguns minutos após o deploy para o site ficar disponível
4. Limpe o cache do navegador se não ver as mudanças

## 🌐 URL do Site

Após o deploy, seu site estará disponível em:
- `https://marcoantoniosz.github.io`
