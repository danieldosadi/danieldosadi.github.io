# Pedidos no Local — documentação técnica e funcional

Tema: Balcão Café · Autor: Daniel Dias · 16/10/2026

## 1. Visão geral

Aplicativo demonstrativo para montar pedidos em uma cafeteria e simular o acompanhamento no balcão. O usuário escolhe uma mesa, adiciona produtos, informa observações e confirma o pedido.

Os dados ficam somente no navegador utilizado. Não há envio à cozinha, sincronização entre dispositivos, pagamento ou integração com estabelecimento real. Produtos e preços são ilustrativos.

## 2. Tecnologias e ferramentas

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura, campos e navegação |
| CSS3 | Tema de cafeteria, grades e adaptação a telas menores |
| JavaScript | Cardápio, carrinho, validações e estados dos pedidos |
| LocalStorage | Persistência local do carrinho e histórico de pedidos |
| Google Fonts | Fontes DM Sans e Playfair Display, com fontes alternativas |
| GitHub / GitHub Pages | Versionamento e publicação estática |

Não utiliza framework, servidor próprio nem banco de dados remoto.

## 3. Estrutura do site

- Cabeçalho com acesso ao portfólio e à documentação.
- Aviso de demonstração e identificação Balcão Café.
- Cardápio com categorias, busca e preço de cada produto.
- Carrinho com escolha de mesa, quantidades, observações e total.
- Área de pedidos com histórico, filtro por status e ações de acompanhamento.

Em telas amplas, cardápio e carrinho ficam lado a lado. Em telas menores, o carrinho aparece após o cardápio.

## 4. Acessibilidade

A interface possui rótulos de campos, botões nativos, foco visível, link para pular ao conteúdo, indicação textual de status e mensagens de feedback. Botões de quantidade identificam o produto para tecnologias assistivas. Os ícones de alimentos são decorativos.

Não houve auditoria WCAG completa. Devem ser avaliados contraste, zoom, leitores de tela e navegação por teclado em diferentes navegadores.

## 5. Fluxos principais

### Montar e confirmar pedido

1. Filtrar a categoria ou buscar um produto.
2. Adicionar itens e ajustar quantidades.
3. Escolher uma mesa de 01 a 12.
4. Informar observações opcionais.
5. Conferir o total e confirmar.
6. Visualizar o pedido recebido na área de acompanhamento.

### Acompanhar pedido

O fluxo é Recebido → Em preparo → Pronto → Entregue. Antes da entrega, o pedido pode ser cancelado após confirmação. Pedidos cancelados permanecem no histórico. O contador da aba considera apenas pedidos ainda em andamento.

As ações de balcão são liberadas para demonstração; não representam acesso autenticado de funcionário.

## 6. Organização de arquivos

```text
projetos/pedidos-local/
├── index.html
├── styles.css
├── app.js
├── documentacao.html
└── DOCUMENTACAO.md
```

O HTML define os componentes. O CSS concentra a apresentação. O JavaScript contém o cardápio e as operações. O documento HTML permite leitura na web e o Markdown permite download.

## 7. Git e GitHub

O projeto é publicado no repositório danieldosadi/danieldosadi.github.io, branch producao, dentro de projetos/pedidos-local. O cartão do portfólio inclui Abrir aplicativo e Documentação técnica e funcional.

As alterações são registradas em commits. Não publicar dados reais de pedidos, credenciais ou informações de clientes.

## 8. Backend

Não há backend nesta versão. Todas as operações são realizadas no navegador. A chave balcao-cafe-pedidos-v1 no LocalStorage armazena carrinho, pedidos e próxima numeração.

Limpar os dados do navegador elimina o histórico. Outro navegador não verá os mesmos pedidos. Mesa e observações ainda em preenchimento não são restauradas automaticamente.

Para operação real seria necessário servidor, banco compartilhado, autenticação, autorização, controle de concorrência, segurança e integração com a equipe de atendimento.

## 9. Validação

- Pedido exige ao menos um produto e mesa válida entre 1 e 12.
- Quantidade limitada a 20 unidades por produto.
- Valores calculados em centavos inteiros e exibidos em reais.
- Observações limitadas a 240 caracteres.
- Transições de status seguem a sequência definida.
- Falha de armazenamento apresenta mensagem e impede confirmar o pedido como persistido.
- Textos de usuário são apresentados por textContent, sem interpretação como HTML.

O histórico local pode ser alterado pelas ferramentas do navegador. Não existe garantia de integridade ou autorização de servidor.

## 10. Critérios de aceite

| ID | Resultado esperado |
| --- | --- |
| CA01 | Cardápio mostra nome, descrição, preço e ação de adicionar |
| CA02 | Categoria e busca filtram os produtos |
| CA03 | Quantidade e remoção atualizam o total |
| CA04 | Confirmação permanece indisponível sem mesa ou itens |
| CA05 | Pedido confirmado guarda mesa, itens, total e observações |
| CA06 | Confirmação limpa o carrinho e abre o acompanhamento |
| CA07 | Pedido percorre os estados permitidos |
| CA08 | Cancelamento exige confirmação e preserva histórico |
| CA09 | Atualizar a página preserva pedidos salvos neste navegador |
| CA10 | Filtro de status e contador de pedidos ativos funcionam |
| CA11 | Página permite utilização em computador e celular |

Esses critérios orientam a validação e evolução do aplicativo; não constituem certificação de acessibilidade ou segurança.

## 11. Entregáveis

- Aplicativo público em HTML, CSS e JavaScript.
- Cardápio fictício de cafeteria e fluxo completo de pedido local.
- Documentação publicada e versão Markdown para download.
- Cartão do projeto no portfólio com os dois links.

## 12. Conclusão

Pedidos no Local demonstra uma experiência de compra no estabelecimento, com navegação compacta, cálculos de carrinho e acompanhamento de estados. A proposta é apresentar competências de interface e lógica JavaScript sem depender de servidor.

Como evolução, recomenda-se integrar um backend e uma tela de cozinha autenticada, sincronizar pedidos entre dispositivos e implementar controles operacionais antes de qualquer utilização comercial.

