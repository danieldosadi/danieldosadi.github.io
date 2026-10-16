# Agendamento de Serviços — documentação técnica e funcional

Versão 1.0 · 16/10/2026 · Autor: Daniel Dias

Este documento reúne a visão geral, o escopo implementado, as regras de negócio, a organização técnica e os critérios de aceite. Complementa o README, que contém instruções de execução.

## 1. Visão geral

O projeto organiza atendimentos entre clientes e profissionais, permitindo cadastrar serviços, consultar disponibilidade, agendar, reagendar e cancelar. A interface é compacta, responsiva e utiliza janelas modais para separar consultas e formulários.

Há duas entregas distintas:

| Entrega | Funcionamento | Armazenamento |
| --- | --- | --- |
| Sistema Java | Interface web conectada a uma API Spring Boot | H2 persistente; perfil PostgreSQL opcional |
| Demonstração pública | Mesmas telas com simulação das operações em JavaScript | LocalStorage do navegador de cada visitante |

A demonstração está em https://danieldosadi.github.io/projetos/agendamento/. Ela não se conecta ao banco do sistema Java e não compartilha cadastros entre visitantes.

### Público e objetivos

- Cliente: escolher serviços e horários e acompanhar seus próprios atendimentos.
- Funcionário: marcar para clientes, consultar a agenda e gerenciar profissionais e serviços.
- Visitante do portfólio: conhecer e testar o projeto com dados fictícios.

### Limites do escopo

O acesso por CPF é demonstrativo. Não há senha, comprovação de identidade, autenticação multifator ou Microsoft Authenticator implementados. O projeto não inclui pagamentos, notificações por e-mail, integração com calendários externos nem implantação pública do servidor Java. A demonstração não deve ser usada para atender clientes reais ou armazenar dados pessoais reais.

## 2. Tecnologias e ferramentas

| Tecnologia ou ferramenta | Utilização |
| --- | --- |
| Java | Código configurado para Java 17; ambiente local utilizado com JDK 25 |
| Spring Boot 4.0.8 | Aplicação web e API REST |
| Spring MVC | Rotas HTTP e controladores |
| Spring Data JPA / Hibernate | Persistência e relacionamento de entidades |
| Jakarta Validation | Validação dos dados recebidos |
| H2 | Banco persistente local; bancos em memória nos testes |
| PostgreSQL | Perfil de conexão opcional, sem implantação verificada nesta entrega |
| Maven | Dependências, testes e execução |
| HTML, CSS e JavaScript | Interface, calendário, horários e modais |
| ViaCEP | Consulta de endereço pelo CEP, com preenchimento manual como alternativa |
| JUnit / Spring Boot Test | Testes automatizados do backend |
| Git e GitHub | Histórico e armazenamento do código |
| GitHub Pages | Publicação da demonstração estática e do portfólio |

## 3. Estrutura do site

### Entrada e cadastro

A entrada solicita CPF e identifica o perfil. Um CPF novo abre o cadastro completo. O formulário reúne CPF, sexo, nome, e-mail, nascimento em três seletores e endereço. O botão principal ocupa toda a largura e o retorno é apresentado como link abaixo.

### Área do cliente

- **Novo agendamento:** seleção de profissional, serviço, data e horário.
- **Meus agendamentos:** todos os próximos atendimentos, sem filtro por data, com reagendamento e cancelamento.
- **Meu perfil:** consulta dos dados e alteração de nome e e-mail; exclusão da própria conta sujeita à regra de agendamentos ativos.

### Área do funcionário

- **Agenda de clientes:** consulta diária e novo agendamento por CPF.
- **Cadastro de profissionais:** lista compacta com iniciais, nome e ações de cadastro, edição e remoção.
- **Cadastro de serviços:** colunas Masculino e Feminino, com preços e ações.
- **Resumo de três dias:** tabela no painel com hoje e os próximos dois dias corridos, incluindo dias sem atendimentos. Não representa três dias de funcionamento.

Cada área abre em um modal; ações de cadastro e edição podem abrir um segundo modal. Nome, perfil, Meu perfil e Sair ficam no cabeçalho.

### Regras de agenda

| Regra | Comportamento |
| --- | --- |
| Funcionamento | Quinta-feira a segunda-feira |
| Fechamento | Terça-feira e quarta-feira bloqueadas |
| Jornada | Das 08:00 às 21:30, com término até 21:30 |
| Intervalos | Inícios somente nos minutos 00 e 30 |
| Período | De hoje até hoje + 60 dias, inclusive; horários passados indisponíveis |
| Duração | Mantida internamente; novos serviços cadastrados pela interface usam 30 minutos |
| Último início | Depende da duração: para 30 minutos, é 21:00 |
| Ocupação | Mesmo profissional não pode ter atendimentos sobrepostos |
| Sexo e serviço | Feminino vê serviços femininos; masculino vê masculinos; não informado permite ambos |
| Cancelamento | Libera horário e retira o atendimento das listas visíveis |
| Exclusão de cliente | Exige cancelar atendimentos ativos; remove histórico cancelado e vínculo da conta |
| Exclusão de profissional ou serviço | Bloqueada quando há agendamentos vinculados, inclusive histórico |

