import { cloneElement } from "react"
import { Children } from "react"

/*
const SuperMercado = ({ children, nome }) => {
    return (
        <>
            <h1>Supermercado {nome}</h1>
            {children}
        </>
    )
}
*/
/*
const SuperMercado = ({ children, nome }) => {
    return (
        <>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(children, filho =>
                    <div style={{ backgroundColor: "Red" }}>
                        {filho}
                    </div>
                )
            }
        </>
    )
}
*/
const SuperMercado = ({ children, nome }) => {
    return (
        <>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(children, filho =>
                   cloneElement(filho, {supermercado:nome})
                )
            }
        </>
    )
}
const Legume = ({ nome }) =>
    <>
        <h3>Legume {nome}</h3>
    </>

const Fruta = ({ nome }) =>
    <>
        <h3>Legume {nome}</h3>
    </>

const Bebida = ({ nome }) =>
    <>
        <h3>Legume {nome}</h3>
    </>

export { SuperMercado, Legume, Fruta, Bebida }