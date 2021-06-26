import React from 'react'
import Img1 from '../../assetes/img1-github.svg'
import Img2 from '../../assetes/img2-linkedin.svg'
import Img3 from '../../assetes/img3-instagram.svg'

import './styles.css'

const Footer = () => {
    return(

        <div className="footer">
            <div>
            <p>Produzido por <strong>Jaqueline de Almeida</strong> para a Aula III de React da Reprograma, 2021</p>
        </div>
            <div class="logo_link">

                <a className="Link" href="https://github.com/jaquelinedealmeida" >
                    <img src={Img1} alt="Logo Github" />
                </a>

                <a className="Link" href="https://www.linkedin.com/in/jaqueline-de-almeida/">
                    <img src={Img2} alt="Logo Linkedin" />
                </a>
                
                <a className="Link" href="https://instagram.com/mahuwacomunicacaoecuidado/" >
                     <img src={Img3} alt="Logo Instagram" />
                </a>
                
         </div>
        
    </div>
    )

}

export default Footer