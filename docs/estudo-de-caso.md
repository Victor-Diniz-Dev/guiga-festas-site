# Estudo de caso — Site da Guiga Festas

> Rascunho para adaptar à página de projetos do portfólio de Victor. Substitua os campos entre colchetes por capturas e o endereço público do site quando estiverem disponíveis.

## Visão geral

A Guiga Festas aluga brinquedos infantis e oferece atrações para festas e comemorações. O projeto transforma as informações comerciais em uma vitrine digital clara, com caminhos diretos para consultar disponibilidade e pedir orçamento pelo WhatsApp.

**Papel:** desenvolvimento front-end e adaptação da experiência conforme as necessidades da Guiga Festas.

**Tecnologias:** HTML5 semântico, CSS3 e JavaScript puro.

**Publicação:** Vercel.

**Links:** [Site publicado — inserir URL] · [Repositório no GitHub](https://github.com/Victor-Diniz-Dev/guiga-festas-site)

## O desafio

A versão inicial concentrava muitas informações em uma única página. O trabalho foi organizar o conteúdo para que as pessoas encontrem rapidamente os brinquedos e pacotes, entendam como funciona a contratação e cheguem ao contato comercial sem perder a identidade visual da marca.

O projeto também precisava manter uma estrutura simples de estudar e atualizar: sem framework, banco de dados, pagamentos ou reserva automática.

## Direção visual

A identidade parte das cores vivas da marca e combina fundo creme, laranja, azul e tipografia editorial. As fotografias dos equipamentos fornecidas pela empresa são protagonistas; a composição do combo reúne as fotos reais da cama elástica e da piscina de bolinhas.

A interface evita apresentar a marca como um template de festas. A hierarquia tipográfica, as linhas finas, o espaço entre os elementos e as imagens criam um ritmo mais editorial, mantendo chamadas de orçamento visíveis.

## Organização da experiência

O conteúdo foi distribuído em cinco páginas:

- **Início:** apresentação da marca e atalhos para conhecer os serviços e pedir orçamento.
- **Brinquedos e pacotes:** equipamentos, durações e preços informados pela empresa.
- **Como funciona:** etapas do contato até a confirmação da reserva.
- **Dúvidas:** respostas curtas para questões recorrentes.
- **Termos e condições:** resumo informativo baseado na minuta de contrato, sem substituir as condições do orçamento e contrato de cada evento.

## Implementação

- Navegação entre páginas e menu compacto para celular.
- Links de WhatsApp com mensagem pré-preenchida e codificação de URL.
- FAQ com o elemento nativo `<details>`, operável por teclado.
- Ano atualizado automaticamente no rodapé.
- Estilos responsivos para telas pequenas, tablets e desktop.
- Estados de foco e suporte à preferência `prefers-reduced-motion`.
- Vercel Web Analytics para visualizar page views após habilitação no painel e nova publicação.

## Acessibilidade e confiança

O conteúdo utiliza estrutura semântica, textos alternativos nas fotos, foco visível e navegação utilizável no celular. A comunicação evita depoimentos, números de desempenho, certificações e condições comerciais não confirmadas. O site não cria reservas nem processa pagamentos.

## Resultado e aprendizados

O resultado é uma vitrine de cinco páginas, leve e sem etapas de build, com informações comerciais separadas por assunto e contato direto pelo WhatsApp. Não há números de conversão ou de clientes publicados; métricas de acesso só estarão disponíveis depois de ativar o Analytics na Vercel e concluir uma nova implantação.

O projeto reúne decisões de direção visual, arquitetura de informação, acessibilidade, implementação responsiva e publicação de um site estático.

## Imagens para a página do portfólio

- [Inserir captura da página inicial em desktop]
- [Inserir captura da página inicial em celular]
- [Inserir captura do catálogo e da composição do combo]

Antes de publicar capturas, confirme autorização para divulgar imagens de pessoas, especialmente crianças.
