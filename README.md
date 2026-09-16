# Áurea Laser Locação

Site institucional em Astro para locação do Ácrus HTM Triple Wave para clínicas de estética na Baixada Santista.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build e deploy

```bash
npm run build
npm run preview
```

O build gera HTML estático em `dist/`, sitemap por meio da integração oficial do Astro e `robots.txt` em `public/`. O projeto pode ser publicado em qualquer hospedagem compatível com arquivos estáticos.

## Arquitetura

- `src/data/site.ts`: domínio, WhatsApp, cidades e dados centralizados.
- `src/components/`: SEO, CTA e FAQ reutilizáveis.
- `src/layouts/BaseLayout.astro`: HTML base, navegação, breadcrumbs, footer e CTA flutuante.
- `src/pages/`: páginas comerciais, cidades e blog.
- `public/images/`: logo e imagem pública do equipamento.

## Antes de publicar

Confirmar com a empresa o número do WhatsApp, condições contratuais, áreas exatas de atendimento, informações sobre aplicadora/profissionais e textos legais. Não foram incluídos preços, avaliações, endereço, certificações ou promessas não confirmadas.

As URLs legadas auditadas foram redirecionadas: `/locacao-acrus.html` para `/locacao-laser/` e `/acrus-htm-triple-wave.html` para `/acrus-htm/`.
