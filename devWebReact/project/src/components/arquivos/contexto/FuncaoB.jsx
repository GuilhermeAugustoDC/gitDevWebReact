import CorContexto from "./MeuContexto"

const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                (cor) => {
                    return (
                        <>
                            <h2 style={{ backgroundColor: cor }}> Função B</h2>
                        </>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}
export default FuncaoB
