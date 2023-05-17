import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto"

const FuncaoA = () => {

    const cor = "red"

    return (
        <CorContexto.Provider value={cor}>
            <>
                <h1 style={{backgroundColor:cor}}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </>
        </CorContexto.Provider>
    )
}
export default FuncaoA