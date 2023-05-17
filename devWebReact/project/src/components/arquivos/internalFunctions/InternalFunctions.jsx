/*
* Nesse arquivo vamos começar os estudo e enterdermos como funciona os diferentes tipos de modos de definições de funções no JSX.
*/


// Metodo 1
// Note que eu usei <div> </div> como se fosse um abrir e fehcar de chaves, isso so é possivel se você busca retornar somente uma instrução

/*
function InternalFunctions() {
    return <div>
        <h1>
            Esse é o primeiro método de criação de função.
        </h1>
    </div>
}
*/

// Metodo 2
// Caso você queira quebrar a linha terá que usar o ( ) para usar o return. O nome disto <></> se chama fragmento

/*
function InternalFunctions() {

    return (
        <>
            <h1>
                Esse é o segundo método de criação de função.
            </h1>
        </>
    );
}
*/

// Metodo 3
// Nesse metodo você usa uma tecnica de função Seta =>
const InternalFunctions = () => {
    let x = 1
    let y = 1
    let res = x+y
    return (
        <>
            <h1>Esse é o terceiro método de criação de função. {res}</h1>
        </>
    )
}
export default InternalFunctions