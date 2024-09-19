function Pessoa(nome, idade, profissao) {
    this.idade = idade;
    this.nome = nome;
    this.profissao = profissao;
    this.apresentar = function() {
        console.log(`Sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
    }
};

const eu = new Pessoa("eduardo", 18, "dev");
eu.apresentar();