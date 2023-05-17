import FunctionB from "./FunctionB"

const FunctionA = () =>{
    return(
        <>
            <h1>Componente A</h1>
            <FunctionB
                x={10}
                y={5}
            />
        </>
    )
}

export default FunctionA