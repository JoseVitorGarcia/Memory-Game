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
    }

}