import React, {useState, useEffect} from 'react'
import Menu from '../../componentes/Menu'
import Footer from '../../componentes/Footer'

import Axios from 'axios'
import './styles.css'

const Simpsons = () => {
     const [personagem, setPersonagem] = useState([])
     const [clique, setClique] = useState(()=>{})
    
     useEffect(()=> {
         const pegaDados = async ()=> {
            const resposta = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            const dados = await resposta.data 
            setPersonagem(dados)
            //console.log(resposta)//para ver o retorno da api
        }
         pegaDados()
     },[clique])

     function ligaClique(){
         setClique(personagem)
     }
     
     return (
            <>
               <Menu/>
            <div className="main-simpson">
               {personagem.map(perso => {
                   return(
                       <div className="card">
                     <p>{perso.character}</p>
                    <img src={perso.image} alt="personagem simpson"/> 
                    </div>
                    )
               })}
                <button onClick={ligaClique}>Clique para trocar de personagem</button>
            </div>

            <Footer/>
        </>
            
        )
}

export default Simpsons