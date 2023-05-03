import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const YuGiOh = () =>{

    const [id, setId] = useState(6983839)
    const [carta,setCome] = useState("")
    const [imagem,setImagem] = useState("")

    useEffect(
        ()=>{
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
            .then(
                (response) => {
                    console.log(response)
                }
            )
            .catch((error)=>console.log(error))
        }
        ,
        []
    )
    return (
        <>
            <h1>Carta: {carta} </h1>
            <img src={imagem} style={{whidth:"400px"}}/>
        </>
    )

}

export default YuGiOh 