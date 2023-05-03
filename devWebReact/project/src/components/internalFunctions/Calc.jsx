/*
* Calculadora simples para exercitar os estudos de Internal Functions. 
*/

const Calculadora = () => {

    const Somar = (x, y) => {
        return x + y
    }
    const Subtrair = (x, y) => {
        return x - y
    }
    const Multiplicar = (x, y) => {
        return x * y
    }
    const Dividir = (x, y) => {
        return x / y
    }
    return (
        <>
            <h1>SOMA: {Somar(10, 10)}</h1>
            <h1>SUBTRAÇÃO: {Subtrair(10, 5)}</h1>
            <h1>MULTIPLICAÇÃO: {Multiplicar(10, 10)}</h1>
            <h1>DIVISÃO: {Dividir(50,5)}</h1>
        </>
    )
}

export default Calculadora