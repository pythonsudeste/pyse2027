# Python Sudeste 2027 — propostas de site

Duas alternativas de design para revisão da equipe, extraídas de `PySE 2027 Page Design.zip`:

- [Página de escolha](https://pythonsudeste.github.io/pyse2027/)
- [Opção 1 — clara](https://pythonsudeste.github.io/pyse2027/opcao-1/): `PySE 2027 Belo Horizonte.dc.html`.
- [Opção 2 — escura](https://pythonsudeste.github.io/pyse2027/opcao-2/): `PySE 2027 Belo Horizonte v2.dc.html`.

As propostas foram convertidas para HTML, CSS e JavaScript estáticos. Os loops e textos do editor foram resolvidos no HTML, sem depender de `support.js`, React ou Babel no navegador. As fontes das propostas são carregadas pelo Google Fonts, com fallback local.

## Desenvolvimento

Com Node.js 22 ou superior e Python 3, sem instalar dependências:

```sh
npm run dev
# http://localhost:5173

npm run build
npm run preview
# http://localhost:4173
```

- `site/index.html`: página de escolha.
- `site/opcao-1/index.html` e `site/opcao-2/index.html`: propostas editáveis.
- `site/assets/`: imagens compartilhadas, estilos e comportamento de revisão.
- `scripts/build.mjs`: copia somente `site/` para `dist/`.

Os caminhos são relativos, permitindo acesso direto e recarga de cada proposta sob `/pyse2027/` ou outro prefixo. Não há roteamento de SPA ou necessidade de redirecionamento de 404.

## Publicação

O workflow `.github/workflows/pages.yml` publica automaticamente os pushes em `main`. Também pode ser executado manualmente em **Actions → Publicar propostas no GitHub Pages → Run workflow**. Em **Settings → Pages**, a origem deve ser **GitHub Actions**.

O artefato publicado contém apenas `dist/`. Não inclui o ZIP, os arquivos da edição 2026 ou configuração de domínio antigo.

## Conteúdo provisório

Os textos, as áreas reservadas para imagens e os dados das propostas foram preservados para revisão. A contagem regressiva usa a data provisória do ZIP (`2027-07-23T09:00:00-03:00`), definida em `site/assets/review.js`; isso não confirma a data do evento. Os botões sem destino exibem um aviso de demonstração. Não há coleta de e-mail, venda de ingressos ou submissão de propostas.

Foram adicionadas uma barra para alternar entre as propostas e adaptações de largura para telas pequenas. O aplicativo de 2026 foi removido; seu histórico continua disponível no Git.
