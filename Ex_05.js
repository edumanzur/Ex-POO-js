function ContaBancaria(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
    this.depositar = function(quant) {
        saldo = saldo + quant;
        this.saldo = saldo;
    }
    this.sacar = function(menos) {
        if(saldo >= menos) {
            saldo = saldo - menos;
            this.saldo = saldo;
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}

let eu = new ContaBancaria("Eduardo", 5000);
eu.sacar(5100);
eu.sacar(4000);
eu.depositar(500);
console.log(eu.saldo);