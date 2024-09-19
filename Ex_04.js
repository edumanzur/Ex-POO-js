function Retangulo(altura, largura) {
    this.largura = largura;
    this.altura = altura;
    this.area = function() {
        return largura * altura;
    }
}

let area = new Retangulo(5, 4);

console.log(area.area());