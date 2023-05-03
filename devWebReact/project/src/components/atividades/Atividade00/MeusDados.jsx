import { Component } from "react";
// 01
//* VERSÃO 01 - Function -
// Versao com Function com return parenteses e fragmento

function MeusDados() {
    return (
        <>
            <h1>Nome: Guilherme Augusto </h1>
            <h1>Curso: Ciência da computação</h1>
            <h1>Universidade: Universidade Federal Do Ceará</h1>
        </>
    )
}


//* VERSÃO 02 - Return, parenteses e fragmento -
// Versão função seta usando return parenteses e fragmento
/*
const MeusDados = () => {
    return(
        <>
            <h1>Nome: Guilherme Augusto </h1>
            <h1>Curso: Ciência da computação</h1>
            <h1>Universidade: Universidade Federal Do Ceará</h1>
        </>
    )
}
*/

//* VERSÃO 03 - Sem Return, Sem Parenteses, Só Fragmento -
// Versão se return usando apenas fragmento.
/*
const MeusDados = () => {
    <>
        <h1>Nome: Guilherme Augusto </h1>
        <h1>Curso: Ciência da computação</h1>
        <h1>Universidade: Universidade Federal Do Ceará</h1>
    </>
}
*/
//* VERSÃO 04 - Class - 
// Versão usando class
/*
class MeusDados extends Component {
    render() {
        return (
            <>
                <h1>Nome: Guilherme Augusto </h1>
                <h1>Curso: Ciência da computação</h1>
                <h1>Universidade: Universidade Federal Do Ceará</h1>
            </>
        )
    }
}
*/
export default MeusDados