No backend, datas e horários usam a configuração do servidor. A implantação deve manter o fuso de São Paulo. O resumo do painel usa America/Sao_Paulo para definir o dia atual; a demonstração calcula a agenda a partir das datas do navegador.

## 4. Acessibilidade

Existem recursos de apoio à navegação e compreensão: rótulos de campos, títulos hierárquicos, botões nativos, foco visível, mensagens de estado e erro, modais com identificação acessível e indicação de seleção por atributos ARIA. O calendário identifica datas e motivos de bloqueio; horários podem ser selecionados por teclado. A tabela usa cabeçalhos e legenda.

A interface se adapta a telas menores; tabelas largas permitem rolagem horizontal. Estes recursos não equivalem a uma certificação de conformidade WCAG. Ainda é necessária uma auditoria sistemática de contraste, leitores de tela, zoom, ordem de foco e navegação entre modais.

## 5. Fluxos principais

### Cliente existente

1. Digitar CPF e entrar.
2. Abrir Novo agendamento.
3. Selecionar profissional, serviço compatível, data e horário livre.
4. Confirmar e consultar o atendimento em Meus agendamentos.

### Cliente novo

1. Informar CPF ainda não cadastrado.
2. Preencher o cadastro; CPF é reaproveitado.
3. Informar CEP e conferir ou preencher o endereço.
4. Cadastrar e entrar na área do cliente.

### Funcionário marcando para cliente

1. Entrar com CPF de funcionário e abrir Agenda de clientes.
2. Clicar em Novo agendamento e informar somente o CPF do cliente.
3. Se existir, abrir as seleções do agendamento.
4. Se não existir, cadastrar o cliente e continuar o agendamento, mantendo a sessão do funcionário.
5. Se o CPF pertencer a funcionário, apresentar mensagem e solicitar CPF de cliente.

### Reagendamento, cancelamento e exclusão

Reagendar carrega os dados do atendimento e verifica a disponibilidade sem tratar o próprio agendamento como conflito. Cancelar pede confirmação e libera o horário. A exclusão de conta de cliente permanece bloqueada enquanto houver atendimento ativo.

### Demonstração pública

O visitante pode usar os botões Testar como cliente e Testar como funcionário, ou cadastrar um CPF fictício. As alterações ficam no navegador. Restaurar demonstração pede confirmação, remove as alterações locais da demonstração e recarrega os dados iniciais.

## 6. Organização de arquivos

```text
agendamento/
├── pom.xml
├── README.md
├── DOCUMENTACAO.md
├── src/main/java/br/com/agenda/
│   ├── AgendaApplication.java
│   ├── AgendaController.java / AgendaService.java
│   ├── AcessoController.java / AcessoService.java / AcessoConfig.java
│   ├── GestaoController.java / PerfilController.java
│   ├── HorarioFuncionamento.java / ApiErrors.java
│   └── Cliente.java / Profissional.java / Servico.java
│       Agendamento.java / Conta.java
├── src/main/resources/
│   ├── application.properties
│   ├── application-postgres.properties
│   └── static/index.html
└── src/test/java/br/com/agenda/
    ├── AcessoServiceTest.java
    └── AgendaServiceTest.java
```

`data/` contém o banco local e `target/` contém arquivos gerados pela compilação. Não devem ser publicados como código-fonte.

No portfólio, `projetos/agendamento/index.html` contém a interface pública e `projetos/agendamento/demo.js` implementa a simulação. A página inicial do portfólio aponta para essa demonstração. O backend não é copiado para o GitHub Pages.

## 7. Git e GitHub

- Sistema Java: https://github.com/danieldosadi/agendamento-spring-boot, mantido privado, branch `main`.
- Portfólio: https://github.com/danieldosadi/danieldosadi.github.io, atualização na branch `producao`.
- Demonstração: https://danieldosadi.github.io/projetos/agendamento/.

As alterações foram registradas em commits descritivos e enviadas aos repositórios. O portfólio é publicado pelo fluxo do GitHub Pages. O GitHub Desktop pode ser usado para acompanhar o histórico e sincronizar uma cópia local. Antes de novas alterações locais, sincronizar com a branch remota para evitar trabalhar sobre uma versão antiga.

Não versionar bancos de clientes, credenciais, arquivos temporários ou resultados de compilação. A disponibilização pública da demonstração não altera a visibilidade privada do repositório Java.

## 8. Backend

A API fica sob `/api`. Os controladores recebem as requisições; os serviços aplicam regras de acesso e agenda; JPA persiste as entidades. Cliente, profissional e serviço se relacionam com agendamentos. Conta vincula o CPF ao perfil e à pessoa correspondente.

