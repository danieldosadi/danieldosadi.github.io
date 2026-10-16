# Pedidos no Local — documentação técnica e funcional

Restaurante Sabor de Casa · Daniel Dias · Atualizado em 16/10/2026

## 1. Visão geral

Aplicação demonstrativa de pedidos para consumo no local. O cliente monta a comanda, envia os itens, acompanha o preparo e simula o fechamento da conta. A cozinha recebe os pedidos em um painel próprio e avança seu status.

O visual usa terracota, creme e verde, com interface compacta e responsiva. Todos os dados permanecem no navegador. Não há pedidos, atendimento ou pagamentos enviados a um estabelecimento real.

## 2. Tecnologias e ferramentas

- HTML5, CSS3 e JavaScript, sem etapa obrigatória de compilação.
- Tailwind CSS via CDN no cardápio; CSS próprio no painel da cozinha e no acompanhamento.
- Font Awesome e fontes Fredoka e Inter.
- Imagens ilustrativas geradas por IA, publicadas como WebP na pasta de assets.
- LocalStorage para persistência e evento storage para sincronização entre abas da mesma origem.
- GitHub para versionamento e GitHub Pages para publicação estática.

## 3. Estrutura do site

### Área do cliente

Entrada com mesa de 01 a 15 ou balcão e nome opcional. Cabeçalho com identificação, Atendimento e Pagar Conta. Banner acima das categorias: Cardápio Todo, Pratos do Dia, Prato Feito / Executivo, Porções, Bebidas e Sobremesa.

Janelas de configuração dos produtos, comanda, troca de itens, oferta de combo, fechamento e alertas. O cardápio permite escolher produtos; a comanda reúne Editar, Trocar e Remover junto de cada item pendente.

Após enviar, a tela principal mostra o acompanhamento dos pedidos e recolhe o cardápio. Pedir mais alguma coisa abre o cardápio; Acompanhar meus pedidos retorna à tela de status. O antigo bloco Pedidos na Cozinha não aparece no cardápio.

### Painel da cozinha

A página cozinha.html apresenta colunas Recebidos, Em preparo e Prontos, com contadores, mesa, cliente, número do pedido, horário, tempo desde o envio, itens, opções e observações. Os preços e descontos permanecem na comanda. Ver servidos abre a lista de pedidos já entregues.

O acesso Cozinha no topo do cardápio abre uma nova aba. O painel recebe os pedidos da demonstração no mesmo navegador.

## 4. Acessibilidade

As páginas usam idioma pt-BR, títulos hierárquicos, botões e campos nativos. A documentação tem link para pular ao conteúdo, navegação por seções e tabelas com cabeçalhos. O painel da cozinha tem nomes acessíveis nas ações, indicadores de foco e anúncio de atualização. O acompanhamento identifica a etapa atual com aria-current e usa textos além das cores.

As janelas de combo e troca usam dialog nativo. Outras janelas usam elementos personalizados. Auditoria completa de navegação por teclado, gerenciamento e contenção de foco, leitores de tela e contraste ainda está pendente; não se declara conformidade WCAG.

## 5. Fluxos principais e regras funcionais

### Pedido e acompanhamento

1. Selecionar mesa ou balcão e informar nome fictício opcional.
2. Escolher categoria e produto; configurar opções, quantidade e observação.
3. Adicionar à comanda e aceitar ou recusar a oferta de combo quando disponível.
4. Revisar os itens pendentes, editar opções ou quantidade, trocar produto ou remover.
5. Enviar para a cozinha: cria um pedido numerado e limpa os itens pendentes da comanda.
6. Acompanhar Recebido → Em preparo → Pronto → Servido na tela do cliente.
7. Usar Pedir mais alguma coisa para montar e enviar outro pedido na mesma conta.

Editar ou trocar salva a alteração no item existente, recalcula valores e mantém sua identificação. Fechar a configuração sem salvar preserva o item original. Edição é oferecida para itens pendentes reconhecidos no cardápio, antes do envio. Combos antigos salvos como item único podem não disponibilizar edição individual.

