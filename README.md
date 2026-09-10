# Python Sudeste 2027 — propostas de site

Duas alternativas extraídas de `PySE 2027 Page Design.zip` e um estudo de fotos. O time escolheu o design da opção 2:

- [Página de escolha](https://pythonsudeste.github.io/pyse2027/)
- [Opção 1 — clara](https://pythonsudeste.github.io/pyse2027/opcao-1/): `PySE 2027 Belo Horizonte.dc.html`.
- [Opção 2 — escura](https://pythonsudeste.github.io/pyse2027/opcao-2/): `PySE 2027 Belo Horizonte v2.dc.html`.
- [Opção 3 — fotos na seção Sobre](https://pythonsudeste.github.io/pyse2027/opcao-3/#sobre): variações sobre o design escolhido.

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
- `site/opcao-3/index.html`: página baseada na opção 2, com quatro apresentações de fotos.
- `site/assets/gallery.css` e `site/assets/gallery.js`: estilos e interações exclusivas do estudo.
- `site/assets/`: imagens compartilhadas, estilos e comportamento de revisão.
- `scripts/build.mjs`: copia somente `site/` para `dist/`.

Os caminhos são relativos, permitindo acesso direto e recarga de cada proposta sob `/pyse2027/` ou outro prefixo. Não há roteamento de SPA ou necessidade de redirecionamento de 404.

## Publicação

O workflow `.github/workflows/pages.yml` publica automaticamente os pushes em `main`. Também pode ser executado manualmente em **Actions → Publicar propostas no GitHub Pages → Run workflow**. Em **Settings → Pages**, a origem deve ser **GitHub Actions**.

O artefato publicado contém apenas `dist/`. Não inclui o ZIP, os arquivos da edição 2026 ou configuração de domínio antigo.

## Conteúdo provisório

Os textos, as áreas reservadas para imagens e os dados das propostas foram preservados para revisão. A contagem regressiva usa a data provisória do ZIP (`2027-07-23T09:00:00-03:00`), definida em `site/assets/review.js`; isso não confirma a data do evento. Os botões sem destino exibem um aviso de demonstração. Não há coleta de e-mail, venda de ingressos ou submissão de propostas.

Foram adicionadas uma barra para alternar entre as propostas e adaptações de largura para telas pequenas. O aplicativo de 2026 foi removido; seu histórico continua disponível no Git.

## Estudo de fotos — opção 3

A seção mantém o título, os dois parágrafos e a identidade da opção 2. O texto recebeu apenas a frase “É um encontro de pessoas que aprendem juntas, trocam experiências e constroem comunidade.”, também aplicada na opção 2. O selo “pessoas > tecnologia” acompanha o título nas quatro composições.

As fotos fazem parte da composição do próprio Sobre. A página mostra as quatro variantes em sequência por padrão. Cada uma tem uma moldura, uma faixa “Início da variante A/B/C/D”, o nome, a indicação de oito fotos e uma faixa “Fim da variante”. Esses elementos delimitam as propostas para revisão; o título do evento e o texto continuam dentro de cada composição.

O seletor permite ver todas ou isolar uma variante. Os links anteriores continuam válidos:

- [A — Ao lado do texto](https://pythonsudeste.github.io/pyse2027/opcao-3/?galeria=mosaico#sobre): oito fotos em grade na coluna do título, ao lado dos parágrafos.
- [B — Entre parágrafos](https://pythonsudeste.github.io/pyse2027/opcao-3/?galeria=faixa#sobre): uma faixa compacta entra no fluxo de leitura, acompanhada de oito miniaturas sempre visíveis.
- [C — Colagem lateral](https://pythonsudeste.github.io/pyse2027/opcao-3/?galeria=mural#sobre): oito fotos com pequenas rotações junto ao título e ao texto.
- [D — Foto sob o título](https://pythonsudeste.github.io/pyse2027/opcao-3/?galeria=destaque#sobre): foto e oito miniaturas na coluna lateral.

Todas incluem as oito fotos e permitem ampliá-las em um diálogo, navegar por setas e fechar com Escape. Sem JavaScript, as variações ficam visíveis em sequência e os links abrem as imagens diretamente, inclusive as miniaturas da opção D. Não há avanço automático das fotos.

As oito imagens fornecidas em `fotos/` foram exportadas para `site/assets/fotos/` em WebP, com larguras de 800 e 1600 pixels, `srcset` e carregamento sob demanda. Os originais permanecem intactos na pasta local; somente as cópias otimizadas são versionadas e publicadas. O arquivo `site/assets/fotos/manifest.json` registra a correspondência com os nomes originais e as descrições. As legendas descrevem as cenas, sem atribuir datas ou créditos não informados.
