/* 
* Estudo de Props
*/
// Versão 1 Props.
// Mostrando diferença do uso de props e de funções <h1> Uso somente função ja no <h2> Uso props
/*
const MyProps = (props) => {
    const response = () => {
        return (
            <span>PROOOOOPS ! ! ! ! ainda nao é props ;-;</span>
        )
    }
    return(
        <>
            <h1> Esse é o estudo de: {response()} </h1>
            <h1> Esse é o estudo de: {props.response}</h1>
        </>
    )
}
*/
const MyProps = (props) => {
    const {primeiraprops, segundaprops, terceiraprops, numeroprops} = props
    // Para nao precisar colocar {props.NOME_DA_PROPRIEDADE} usamos a linha acima para desconstruir.
    return (
        <>
            <h1> Esse é o estudo de: {primeiraprops}</h1>
            <h1> Posso usar mais de uma props: {segundaprops}</h1>
            <h1> Qual o limite de props: {terceiraprops}</h1>
            <h1> Com numero as props tambem funcionam: {numeroprops}</h1>
        </>
    )
}
export default MyProps