# Pedidos no Local — documentação técnica e funcional

Restaurante Sabor de Casa · Daniel Dias · 16/10/2026

## 1. Visão geral

Comanda digital demonstrativa de restaurante de comida caseira, baseada no modelo fornecido pelo proprietário. Substitui o tema Balcão Café. Nenhum pedido, chamado de atendimento ou pagamento é transmitido a um estabelecimento real.

## 2. Tecnologias e ferramentas

HTML, CSS e JavaScript; Tailwind CSS via CDN; Font Awesome; fontes Fredoka e Inter; fotografias externas com alternativa; LocalStorage; GitHub e GitHub Pages.

## 3. Estrutura do site

Entrada com mesa de 01 a 15 ou balcão e nome opcional. Cabeçalho com identificação, atendimento e conta. Cardápio por categorias: pratos do dia, executivos, acompanhamentos, bebidas e doces. Janelas para opções do produto, comanda, fechamento e alertas. Visual terracota e creme conforme referência.

## 4. Acessibilidade

Há títulos, textos descritivos, imagens com alternativas e campos nativos. Ainda é necessária auditoria de rótulos associados, foco, contenção de teclado nas janelas, contraste e leitura dos ícones. Não se declara conformidade WCAG.

## 5. Fluxos principais

1. Escolher mesa ou balcão e informar nome fictício opcional.
2. Filtrar categoria e escolher um prato.
3. Selecionar opções, quantidade e observação.
4. Adicionar à comanda, revisar e enviar na simulação.
5. Atualizar status: Na Fila do Fogão → Preparando na Panela → A Caminho da Mesa → Servido na Mesa.
6. Simular fechamento por PIX, cartão ou dinheiro.

Atendimento é apenas simulado. PIX não fornece código válido para cobrança. O fechamento soma pedidos enviados e serviço de 10%. Itens pendentes precisam ser enviados primeiro. Pedidos encerrados são arquivados localmente; não há tela de histórico de contas fechadas.

## 6. Organização de arquivos

index.html contém estrutura e configuração Tailwind. app.js contém cardápio, comanda e persistência. styles.css está reservado para ajustes adicionais; o visual usa principalmente classes utilitárias. documentacao.html e DOCUMENTACAO.md apresentam esta documentação.

## 7. Git e GitHub

Repositório danieldosadi/danieldosadi.github.io, branch producao, pasta projetos/pedidos-local. O cartão apresenta Abrir aplicativo e Documentação técnica e funcional. Não publicar dados reais nem credenciais.

## 8. Backend

Não há backend. A chave sabor-de-casa-v1 guarda sessão, carrinho, pedidos ativos, numeração e pedidos fechados no navegador. Dados não são compartilhados entre dispositivos. Limpar o armazenamento apaga a demonstração. Dados da antiga cafeteria não são migrados.

## 9. Validação

Mesa obrigatória, nome opcional até 80 caracteres, quantidade de 1 a 20 por inclusão e observações até 240 caracteres. Observações são escapadas antes da apresentação em HTML. Valores somam adicionais e quantidades; o fechamento arredonda a conta com serviço a centavos. Troco informado deve cobrir o total. Conta vazia e carrinho pendente bloqueiam fechamento. Falhas de armazenamento são informadas.

Não há autenticação ou validação de servidor. Não utilizar dados pessoais ou pagamentos reais.

## 10. Critérios de aceite

| ID | Resultado esperado |
| --- | --- |
| CA01 | Mesa ou balcão são selecionados antes de iniciar |
| CA02 | Cardápio e categorias seguem o modelo fornecido |
| CA03 | Opções, quantidade e observação compõem o item |
| CA04 | Comanda permite revisar e remover itens pendentes |
| CA05 | Envio simulado cria pedido e limpa carrinho |
| CA06 | Acompanhamento avança nas etapas definidas |
| CA07 | Conta considera pedidos enviados e serviço de 10% |
| CA08 | Recarregar mantém sessão e pedidos salvos |
| CA09 | Nenhuma ação efetua cobrança ou envio real |

## 11. Entregáveis

Aplicativo baseado na referência, cardápio de restaurante, comanda com opções, acompanhamento e fechamento demonstrativos, armazenamento local, documentação atualizada e publicação no portfólio.

## 12. Conclusão

A versão demonstra uma comanda de restaurante com apresentação acolhedora. Uso real exige servidor, banco compartilhado, autenticação, integração com cozinha e meios de pagamento homologados.