| Grupo de rotas | Finalidade |
| --- | --- |
| `/api/auth/*` | Consulta de CPF, entrada, cadastro, sessão e saída |
| `/api/perfil` | Consulta, edição e exclusão do perfil permitido |
| `/api/clientes`, `/api/profissionais`, `/api/servicos` | Consultas e cadastros conforme perfil |
| `/api/servicos/cliente/{id}` | Serviços compatíveis com o cliente |
| `/api/agendamentos` | Agenda diária e criação |
| `/api/agendamentos/{id}` | Reagendamento |
| `/api/agendamentos/{id}/cancelar` | Cancelamento |
| `/api/meus-agendamentos` | Próximos atendimentos do cliente autenticado |
| `/api/disponibilidade` | Horários livres conforme data, profissional e serviço |
| `/api/gestao/*` | Administração exclusiva para funcionário |

O sistema usa sessão HTTP e restringe clientes aos próprios dados. Há transações e bloqueio do profissional durante o agendamento para tratar concorrência. Essas proteções não transformam a entrada por CPF em autenticação adequada para produção.

### Execução local

Na pasta do `pom.xml`, executar:

```powershell
mvn test
mvn spring-boot:run "-Dspring-boot.run.arguments=--server.port=8081"
```

Abrir http://127.0.0.1:8081/. A configuração padrão sem alteração de porta usa 8080. O servidor local está limitado a 127.0.0.1. O banco H2 é relativo à pasta de execução; encerrar e reiniciar preserva os dados persistidos.

## 9. Validação

O backend valida campos obrigatórios, formato de e-mail, limites e valores numéricos, datas, horários, compatibilidade de serviço, propriedade dos agendamentos e permissões. CPF é validado pelo formato de 11 dígitos, sem validação dos dígitos verificadores, permitindo os CPFs fictícios da demonstração.

Na última execução registrada, passaram 49 testes do backend: 18 de acesso e 31 de agenda. A demonstração recebeu verificação própria de perfis, serviços por sexo, cadastro mantendo sessão, disponibilidade, conflito de horários, cancelamento e exclusão. Foram realizadas conferências de navegação no navegador e de sintaxe JavaScript.

As validações executadas não abrangem auditoria de segurança, testes de carga, homologação de PostgreSQL nem certificação de acessibilidade. A simulação JavaScript não oferece proteção de servidor: os dados podem ser alterados pelas ferramentas do navegador.

## 10. Critérios de aceite

| ID | Cenário e resultado esperado |
| --- | --- |
| CA01 | CPF de cliente abre área de cliente; CPF de funcionário abre área de funcionário |
| CA02 | CPF novo encaminha ao cadastro e mantém o CPF informado |
| CA03 | Funcionário cadastra cliente sem trocar sua própria sessão |
| CA04 | Cliente feminino recebe serviços femininos; masculino recebe masculinos |
| CA05 | Terças, quartas, dias passados e datas além de 60 dias ficam indisponíveis |
| CA06 | Horários têm minutos 00 ou 30 e o atendimento termina até 21:30 |
| CA07 | Horário ocupado do profissional não pode receber atendimento sobreposto |
| CA08 | Reagendamento salva nova data ou horário somente após validar disponibilidade |
| CA09 | Cancelamento confirmado libera horário e retira atendimento das listas |
| CA10 | Exclusão de cliente com atendimento ativo é bloqueada; após cancelar, é permitida |
| CA11 | Área do cliente apresenta Novo agendamento e Meus agendamentos em modais, sem filtro por data |
| CA12 | Serviços se organizam por público e profissionais possuem ações de edição e remoção |
| CA13 | Painel de funcionário mostra hoje e os próximos dois dias, sem cancelados |
| CA14 | Cliente não consulta ou altera agenda pertencente a outro cliente pela API |
| CA15 | Demonstração funciona sem servidor Java e preserva alterações no navegador |
| CA16 | Restaurar demonstração recupera os dados fictícios após confirmação |

Esses critérios orientam a homologação. Nem todos possuem teste automatizado individual; critérios visuais foram conferidos manualmente.

## 11. Entregáveis

1. Código-fonte Java Spring Boot, configurações e testes.
2. Interface responsiva com modais, calendário e seleção de horários.
3. README com guia de execução e esta documentação de escopo.
4. Pacote ZIP do projeto local.
5. Demonstração pública independente com dados fictícios e restauração.
6. Inclusão do projeto na seção de projetos do portfólio.

Dados de teste: Ana Beatriz (`001.001.001-01`, feminino), Diego Henrique da Silva (`001.001.001-02`, masculino) e Gustavo Borges (`505.505.505-05`, funcionário). São identidades demonstrativas; não comprovam identidade real. No sistema Java, a carga de demonstração está habilitada e reaplica os dados fixos de endereço e sexo de Ana e Diego na inicialização.

## 12. Conclusão

O projeto entrega uma agenda funcional para estudo e portfólio, combinando regras de negócio no backend com uma interface compacta. A demonstração permite explorar a experiência publicamente sem compartilhar dados entre visitantes.

Para uso real, as próximas etapas são implementar autenticação segura, revisar autorização e proteção contra requisições indevidas, definir tratamento e retenção de dados pessoais, desabilitar a carga demonstrativa e homologar banco, backups, HTTPS, monitoramento e hospedagem. Essas etapas são evolução futura, não funcionalidades já entregues.

