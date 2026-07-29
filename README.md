# Labmed São Camilo — Site institucional

Site one-page estático da Clínica Labmed São Camilo (Areal, RJ).
Stack: **Vite + TypeScript (vanilla) + Tailwind CSS v4**. Sem frameworks de UI.

## Como rodar

```bash
npm install
npm run dev      # servidor local em http://localhost:5192
npm run build    # gera o site estático em dist/
npm run preview  # pré-visualiza o build de produção
```

O conteúdo de `dist/` pode ser hospedado em qualquer servidor estático
(Vercel, Netlify, hospedagem compartilhada via FTP etc.).

## Onde editar

| O quê | Onde |
|---|---|
| WhatsApp, endereço, horários, redes sociais | `src/data/site.ts` (um lugar só, reflete no site todo) |
| Textos de cada seção | `src/sections/*.ts` (um arquivo por seção) |
| Exames listados | `src/sections/exames.ts` (array `EXAMES`) |
| Áreas de ultrassom | `src/sections/ultrassom.ts` (array `AREAS`) |
| Preço do toxicológico | `src/sections/toxicologico.ts` |
| Cores e fontes | `src/style.css` (bloco `@theme`) |
| SEO (title, description, JSON-LD) | `index.html` |

## Fotos e logo

As fotos reais ficam em `public/fotos/` (coleta.jpg, certificado-monica.jpg,
certificado-recepcao.jpg, logo-completa.png). A marca em `public/logo-mark.png`
é usada no header, footer e favicon. Para trocar ou adicionar fotos, salve
no mesmo padrão (JPEG otimizado, até ~900px) e use `loading="lazy"` e `alt`
descritivo. Falta apenas foto real do Dr. Rodrigo na seção de ultrassom
(comentário `PLACEHOLDER` em `src/sections/ultrassom.ts`).

## Observações

- O endereço usado (Praça Presidente Castelo Branco, 365 · Centro, Areal, RJ)
  veio do registro público do CNPJ. Confirme antes de publicar.
- O domínio `labmedsaocamilo.com.br` em `index.html` (canonical/Open Graph)
  é um placeholder: troque pelo domínio real ao publicar.
- `public/og-image.png` é a imagem de compartilhamento (WhatsApp/redes).
  Recomendo substituir por uma arte com foto real da fachada.
