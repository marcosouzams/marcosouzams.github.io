# Configuração do GitHub Pages

## Status: ✅ Arquivos enviados com sucesso!

Os arquivos estáticos do seu site Next.js foram gerados e enviados para o GitHub.

## Próximos Passos - Configure o GitHub Pages:

1. Acesse seu repositório no GitHub: https://github.com/marcosouzams/marcosouzams.github.io

2. Vá em **Settings** (Configurações)

3. No menu lateral esquerdo, clique em **Pages**

4. Em **Build and deployment** (Construir e implantar):
   - **Source**: Selecione "Deploy from a branch"
   - **Branch**: Selecione "main"
   - **Folder**: Selecione "/out" (ao invés de "/root")

5. Clique em **Save** (Salvar)

6. Aguarde alguns minutos e seu site estará disponível em:
   https://marcosouzams.github.io

## O que foi feito:

✅ Configurado o Next.js para exportação estática (`output: 'export'`)
✅ Desabilitado otimização de imagens para compatibilidade com GitHub Pages
✅ Criado arquivo `.nojekyll` para evitar processamento Jekyll
✅ Gerado build estático na pasta `/out`
✅ Atualizado `.gitignore` para permitir commit da pasta `/out`
✅ Feito commit e push dos arquivos

## Para futuras atualizações:

Sempre que fizer alterações no código, execute:

```bash
npm run build
cp .nojekyll out/
git add .
git commit -m "Update site"
git push origin main
```

Ou simplesmente use o script de deploy:

```bash
./deploy.sh
```

## Observações:

- **Não é necessário GitHub Actions** (que é pago)
- O site é gerado localmente e os arquivos estáticos são commitados
- O GitHub Pages simplesmente serve os arquivos da pasta `/out`
- Atualizações acontecem automaticamente após o push para `main`
