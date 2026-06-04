# ajuliagallo — Site Storymaker

Site de apresentação de serviços de storymaker para casamentos da Julia Gallo.
Desenvolvido em React (Create React App), responsivo para desktop e mobile.

---

## Estrutura do Projeto

```
sitejulia/
├── public/
│   ├── videos/              # Todos os assets de mídia
│   │   ├── Footer.mp4       # Vídeo de fundo do Hero (roda como gif)
│   │   ├── Sumary.mp4       # Vídeo resumo (vertical 9:16)
│   │   ├── galery.mp4       # Vídeo de fundo da seção Galeria
│   │   ├── story1.mp4       # Story 1
│   │   ├── story2.mp4       # Story 2
│   │   ├── story3.mp4       # Story 3
│   │   ├── julia.jpg        # Foto da Julia (seção Sobre mim)
│   │   ├── IMG_1.JPG        # Imagem principal do Hero
│   │   ├── Foto_inicial.jpg # Foto inicial
│   │   ├── rodape.png       # Imagem de topo da seção Investimento
│   │   ├── verso.jpg        # Imagem do pacote Verso
│   │   ├── poema.jpg        # Imagem do pacote Poema
│   │   └── obra.jpg         # Imagem do pacote Obra
│   └── index.html           # HTML base, importa fontes do Google Fonts
├── src/
│   ├── components/
│   │   ├── HeroSection.js         # Cabeçalho com vídeo de fundo + texto overlay
│   │   ├── AboutSection.js        # Sobre mim — foto à esquerda, texto à direita
│   │   ├── StoriesSection.js      # 3 vídeos verticais em scroll horizontal
│   │   ├── VideoSummarySection.js # Texto + vídeo resumo vertical
│   │   ├── PackagesSection.js     # 3 pacotes com cores e imagens individuais
│   │   ├── GallerySection.js      # Vídeo de fundo + texto sobreposto
│   │   ├── InvestmentSection.js   # Condições de pagamento com fundo escuro
│   │   ├── FooterSection.js       # Rodapé
│   │   └── VideoPlayer.js         # Componente reutilizável de vídeo
│   ├── App.js                     # Composição de todas as seções
│   ├── App.css                    # Todos os estilos do projeto
│   └── index.css                  # Reset global e cor de fundo
└── DOCUMENTACAO.md
```

---

## Seções

### HeroSection
- Vídeo `Footer.mp4` rodando em loop sem som, sem controles (como gif)
- Texto centralizado sobreposto: eyebrow + h1
- Foto `IMG_1.JPG` centralizada abaixo do vídeo
- Parágrafo descritivo

### AboutSection
- Layout 2 colunas no desktop: foto `julia.jpg` à esquerda, texto à direita
- Mobile: h2 aparece primeiro, depois foto, depois texto
- Foto com proporção 2:3 (2400x3600px original)

### StoriesSection
- 3 vídeos verticais (9:16) em scroll horizontal
- Abre com foco no story2
- Mobile: scroll horizontal com margens negativas para não cortar o primeiro vídeo
- Desktop: centralizado

### VideoSummarySection
- Layout 2 colunas: texto à esquerda, vídeo `Sumary.mp4` vertical à direita
- Mobile: empilha em coluna única

### PackagesSection
- 3 pacotes: VERSO, POEMA, OBRA
- Cada um com cor de fundo, imagem e posição de imagem individual:
  - VERSO `#edeced` — imagem à esquerda
  - POEMA `#d4d4d4` — imagem à direita
  - OBRA `#151313` (texto branco) — imagem à esquerda
- Mobile: empilha em coluna única com imagem embaixo do texto

### GallerySection
- Vídeo `galery.mp4` como fundo em loop mutado
- Texto sobreposto com classes específicas: `.gallery-content`, `.gallery-title`, `.gallery-text`
- Mobile: `.gallery-content` com `width: 50%`

### InvestmentSection
- Fundo `#474747`, texto branco
- Imagem `rodape.png` no topo
- Lista de condições de pagamento alinhada à esquerda

---

## Fontes

Importadas via Google Fonts no `index.html`:

| Fonte | Uso |
|---|---|
| Cormorant Garamond | h1, h3, assinatura |
| Tenor Sans | Todos os h2 (caixa alta) |
| Inter | Eyebrow do hero |

---

## Tokens CSS (App.css)

```css
--accent:      #edeced
--text:        #212121
--muted:       #212121
--surface:     #edeced
--border:      #cdccca
--shadow:      0 2px 12px rgba(0,0,0,0.07)
--radius:      24px
--section-gap: 40px
```

---

## Responsividade

- Breakpoint mobile: `max-width: 480px`
- Breakpoint VideoSummary: `max-width: 560px`
- Breakpoint desktop stories: `min-width: 481px`

---

## Componente VideoPlayer

```jsx
<VideoPlayer
  src="/videos/exemplo.mp4"
  poster=""
  title="Título opcional"
  vertical={false}   // true = proporção 9:16
  autoplay={false}   // true = inicia automaticamente mutado
  loop={false}
/>
```

- `controls` nativos do navegador sempre visíveis
- Vídeos com `autoplay` iniciam mutados (exigência dos navegadores)
- Suporte a `.mov` (video/quicktime) e `.mp4` (video/mp4)

---

## Scripts Disponíveis

```bash
npm start       # Inicia em modo desenvolvimento (localhost:3000)
npm run build   # Gera build de produção na pasta /build
npm test        # Executa os testes
```
