class JogoDaMemoria {
   
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
           
            { img: './archives/gollum.png', nome: 'gollum'},
            { img: './archives/gandalf.png', nome: 'gandalf'},
            { img: './archives/frodo.png', nome: 'frodo'},
            { img: './archives/legolas.png', nome: 'legolas'},
        ]
        
        this.iconePadrao= './archives/random.png'
        this.heroisEscondidos= []

    }

 
    inicializar() {
    
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        console.log(`Iniciou de boas`)
    }

    

    embaralhar(){
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
       
        .map(item=> {
            return Object.assign({}, item,{id: Math.random() / 0.5})
        })
        .sort(()=> Math.random()-0.5)
        this.tela.atualizarImagens(copias)
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }

    jogar(){
        this.embaralhar()
        console.log(`Tudo certo`)
    }

    esconderHerois(herois){
        const heroisOcultos= herois.map(({nome, id})=>({
            id,
            nome,
            img: this.iconePadrao

        }))

this.tela.atualizarImagens(heroisOcultos)
this.heroisOcultos= heroisOcultos

    }

}