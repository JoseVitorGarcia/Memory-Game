class JogoDaMemoria {
   
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
           
            { img: './archives/gollum.png', nome: 'gollum'},
            { img: './archives/gandalf.png', nome: 'gandalf'},
            { img: './archives/frodo.png', nome: 'frodo'},
            { img: './archives/legolas.png', nome: 'legolas'},
        ]
        
    }

 
    inicializar() {
    
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        console.log(`Iniciou de boas`)
    }

    jogar(){
        this.embaralhar()
        console.log(`Tudo certo`)
    }

    embaralhar(){
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
       
        .map(item=> {
            return Object.assign({}, item,{id: Math.random() / 0.5})
        })
        .sort(()=> Math.random()-0.5)
        this.tela.atualizarImagens(copias)
    }

}