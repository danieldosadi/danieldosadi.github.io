/* =========================================================
   CONTROLE DE ESTOQUE DOMÉSTICO
   ========================================================= */

const STORAGE_KEY = "estoque_completo";


/* =========================================================
   DADOS
   ========================================================= */

let dados = carregarDados();

let produtoEmEdicao = null;


/* =========================================================
   ELEMENTOS
   ========================================================= */

const formProduto =
    document.getElementById("formProduto");

const formMovimentacao =
    document.getElementById("formMovimentacao");

const nome =
    document.getElementById("nome");

const categoria =
    document.getElementById("categoria");

const unidade =
    document.getElementById("unidade");

const preco =
    document.getElementById("preco");

const validade =
    document.getElementById("validade");

const produtoMovimentacao =
    document.getElementById("produtoMovimentacao");

const tipoMovimentacao =
    document.getElementById("tipoMovimentacao");

const quantidadeMovimentacao =
    document.getElementById("quantidadeMovimentacao");

const dataMovimentacao =
    document.getElementById("dataMovimentacao");

const observacao =
    document.getElementById("observacao");

const tabelaProdutos =
    document.getElementById("tabelaProdutos");

const tabelaMovimentacoes =
    document.getElementById("tabelaMovimentacoes");

const pesquisa =
    document.getElementById("pesquisa");

const jsonVisualizacao =
    document.getElementById("jsonVisualizacao");

const arquivoImportar =
    document.getElementById("arquivoImportar");

const btnCancelarEdicao =
    document.getElementById("btnCancelarEdicao");


/* =========================================================
   DATA ATUAL
   ========================================================= */

function dataHoje() {

    const agora = new Date();

    const ano = agora.getFullYear();

    const mes = String(
        agora.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        agora.getDate()
    ).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

dataMovimentacao.value = dataHoje();


/* =========================================================
   CARREGAR DADOS
   ========================================================= */

function carregarDados() {

    const dadosSalvos =
        localStorage.getItem(STORAGE_KEY);

    if (!dadosSalvos) {

        return {
            produtos: [],
            movimentacoes: []
        };
    }

    try {

        const dadosConvertidos =
            JSON.parse(dadosSalvos);

        return {

            produtos:
                Array.isArray(dadosConvertidos.produtos)
                    ? dadosConvertidos.produtos
                    : [],

            movimentacoes:
                Array.isArray(dadosConvertidos.movimentacoes)
                    ? dadosConvertidos.movimentacoes
                    : []

        };

    } catch (erro) {

        console.error(
            "Erro ao carregar dados:",
            erro
        );

        return {
            produtos: [],
            movimentacoes: []
        };
    }
}


/* =========================================================
   SALVAR LOCALMENTE
   ========================================================= */

function salvarDados() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(dados)
    );

    atualizarTela();
}


/* =========================================================
   CALCULAR SALDO
   ========================================================= */

function calcularSaldo(produtoId) {

    let saldo = 0;

    const movimentos =
        dados.movimentacoes.filter(
            movimento =>
                movimento.produtoId === produtoId
        );

    movimentos.forEach(movimento => {

        if (movimento.tipo === "entrada") {

            saldo += Number(
                movimento.quantidade
            );

        }

        if (movimento.tipo === "saida") {

            saldo -= Number(
                movimento.quantidade
            );

        }

    });

    return saldo;
}


/* =========================================================
   FORMATAR MOEDA
   ========================================================= */

function formatarMoeda(valor) {

    return Number(valor || 0)
        .toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );
}


/* =========================================================
   FORMATAR DATA
   ========================================================= */

