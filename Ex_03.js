function Calculadora(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.soma = function() {
        return a + b + c;
    }
}

let soma = new Calculadora(2, 5, 9);

console.log(soma.soma());