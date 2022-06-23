class JogoDaMemoria {

    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [

            { img: './archives/gollum.png', nome: 'gollum' },
            { img: './archives/gandalf.png', nome: 'gandalf' },
            { img: './archives/frodo.png', nome: 'frodo' },
            { img: './archives/legolas.png', nome: 'legolas' },
        ]

        this.iconePadrao = './archives/random.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []

    }


    inicializar() {

        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        console.log(`Iniciou de boas`)
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }



    embaralhar() {
        const copias = this.heroisIniciais
            .concat(this.heroisIniciais)

            .map(item => {
                return Object.assign({}, item, { id: Math.random() / 0.5 })
            })
            .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }
    exibirHeroi(nomedoHeroi){
        const {img} = this.heroisIniciais.find(({nome}) => nomedoHeroi === nome)
        this.tela.exibirHeroi(nomedoHeroi,img)

    }
    verificarSelecao(id, nome) {
        const item = { id, nome }
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                this.heroisSelecionados.push(item)
                break;
            case 1:
                const [opcao1] = this.heroisSelecionados
                this.heroisSelecionados = []
                if (opcao1.nome === item.nome && opcao1.id !== item.id) {
                    this.exibirHeroi(item.nome)
                    this.tela.exibirMensagem()
                    return
                }
                this.tela.exibirMensagem(false)
            break;

        }
    }

    jogar() {
        this.embaralhar()
        console.log(`Tudo certo`)
    }

    esconderHerois(herois) {
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao

        }))

        this.tela.atualizarImagens(heroisOcultos)
        this.heroisOcultos = heroisOcultos

    }

}