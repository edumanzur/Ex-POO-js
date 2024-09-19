function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

let carro = new Carro("toyota", "corolla", 2005);

carro.cor = "preto";

carro.ano = 2014;

console.log(carro);