function formatarData(data) {

    if (!data) {
        return "-";
    }

    const partes =
        data.split("-");

    if (partes.length !== 3) {
        return data;
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


/* =========================================================
   CADASTRAR / EDITAR PRODUTO
   ========================================================= */

formProduto.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const nomeProduto =
            nome.value.trim();

        const categoriaProduto =
            categoria.value;

        const unidadeProduto =
            unidade.value;

        const precoProduto =
            Number(preco.value);

        const validadeProduto =
            validade.value;


        if (!nomeProduto) {

            alert(
                "Digite o nome do produto."
            );

            return;
        }


        if (!categoriaProduto) {

            alert(
                "Selecione uma categoria."
            );

            return;
        }


        if (!unidadeProduto) {

            alert(
                "Selecione a unidade."
            );

            return;
        }


        if (
            Number.isNaN(precoProduto) ||
            precoProduto < 0
        ) {

            alert(
                "Digite um preço válido."
            );

            return;
        }


        /* EDITAR */

        if (produtoEmEdicao !== null) {

            const produto =
                dados.produtos.find(
                    item =>
                        item.id === produtoEmEdicao
                );

            if (produto) {

                produto.nome =
                    nomeProduto;

                produto.categoria =
                    categoriaProduto;

                produto.unidade =
                    unidadeProduto;

                produto.preco =
                    precoProduto;

                produto.validade =
                    validadeProduto;
            }


            alert(
                "Produto atualizado com sucesso!"
            );

            produtoEmEdicao = null;

            btnCancelarEdicao.style.display =
                "none";

            formProduto.querySelector(
                "button[type='submit']"
            ).textContent =
                "➕ Cadastrar Produto";

        }

        /* CADASTRAR */

        else {

            const produto = {

                id: Date.now(),

                nome: nomeProduto,

                categoria:
                    categoriaProduto,

                unidade:
                    unidadeProduto,

                preco:
                    precoProduto,

                validade:
                    validadeProduto
            };


            dados.produtos.push(produto);


            alert(
                "Produto cadastrado com sucesso!"
            );
        }


        salvarDados();

        formProduto.reset();
    }
);


/* =========================================================
   CANCELAR EDIÇÃO
   ========================================================= */

btnCancelarEdicao.addEventListener(
    "click",
    function() {

        produtoEmEdicao = null;

        formProduto.reset();

        btnCancelarEdicao.style.display =
            "none";

        formProduto.querySelector(
            "button[type='submit']"
        ).textContent =
            "➕ Cadastrar Produto";
    }
);


/* =========================================================
   REGISTRAR MOVIMENTAÇÃO
   ========================================================= */

formMovimentacao.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const produtoId =
            Number(
                produtoMovimentacao.value
            );

        const tipo =
            tipoMovimentacao.value;

        const quantidade =
            Number(
                quantidadeMovimentacao.value
            );

        const data =
            dataMovimentacao.value;

        const observacaoTexto =
            observacao.value.trim();


        if (!produtoId) {

            alert(
                "Selecione um produto."
            );

            return;
        }


        if (
            Number.isNaN(quantidade) ||
            quantidade <= 0
        ) {

            alert(
                "Digite uma quantidade válida."
            );

            return;
        }


        const saldoAtual =
            calcularSaldo(produtoId);


        /* IMPEDIR ESTOQUE NEGATIVO */

        if (
            tipo === "saida" &&
            quantidade > saldoAtual
        ) {

            alert(
                `Estoque insuficiente.\n\n` +
                `Saldo atual: ${saldoAtual}`
            );

            return;
        }


        const movimento = {

            id: Date.now(),

            produtoId:
                produtoId,

            tipo:
                tipo,

            quantidade:
                quantidade,

            data:
                data,

            observacao:
                observacaoTexto
        };


        dados.movimentacoes.push(
            movimento
        );


        salvarDados();


        alert(
            "Movimentação registrada com sucesso!"
        );


        formMovimentacao.reset();

        dataMovimentacao.value =
            dataHoje();

    }
);


/* =========================================================
   ATUALIZAR SELECT DE PRODUTOS
   ========================================================= */