### Pratos feitos e pratos do dia

PFs e pratos do dia permitem montar arroz, feijão, salada e fritas ou legumes. A proteína tem preço próprio. Os valores mudam imediatamente, sem recarregar a página.

| Componente | Valor e opções |
| --- | --- |
| Arroz | R$ 6,00; branco, integral ou de brócolis |
| Adicional de arroz | Integral e de brócolis acrescentam R$ 1,00 |
| Feijão | R$ 4,00; carioca ou preto |
| Salada | R$ 4,00; pode ser retirada |
| Fritas ou legumes | R$ 5,00; uma categoria por prato |
| Fritas | Batata, mandioca ou polenta; mandioca e polenta acrescentam R$ 1,00 |
| Legumes | Mix de cenoura, brócolis e abobrinha; ou um desses legumes |
| Proteína do PF de Bife | R$ 13,90; composição padrão totaliza R$ 32,90 |

É possível retirar acompanhamentos, descontando seu valor. O cardápio de Pratos do Dia considera o dia da semana no fuso America/Sao_Paulo: segunda, Virado à Paulista e Picadinho; terça, Bife à Rolê e Frango Ensopado; quarta, Feijoada e Pernil; quinta, Massas e Lasanha; sexta, Peixe e Moqueca. Não há pratos do dia configurados para sábado e domingo. PFs, porções e demais categorias continuam disponíveis.

### Bebidas

Sucos de 300 ml, 500 ml e 1 L têm sabores Laranja, Uva, Acerola, Morango e Detox. O fluxo libera acompanhamentos após o sabor e, em seguida, observação e Adicionar. Acerola, Morango e Detox exigem temperatura Ambiente ou Gelada; Laranja e Uva não exibem essa escolha. Detox permite remover ingredientes apresentados na configuração.

Os extras incluem Sem gelo, selecionado por padrão, Com gelo e quantidade de copos de 180 ml. Não há opção adicional de açúcar no fluxo de sucos. O campo de observação usa orientação específica para bebidas.

Refrigerantes de 350 ml oferecem Coca-Cola Regular e Zero, Guaraná Antarctica Regular e Zero, Fanta Laranja e Uva, Sprite Regular e Sem açúcar. A garrafa de vidro de 1 L oferece Coca-Cola Regular e Zero e Guaraná Antarctica. Após escolher a versão, o cliente define temperatura, gelo, limão opcional e copos extras. A limonada também solicita temperatura.

### Combos

| Tipo | Composição | Desconto |
| --- | --- | --- |
| Pratos feitos e pratos do dia | Prato + bebida individual + sobremesa | R$ 3,00 |
| Porções | Porção + suco de jarra 1 L ou refrigerante 1 L | R$ 2,00 |

O combo de pratos exclui suco de 1 L e refrigerante de 1 L. O combo de porções oferece somente essas duas bebidas e termina após adicioná-las, sem etapa de sobremesa.

A oferta aparece após adicionar o prato ou a porção. Recusar mantém o item na comanda. Cada produto mantém seu preço integral; o desconto é uma linha separada aplicada ao total, antes da taxa de serviço. Uma oferta completa concede um desconto por conjunto. Remover um componente vinculado remove o desconto. Trocar a bebida respeita as opções permitidas para o tipo de combo.

### Operação da cozinha

1. Recebidos: conferir itens e observações e clicar Começar preparo.
2. Em preparo: preparar o pedido e clicar Marcar como pronto.
3. Prontos: entregar à mesa e clicar Confirmar entrega à mesa.
4. Servidos: consultar os pedidos entregues em Ver servidos.

As etapas correspondem aos estados internos Na Fila do Fogão, Preparando na Panela, A Caminho da Mesa e Servido na Mesa. Mudanças de status são refletidas no acompanhamento do cliente, entre abas abertas na mesma origem.

### Taxa e fechamento

