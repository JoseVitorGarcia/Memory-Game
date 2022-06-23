function onLoad() {

const dependencias = {
   tela: Tela
}

const jogoDaMemoria = new JogoDaMemoria(dependencias)
console.log(jogoDaMemoria.tela)
jogoDaMemoria.inicializar()
}
window.onload = onLoad
/**window.addEventListener('load', () => {
 onLoad();
})**/