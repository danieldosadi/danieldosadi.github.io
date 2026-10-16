# Gestão de Chamados — documentação técnica e funcional

Versão 1.0 · 16/10/2026 · Daniel Dias

## 1. Visão geral

Aplicação web de apoio à gestão de chamados, desenvolvida com Google Apps Script. A interface centraliza a consulta de registros, a seleção de status e a preparação de mensagens e textos padronizados para acompanhamento operacional.

O escopo descrito foi levantado na interface disponível do projeto. O código completo do servidor e a configuração da planilha de produção não foram verificados nesta documentação. Recursos de integração são descritos como contratos esperados, sem afirmar homologação da persistência.

## 2. Tecnologias e ferramentas

| Tecnologia | Papel |
| --- | --- |
| Google Apps Script | Publicação do aplicativo e execução de funções no servidor |
| HTML e CSS | Estrutura e apresentação da interface |
| JavaScript | Filtros, formulários, geração de textos e eventos |
| Bootstrap 5.3.0 | Componentes visuais e modais |
| Bootstrap Icons 1.10.5 | Ícones de apoio |
| google.script.run | Comunicação assíncrona com funções do Apps Script |
| Google Sheets | Fonte de dados esperada pela interface; esquema não confirmado |
| GitHub Pages | Portfólio e publicação desta documentação |

## 3. Estrutura do site

A tela principal apresenta o Painel de Chamados, controles de filtragem e tabela de registros. Janelas modais concentram a alteração de status e o preenchimento de informações específicas.

A interface contém recursos para atendimento, solicitação de relatório, preparação de RDM e mensagens ao executor. RDM representa uma requisição de mudança no contexto operacional; sua criação efetiva em ferramenta externa não foi comprovada. Os textos gerados devem ser revisados antes de utilização.

Os status possuem identificação textual e cores de apoio. Há estados relacionados a aberto, atendimento, relatório, RDM, resolvido e fechado. Os valores definitivos devem seguir o contrato do servidor e da planilha.

## 4. Acessibilidade

A interface utiliza rótulos de campos, tabela e componentes de modal do Bootstrap. A presença de nomes de status permite compreender os estados sem depender apenas das cores.

Não foi realizada auditoria WCAG. Devem ser homologados contraste, rótulos de todos os controles, foco e retorno de foco dos modais, mensagens para leitores de tela e utilização apenas pelo teclado. Cores e ícones são complementares ao texto.

## 5. Fluxos principais

### Consulta de chamados

1. Abrir o aplicativo.
2. Solicitar os registros ao servidor por google.script.run.
3. Exibir os dados na tabela.
4. Filtrar por status ou pelos controles avançados.
5. Limpar os filtros para recuperar a visualização original.

### Atualização de status

1. Selecionar um chamado e abrir a janela de status.
2. Escolher o novo estado.
3. Preencher os campos específicos e revisar o comentário.
4. Enviar a alteração ao servidor.
5. Exibir retorno de sucesso ou erro e atualizar a visualização conforme a resposta.

### Textos de atendimento, relatório e RDM

Selecionar os registros relacionados, preencher os parâmetros, revisar o texto gerado e utilizar a ação de copiar. A interface evita opções já selecionadas nos blocos relacionados. Copiar um texto não comprova envio de mensagem nem abertura de registro em sistema externo.

## 6. Organização de arquivos

O arquivo de interface analisado foi gestaoChamado_index.html. Ele reúne HTML, estilos e JavaScript, incluindo integração com google.script.run.

Para manutenção, recomenda-se separar a apresentação em Index.html, Styles.html e Scripts.html, mantendo funções do servidor em Code.gs. Essa divisão é uma recomendação de organização, não uma afirmação de que o aplicativo publicado utiliza essa estrutura.

A documentação pública fica no portfólio, em projetos/gestao-chamados/documentacao.html, com uma cópia Markdown para download. A publicação não inclui dados operacionais nem identificadores de planilhas.

## 7. Git e GitHub

O portfólio e esta documentação são mantidos no repositório danieldosadi/danieldosadi.github.io, na branch producao. O cartão Gestão de Chamados aponta para o aplicativo do Apps Script e para a documentação.

Não foi identificado um repositório próprio do código completo de Gestão de Chamados. Para versionamento futuro, recomenda-se manter o código em repositório específico, com commits descritivos e revisão antes de publicar novas versões. Credenciais, identificadores privados e dados reais não devem ser incluídos.

## 8. Backend

A interface espera funções de servidor acessíveis por google.script.run para carregar registros e atualizar status. Foi identificada a chamada atualizarStatusChamado, que recebe número do chamado, novo status e comentário.

A leitura e a escrita na fonte de dados devem ocorrer no servidor, com validação de permissões e entradas. A interface usa manipuladores assíncronos para respostas e falhas.

O backend completo, a planilha conectada, o histórico de alterações, o controle de concorrência e a política de acesso do aplicativo publicado não foram inspecionados. Não se afirma existência de autenticação própria, API REST, trilha de auditoria ou garantia de gravação sem homologação.

## 9. Validação

Foram identificadas rotinas de formatação de datas, geração de mensagens, seleção de registros sem duplicação e exibição de feedback. O projeto também contém lógica de períodos de relatório e conversão de minutos para horas.

A validação no navegador deve ser complementada no servidor. Antes de uso operacional, testar valores obrigatórios, status permitidos, datas inválidas, registros inexistentes, falhas de rede, permissões e alterações simultâneas.

Não há evidência de suíte automatizada executada para este projeto nesta entrega. As verificações mencionadas são levantamento de código da interface, não resultados de testes de produção.

## 10. Critérios de aceite

| ID | Resultado esperado para homologação |
| --- | --- |
| CA01 | Painel carrega registros e informa falhas de leitura de forma compreensível |
| CA02 | Filtro de status exibe somente registros correspondentes |
| CA03 | Limpar filtros restaura a lista original |
| CA04 | Modal apresenta o chamado correto antes de alterar seu estado |
| CA05 | Campos específicos acompanham o status selecionado |
| CA06 | Atualização é validada e confirmada pelo servidor antes de ser apresentada como concluída |
| CA07 | Textos gerados refletem os registros e períodos selecionados |
| CA08 | Ação de copiar informa sucesso ou falha |
| CA09 | Blocos relacionados não permitem selecionar o mesmo chamado indevidamente |
| CA10 | Usuário sem permissão não consegue modificar registros |
| CA11 | Navegação por teclado e retorno de foco dos modais são utilizáveis |
| CA12 | Falhas e alterações concorrentes não causam perda silenciosa de informações |

Esses critérios orientam a homologação; não são uma declaração de que todos foram aprovados.

## 11. Entregáveis

- Cartão Gestão de Chamados no portfólio, com acesso ao aplicativo.
- Documentação técnica e funcional pública com navegação por seções.
- Cópia Markdown para download.
- Relação de fluxos, dependências e critérios de aceite para continuidade do projeto.

O código completo do servidor e uma suíte automatizada não fazem parte desta entrega documental.

## 12. Conclusão

Gestão de Chamados reúne acompanhamento de registros e preparação de textos operacionais em uma interface web integrada ao ecossistema Google. A documentação registra os recursos observados e distingue funcionalidades da interface de integrações ainda não verificadas.

As próximas melhorias recomendadas são consolidar o código do servidor, documentar a estrutura da planilha, versionar o projeto, homologar permissões e persistência e criar testes de atualização, concorrência e acessibilidade.