A taxa de serviço de 10% vem incluída automaticamente ao carregar a página. O cliente pode desmarcar Incluir taxa de serviço na comanda ou no fechamento; a escolha é sincronizada entre essas duas janelas durante a sessão. Recarregar a página volta ao padrão incluído.

O cálculo é soma dos itens e descontos, acrescida de 10% quando marcado, com arredondamento para centavos. O fechamento considera pedidos enviados; itens pendentes precisam ser enviados antes. Conta vazia não pode ser fechada. PIX, cartão e dinheiro são apenas simulações; não existe cobrança ou código PIX válido. Troco informado deve cobrir o total.

## 6. Organização de arquivos

| Arquivo ou pasta | Responsabilidade |
| --- | --- |
| index.html | Estrutura do cliente, cabeçalho, janelas e carregamento dos scripts |
| app.js | Cardápio, sessão, itens, comanda, envio, alertas e fechamento |
| juice-flow.js | Etapas, sabores e extras de sucos |
| soda-flow.js | Tamanhos, marcas e versões de refrigerantes |
| beverage-flow.js | Temperatura e extras das demais bebidas |
| pf-flow.js | Composição e cálculo de PFs e pratos do dia |
| menu-images.js | Associação dos produtos às imagens WebP |
| combo-steps.js | Oferta, seleção, descontos e vínculo dos componentes do combo |
| service-tax.js | Controle da taxa e atualização dos totais |
| cart-edit.js | Edição e troca dos itens pendentes |
| kitchen-sync.js | Publicação da fila e recepção dos status da cozinha |
| customer-tracking.js e customer-tracking.css | Acompanhamento e alternância com o cardápio |
| cozinha.html, cozinha.css e cozinha.js | Painel, apresentação e avanço dos pedidos |
| assets/cardapio/ | Imagens ilustrativas em WebP |
| documentacao.html e DOCUMENTACAO.md | Documentação navegável e versão para download |

Os scripts do cliente são carregados em sequência e estendem funções existentes, compartilhando o estado em JavaScript. A ordem importa: cozinha e acompanhamento são carregados após os módulos da comanda. Parâmetros de versão nos arquivos ajudam a invalidar o cache após publicação. Arquivos antigos não referenciados pela página podem permanecer no repositório.

## 7. Git e GitHub

Repositório: danieldosadi/danieldosadi.github.io. Branch de publicação: producao. Diretório: projetos/pedidos-local.

As alterações são registradas em commits e publicadas no GitHub Pages. O cartão Pedidos no Local no portfólio apresenta Abrir aplicativo e Documentação técnica e funcional. A documentação usa o tema do portfólio; o aplicativo e a cozinha usam a identidade do restaurante.

Aplicativo: https://danieldosadi.github.io/projetos/pedidos-local/

Cozinha: https://danieldosadi.github.io/projetos/pedidos-local/cozinha.html

Documentação: https://danieldosadi.github.io/projetos/pedidos-local/documentacao.html

## 8. Backend, dados e sincronização

Não há backend, API de pedidos, banco compartilhado ou autenticação. O GitHub Pages hospeda arquivos estáticos. Toda a lógica funcional executa no navegador.

| Chave LocalStorage | Conteúdo |
| --- | --- |
| sabor-de-casa-v1 | Mesa, cliente, itens pendentes, pedidos ativos, próxima numeração e pedidos fechados |
| sabor-de-casa-kitchen-v1 | Fila da cozinha, itens, mesa, cliente, status e horários |
| sabor-de-casa-kitchen-session | Identificador usado para vincular pedidos da sessão à fila |

Ao enviar, kitchen-sync.js publica os pedidos na fila. A identificação combina sessão e número do pedido. A cozinha lê essa fila e grava mudanças de status. O cliente recebe o evento storage ou verifica ao recuperar o foco, atualiza seus pedidos e redesenha o acompanhamento. A cozinha também atualiza o tempo decorrido a cada minuto.

As abas precisam estar no mesmo navegador, perfil e origem. A demonstração não sincroniza dispositivos, navegadores ou perfis distintos e mantém uma sessão de cliente compartilhada no navegador. Não representa uma operação real com várias mesas independentes. Pedidos ativos anteriores à integração podem ser importados para a fila com horário de criação aproximado.

