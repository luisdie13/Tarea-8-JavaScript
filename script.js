function crearCuentaBancaria(saldoInicial) {
    var saldo = saldoInicial;
    function depositar (cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        } else {
            console.log("La cantidad a depositar debe ser mayor a cero.");
        }
    }
    function retirar (cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
        } else {
            console.log("La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible.")
        }
    }
    return {
        consultarSaldo: function () {
            return saldo;
        },
        realizaDeposito: function (cantidad) {
            depositar(cantidad);
        },
        realizarRetiro: function(cantidad) {
            retirar(cantidad);
        }
    };
}
var miCuenta = crearCuentaBancaria(1000);
console.log("Saldo inicial: " + miCuenta.consultarSaldo());
miCuenta.realizarDeposito(500);
console.log("Salo despues del deposito: " + miCuenta.consultarSaldo());
miCuenta.realizarRetiro(200);
console.log("Saldo despues del retiro: " + miCuenta.consultarSaldo());

try {
    miCuenta.depositar(100);
} catch (e) {
    console.log(e.message);
} 
try {
    miCuenta.retirar(100);
} catch (e) {
    console.log(e.message);
}