import { useState, useEffect } from 'react' 

function Questao02() {
    /* useState para o pikachu de frente para facilitar a alternancia */
    const [frente, setFrente] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png') 
    /* useState para o pikachu de costas para facilitar a alternancia */
    const [costa, setCosta] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png') 
    const [imagemMostrada, setimagemMostrada] = useState(frente) 

    useEffect(() => {
        receberImagens() 
    }, []) 

    const receberImagens = () => {
        fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')
            // Responsavel por converter a imagem da API em JSON
            .then(response => response.json())
            .then(data => {
                setFrente(data.url) 
                setimagemMostrada(data.url) 

            })
            .catch(error => {
                console.error(error) 

            }) 

        fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png')
            // Responsavel por converter a imagem da API em JSON
            .then(response => response.json())
            .then(data => {
                setCosta(data.url) 
            })
            .catch(error => {
                console.error(error) 
            }) 
    } 

    const alternar = () => {
        /* Função responsavel pela alternancia do pikachu */
        setimagemMostrada(imagemMostrada === frente ? costa : frente) 
    } 

    return (
        <div>
            <>
                <img src={imagemMostrada}/>
                <button onClick={alternar}>Alternar Imagem</button>
            </>
        </div>
    ) 
}

export default Questao02 