Recarregar mantém os dados salvos. Limpar o armazenamento os remove. Contas fechadas são arquivadas localmente sem tela própria de histórico financeiro; Ver servidos é o histórico operacional da cozinha. Fila e conta são estados separados. Não há garantia de transações atômicas, resolução completa de concorrência, controle de acesso ou retenção automática da fila.

## 9. Validação e verificação

- Mesa obrigatória; nome opcional até 80 caracteres.
- Quantidade entre 1 e 20 por item e observação até 240 caracteres.
- Sabores, versões e temperaturas obrigatórias conforme o tipo de bebida; copos extras inteiros de 0 a 20.
- Cálculo imediato dos componentes, adicionais, quantidade, desconto e taxa.
- Bloqueio de fechamento para conta vazia ou itens pendentes; validação do valor para troco.
- Observações escapadas quando inseridas em HTML; cozinha e acompanhamento usam textContent para apresentar textos.
- A cozinha confere o status esperado antes de avançar o pedido.

Foram verificados na interface a edição sem duplicar item, a troca com recálculo, o botão de retorno, a separação das bebidas de 1 L, a conclusão do combo de porção com desconto de R$ 2,00, a taxa inicialmente marcada, o recebimento entre abas, o avanço de preparo e pronto e a alternância entre acompanhamento e cardápio. Também foram conferidos sintaxe dos scripts alterados e disponibilização das versões publicadas.

Auditoria completa de acessibilidade, testes automatizados abrangentes, concorrência com vários operadores e operação em dispositivos diferentes não estão concluídos. As validações são locais e não substituem validação de servidor.

## 10. Critérios de aceite

| ID | Resultado esperado |
| --- | --- |
| CA01 | Selecionar mesa ou balcão antes de iniciar |
| CA02 | Exibir categorias e pratos do dia conforme o dia em São Paulo |
| CA03 | Recalcular PFs com acompanhamentos, retiradas e adicionais |
| CA04 | Liberar etapas e validar opções de bebidas conforme suas regras |
| CA05 | Permitir editar, trocar e remover itens pendentes sem duplicação |
| CA06 | Oferecer prato, bebida individual e sobremesa com R$ 3,00 de desconto |
| CA07 | Oferecer porção e bebida de 1 L com R$ 2,00 de desconto, sem sobremesa |
| CA08 | Manter preços integrais e desconto separado; retirar desconto se remover componente |
| CA09 | Incluir taxa de 10% por padrão e permitir ao cliente retirá-la |
| CA10 | Envio criar pedido numerado, limpar pendentes e publicar na fila local |
| CA11 | Cozinha avançar Recebidos → Em preparo → Prontos → Servidos |
| CA12 | Cliente acompanhar status atualizado entre abas do mesmo navegador |
| CA13 | Recolher cardápio após envio e permitir pedir mais pelo botão |
| CA14 | Não mostrar o antigo bloco de cozinha dentro do cardápio |
| CA15 | Recarregar preservar pedidos; fechamento considerar itens enviados e taxa escolhida |
| CA16 | Todas as ações permanecerem demonstrativas, sem cobrança ou envio real |

## 11. Entregáveis

- Aplicativo de pedidos no local, com identidade Sabor de Casa e cardápio ilustrado.
- Configuração de pratos e bebidas, comanda editável, combos e taxa opcional.
- Acompanhamento do cliente e painel da cozinha com sincronização local entre abas.
- Fechamento demonstrativo e persistência no navegador.
- Código estático versionado, publicação no portfólio, documentação HTML e Markdown.

## 12. Conclusão

O projeto demonstra o fluxo do pedido à entrega, com configuração de produtos, preços dinâmicos, combos e acompanhamento integrado à cozinha. Para uso real, são necessários backend, banco compartilhado, sessões independentes por mesa, autenticação, controle de acesso, sincronização confiável e integrações de atendimento e pagamento.