# Portfólio de Daniel Dias

Site One Page em HTML5, CSS3 e JavaScript puro, sem bibliotecas, serviços externos ou etapa de compilação.

## Visualizar e editar

Abra `index.html` no navegador. Edite textos e experiências em `index.html`, cores e layout em `styles.css`, interações em `script.js` e inicialização do tema em `theme.js`. A imagem está em `assets/daniel-dias.png`. Mantenha a estrutura de pastas ao mover ou publicar.

## Publicar no GitHub Pages

1. Entre no GitHub e crie um repositório público. Para usar a página principal do perfil, o nome deve ser `danieldosadi.github.io`. Para um site de projeto, use outro nome, por exemplo `portfolio`.
2. Na página do repositório, use **Add file → Upload files**. Envie o conteúdo desta pasta, incluindo a pasta `assets`, diretamente na raiz. Não envie apenas o ZIP e não deixe `index.html` dentro de uma pasta adicional. Confirme o envio com **Commit changes**.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, a branch `main` e a pasta `/ (root)`. Salve.
4. Aguarde a publicação. O endereço confirmado será mostrado em **Settings → Pages**. Ative **Enforce HTTPS** quando disponível.
5. Para atualizar, edite ou envie os arquivos novamente na mesma branch. O GitHub Pages publicará as alterações.

Os nomes dos menus podem mudar. Referência oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Conteúdo e projetos

Os dados profissionais e a foto foram recuperados dos anexos da conversa de origem. As datas e a formação refletem o currículo fornecido; revise a situação atual antes de publicar. Todos os cinco projetos são propostas de demonstração e estão identificados como ainda não desenvolvidos, pois não foi confirmada a disponibilidade de demonstrações públicas. As ilustrações dos cartões são elementos decorativos em CSS, não capturas de aplicações existentes.

Quando uma demonstração estiver pronta, atualize o texto de status e inclua apenas um endereço real e validado. Não publique código, dados, alertas, telas, credenciais ou documentos internos da Porto. O cartão de automação descreve uma proposta independente com informações simuladas.

## Acessibilidade e comportamento

- Navegação semântica, link para pular ao conteúdo, foco visível e controles nativos acessíveis por teclado.
- Filtros com estado `aria-pressed`, anúncio da quantidade de resultados e cartões ocultos removidos da navegação.
- Tema segue o sistema inicialmente; a escolha manual é salva em `localStorage`. O modo sistema acompanha alterações do dispositivo. O site continua funcional caso o armazenamento esteja bloqueado.
- Animações e rolagem suave desativadas quando `prefers-reduced-motion` está ativo.
- Sem JavaScript, o conteúdo e os links continuam disponíveis e todos os projetos aparecem. O filtro fica oculto.

## Verificação antes de publicar

Confira em celular e computador; use Tab, Shift+Tab e Enter; teste os filtros; alterne os temas e recarregue; ative redução de movimento no sistema. Verifique o e-mail e os perfis. A publicação em si não foi realizada por esta entrega.
