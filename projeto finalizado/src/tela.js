const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BOTAO_JOGAR = "startHere"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIBLE = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"
const ID_BTNMOSTRATUDO = "showAll"
const ID_FINAL = "final"
const MENSAGENS = {
    sucesso: {
        texto: ' Combinação correta!',
        classe: 'alert-sucess'
    },
    erro: {
        texto: ' Combinação incorreta!',
        classe: 'alert-danger'
    }
}

class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}','${item.nome}')">
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
            <br />
        </div> 
        `
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(data) {
        return data.map(Tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BOTAO_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificarSelecao = funcaoOnClick
    }
    static exibirHeroi(nomedoHeroi, img) {
        const elementosHtml = document.getElementsByName(nomedoHeroi)
        elementosHtml.forEach(item => (item.src = img))
    }
    static async exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if (sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIBLE)
        await util.timeout(2000)
        elemento.classList.add(CLASSE_INVISIBLE)
    }

    static exibirCarregando(mostrar = true) {
        const carregando = document.getElementById(ID_CARREGANDO)
        if (mostrar) {
            carregando.classList.remove(CLASSE_INVISIBLE)
            return;
        }
        carregando.classList.add(CLASSE_INVISIBLE)
    }

    static iniciarContador() {
        let contarAte = 3
        const elementoContador = document.getElementById(ID_CONTADOR)
        const identificadorTexto = "$$contador"
        const textoPadrao = `Começando em ${identificadorTexto} segundos...`
        const atualizarTexto = () =>
            (elementoContador.innerHTML = textoPadrao.replace(identificadorTexto, contarAte--))

        atualizarTexto()
        const idDoIntervalo = setInterval(atualizarTexto, 1000)
        return idDoIntervalo
    }

    static limparContador(idDoIntervalo) {
        clearInterval(idDoIntervalo)
        document.getElementById(ID_CONTADOR).innerHTML = ""
    }

    static configurarBotaoMostrarTudo(funcaoOnClick) {
        const btnMostrarTudo = document.getElementById(ID_BTNMOSTRATUDO)
        btnMostrarTudo.onclick = funcaoOnClick
    }

   


}
