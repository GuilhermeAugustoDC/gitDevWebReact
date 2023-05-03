// 02
//* Versao com desconstrução separada

const MeusDadosProps = (props) => {
    const { nome, curso, universidade } = props

    return (
        <>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {universidade}</h1>
        </>
    )
}

//* Versao com desconstrução na função seta
/*
const MeusDadosProps = ({ nome, curso, universidade }) => {
    return (
        <>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {universidade}</h1>
        </>
    )
}
*/
export default MeusDadosProps