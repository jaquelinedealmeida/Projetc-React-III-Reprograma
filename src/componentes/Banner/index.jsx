import React from 'react'

import Img from '../../assetes/image.svg'
import './styles.css'

const Banner = () => {
    return(

        <div className="main">
            <div>
            <h1>My Happy Site</h1>
            <h4>Minha linda página feita em React, Axios e React-Dom-Routes para a Décima Sexta Semana 
                do curso de Desenvolvimento Front-End Reprograma.</h4>
        </div>
        <img src={Img} alt="Ilustração de Mulheres Trabalhando Juntas" />
    </div>
    )

}

export default Banner