function atualizarSelectProdutos() {

    produtoMovimentacao.innerHTML =
        '<option value="">Selecione o produto</option>';


    dados.produtos.forEach(produto => {

        const option =
            document.createElement("option");

        option.value =
            produto.id;

        option.textContent =
            `${produto.nome} (${produto.unidade})`;

        produtoMovimentacao.appendChild(
            option
        );

    });
}


/* =========================================================
   RENDERIZAR PRODUTOS
   ========================================================= */

function renderizarProdutos() {

    const termo =
        pesquisa.value
            .trim()
            .toLowerCase();


    tabelaProdutos.innerHTML = "";


    const produtosFiltrados =
        dados.produtos.filter(produto =>
            produto.nome
                .toLowerCase()
                .includes(termo) ||
            produto.categoria
                .toLowerCase()
                .includes(termo)
        );


    if (
        produtosFiltrados.length === 0
    ) {

        document.getElementById(
            "semProdutos"
        ).style.display = "block";

        return;

    } else {

        document.getElementById(
            "semProdutos"
        ).style.display = "none";
    }


    produtosFiltrados.forEach(produto => {

        const saldo =
            calcularSaldo(produto.id);

        const valorEstoque =
            saldo *
            Number(produto.preco);


        let classeSaldo =
            "badge-estoque";


        if (saldo === 0) {

            classeSaldo =
                "badge-zero";

        } else if (saldo <= 2) {

            classeSaldo =
                "badge-baixo";
        }


        const tr =
            document.createElement("tr");


        tr.innerHTML = `

            <td>
                <strong>
                    ${escaparHTML(produto.nome)}
                </strong>
            </td>

            <td>
                ${escaparHTML(produto.categoria)}
            </td>

            <td>
                ${escaparHTML(produto.unidade)}
            </td>

            <td>
                <span class="badge ${classeSaldo}">
                    ${saldo}
                </span>
            </td>

            <td>
                ${formatarMoeda(produto.preco)}
            </td>

            <td>
                ${formatarMoeda(valorEstoque)}
            </td>

            <td>
                ${formatarData(produto.validade)}
            </td>

            <td>

                <button
                    class="btn-small btn-editar"
                    onclick="editarProduto(${produto.id})"
                >
                    ✏️
                </button>

                <button
                    class="btn-small btn-excluir"
                    onclick="excluirProduto(${produto.id})"
                >
                    🗑️
                </button>

            </td>

        `;


        tabelaProdutos.appendChild(tr);

    });
}


/* =========================================================
   EDITAR PRODUTO
   ========================================================= */

