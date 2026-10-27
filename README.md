# Guiga Festas

Site responsivo para festas com cama elástica, piscina de bolinhas, combos e algodão doce. Feito em HTML, CSS e JavaScript puro.

## Resumo do projeto

Site comercial responsivo da Guiga Festas, organizado em cinco páginas para apresentar brinquedos, pacotes, contratação, dúvidas e condições. A implementação mantém HTML, CSS e JavaScript puro, priorizando fotos reais, identidade visual própria e orçamento via WhatsApp.

O estudo de caso completo para adaptação ao portfólio está em [docs/estudo-de-caso.md](docs/estudo-de-caso.md).

## Abrir localmente

Abra `index.html` no navegador. Não há dependências nem etapa de build.

## Pacotes publicados

- Cama elástica: 2h — R$ 149; 3h — R$ 209; 4h — R$ 259.
- Piscina de bolinhas: 2h — R$ 119; 3h — R$ 169; 4h — R$ 209.
- Combo Alegria: 2h — R$ 239; Combo Diversão: 3h — R$ 339; Combo Festa Completa: 4h — R$ 419.
- Algodão doce: até 3h ou até 200 unidades (o que acontecer primeiro), R$ 249, com açúcar e palitos inclusos.

## Contato e imagens

O WhatsApp continua configurado para `5511946175604`. Todos os botões abrem o WhatsApp com a mensagem: “Olá! Vim pelo site da Guiga Festas e gostaria de fazer um orçamento.”

As quatro imagens anexadas foram copiadas para `assets/` e são usadas localmente: `cama-elastica.jpg`, `piscina-bolinhas.jpg`, `crianca-piscina-bolinhas.jpg` e `algodao-doce.jpg`. Para substituir uma foto, atualize o caminho `src` correspondente em `index.html`.

Google Fonts fornece Fraunces e DM Sans. Se não houver conexão, a página usa fontes de sistema como alternativa.

## Páginas

- `index.html`: apresentação breve da Guiga Festas e acesso às informações principais.
- `brinquedos.html`: catálogo e pacotes de brinquedos e atrações.
- `como-funciona.html`: etapas de orçamento e contratação.
- `duvidas.html`: perguntas frequentes.
- `termos.html`: resumo informativo das condições; o orçamento e o contrato aceito detalham cada evento.

Todas as páginas compartilham `styles.css`, `script.js`, a navegação mobile e os links de WhatsApp. Abra `index.html` no navegador para começar.

## Interações

As seções aparecem suavemente durante a rolagem e a navegação entre páginas usa uma breve transição. O movimento respeita a preferência `prefers-reduced-motion`. A rolagem suave já está definida no CSS.

## Métricas de acesso na Vercel

As páginas incluem o script oficial do Vercel Web Analytics. Para começar a coletar visualizações, abra o projeto no painel da Vercel, entre em **Analytics** e habilite **Web Analytics**; em seguida, publique uma nova implantação de produção. Depois, veja **Visitors** e **Page Views** no painel Analytics. Sem o recurso habilitado no painel, não haverá dados de acesso.

A integração usa a rota estática da Vercel e não adiciona dependências ao projeto. As informações de métricas estão resumidas em `termos.html`.