function editarProduto(id) {

    const produto =
        dados.produtos.find(
            item => item.id === id
        );


    if (!produto) {
        return;
    }


    produtoEmEdicao = id;


    nome.value =
        produto.nome;

    categoria.value =
        produto.categoria;

    unidade.value =
        produto.unidade;

    preco.value =
        produto.preco;

    validade.value =
        produto.validade || "";


    btnCancelarEdicao.style.display =
        "inline-block";


    formProduto.querySelector(
        "button[type='submit']"
    ).textContent =
        "💾 Salvar alteração";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   EXCLUIR PRODUTO
   ========================================================= */

function excluirProduto(id) {

    const possuiMovimentacao =
        dados.movimentacoes.some(
            movimento =>
                movimento.produtoId === id
        );


    if (possuiMovimentacao) {

        alert(
            "Este produto possui movimentações " +
            "registradas e não pode ser excluído."
        );

        return;
    }


    const confirmar =
        confirm(
            "Deseja realmente excluir este produto?"
        );


    if (!confirmar) {
        return;
    }


    dados.produtos =
        dados.produtos.filter(
            produto =>
                produto.id !== id
        );


    salvarDados();
}


/* =========================================================
   HISTÓRICO
   ========================================================= */

function renderizarMovimentacoes() {

    tabelaMovimentacoes.innerHTML = "";


    if (
        dados.movimentacoes.length === 0
    ) {

        document.getElementById(
            "semMovimentacoes"
        ).style.display = "block";

        return;

    } else {

        document.getElementById(
            "semMovimentacoes"
        ).style.display = "none";
    }


    const movimentos =
        [...dados.movimentacoes]
            .sort(
                (a, b) =>
                    b.id - a.id
            );


    movimentos.forEach(movimento => {

        const produto =
            dados.produtos.find(
                item =>
                    item.id ===
                    movimento.produtoId
            );


        if (!produto) {
            return;
        }


        const tr =
            document.createElement("tr");


        const classe =
            movimento.tipo === "entrada"
                ? "badge-entrada"
                : "badge-saida";


        const textoTipo =
            movimento.tipo === "entrada"
                ? "➕ Entrada"
                : "➖ Saída";


        tr.innerHTML = `

            <td>
                ${formatarData(movimento.data)}
            </td>

            <td>
                ${escaparHTML(produto.nome)}
            </td>

            <td>
                <span class="badge ${classe}">
                    ${textoTipo}
                </span>
            </td>

            <td>
                ${movimento.quantidade}
                ${escaparHTML(produto.unidade)}
            </td>

            <td>
                ${escaparHTML(
                    movimento.observacao || "-"
                )}
            </td>

            <td>

                <button
                    class="btn-small btn-excluir"
                    onclick="excluirMovimentacao(${movimento.id})"
                >
                    🗑️
                </button>

            </td>

        `;


        tabelaMovimentacoes.appendChild(tr);

    });
}


/* =========================================================
   EXCLUIR MOVIMENTAÇÃO
   ========================================================= */

function excluirMovimentacao(id) {

    const movimento =
        dados.movimentacoes.find(
            item =>
                item.id === id
        );


    if (!movimento) {
        return;
    }


    const confirmar =
        confirm(
            "Deseja excluir esta movimentação?"
        );


    if (!confirmar) {
        return;
    }


    dados.movimentacoes =
        dados.movimentacoes.filter(
            item =>
                item.id !== id
        );


    salvarDados();
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function atualizarDashboard() {

    const totalProdutos =
        dados.produtos.length;


    let totalItens = 0;

    let valorTotal = 0;


    dados.produtos.forEach(produto => {

        const saldo =
            calcularSaldo(produto.id);


        totalItens += saldo;


        valorTotal +=
            saldo *
            Number(produto.preco);

    });


    document.getElementById(
        "totalProdutos"
    ).textContent =
        totalProdutos;


    document.getElementById(
        "totalItens"
    ).textContent =
        totalItens;


    document.getElementById(
        "totalMovimentacoes"
    ).textContent =
        dados.movimentacoes.length;


    document.getElementById(
        "valorEstoque"
    ).textContent =
        formatarMoeda(valorTotal);
}


/* =========================================================
   GERAR JSON
   ========================================================= */

function gerarJSON() {

    const produtos =
        dados.produtos.map(produto => {

            const saldo =
                calcularSaldo(produto.id);


            return {

                id:
                    produto.id,

                nome:
                    produto.nome,

                categoria:
                    produto.categoria,

                unidade:
                    produto.unidade,

                preco:
                    Number(produto.preco),

                validade:
                    produto.validade,

                saldoAtual:
                    saldo,

                valorEstoque:
                    saldo *
                    Number(produto.preco)

            };

        });


    let totalItens = 0;

    let valorEstoque = 0;


    produtos.forEach(produto => {

        totalItens +=
            produto.saldoAtual;

        valorEstoque +=
            produto.valorEstoque;

    });


    return {

        sistema:
            "Controle de Estoque",

        versao:
            "1.0",

        dataExportacao:
            new Date().toISOString(),

        resumo: {

            totalProdutos:
                produtos.length,

            totalMovimentacoes:
                dados.movimentacoes.length,

            totalItens:
                totalItens,

            valorEstoque:
                valorEstoque

        },

        produtos:
            produtos,

        movimentacoes:
            dados.movimentacoes

    };
}


/* =========================================================
   ATUALIZAR JSON NA TELA
   ========================================================= */

function atualizarJSON() {

    const objetoJSON =
        gerarJSON();


    jsonVisualizacao.textContent =
        JSON.stringify(
            objetoJSON,
            null,
            4
        );
}


/* =========================================================
   EXPORTAR JSON
   ========================================================= */

document.getElementById(
    "btnExportar"
).addEventListener(
    "click",
    function() {

        const objetoJSON =
            gerarJSON();


        const conteudo =
            JSON.stringify(
                objetoJSON,
                null,
                4
            );


        const blob =
            new Blob(
                [conteudo],
                {
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href =
            url;


        const data =
            dataHoje();


        link.download =
            `estoque_${data}.json`;


        document.body.appendChild(link);


        link.click();


        link.remove();


        URL.revokeObjectURL(url);

    }
);


/* =========================================================
   COPIAR JSON
   ========================================================= */

document.getElementById(
    "btnCopiar"
).addEventListener(
    "click",
    async function() {

        const texto =
            JSON.stringify(
                gerarJSON(),
                null,
                4
            );


        try {

            await navigator.clipboard.writeText(
                texto
            );

            alert(
                "JSON copiado!"
            );

        } catch (erro) {

            alert(
                "Não foi possível copiar."
            );
        }

    }
);


/* =========================================================
   IMPORTAR JSON
   ========================================================= */

arquivoImportar.addEventListener(
    "change",
    function(event) {

        const arquivo =
            event.target.files[0];


        if (!arquivo) {
            return;
        }


        const leitor =
            new FileReader();


        leitor.onload =
            function(e) {

                try {

                    const importado =
                        JSON.parse(
                            e.target.result
                        );


                    if (
                        !Array.isArray(
                            importado.produtos
                        ) ||
                        !Array.isArray(
                            importado.movimentacoes
                        )
                    ) {

                        throw new Error(
                            "Formato inválido"
                        );
                    }


                    const confirmar =
                        confirm(
                            "Importar este arquivo substituirá os dados atuais. Continuar?"
                        );


                    if (!confirmar) {
                        return;
                    }


                    dados = {

                        produtos:
                            importado.produtos,

                        movimentacoes:
                            importado.movimentacoes

                    };


                    localStorage.setItem(
                        STORAGE_KEY,
                        JSON.stringify(dados)
                    );


                    atualizarTela();


                    alert(
                        "Dados importados com sucesso!"
                    );


                } catch (erro) {

                    alert(
                        "Arquivo JSON inválido."
                    );

                    console.error(erro);
                }

            };


        leitor.readAsText(arquivo);

        event.target.value = "";

    }
);


/* =========================================================
   LIMPAR DADOS
   ========================================================= */

document.getElementById(
    "btnLimpar"
).addEventListener(
    "click",
    function() {

        const confirmar =
            confirm(
                "ATENÇÃO!\n\n" +
                "Todos os produtos e movimentações serão apagados.\n\n" +
                "Deseja continuar?"
            );


        if (!confirmar) {
            return;
        }


        dados = {

            produtos: [],

            movimentacoes: []

        };


        localStorage.removeItem(
            STORAGE_KEY
        );


        atualizarTela();


        alert(
            "Todos os dados foram apagados."
        );
    }
);


/* =========================================================
   PESQUISA
   ========================================================= */

pesquisa.addEventListener(
    "input",
    function() {

        renderizarProdutos();

    }
);


/* =========================================================
   ESCAPAR HTML
   ========================================================= */

function escaparHTML(texto) {

    const div =
        document.createElement("div");

    div.textContent =
        texto ?? "";

    return div.innerHTML;
}


/* =========================================================
   ATUALIZAR TODA A TELA
   ========================================================= */

function atualizarTela() {

    atualizarSelectProdutos();

    renderizarProdutos();

    renderizarMovimentacoes();

    atualizarDashboard();

    atualizarJSON();
}


/* =========================================================
   INICIAR SISTEMA
   ========================================================= */

atualizarTela();