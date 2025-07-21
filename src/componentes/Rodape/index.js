import './rodape.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Rodape = () => {
    return (<footer className="footer" style={{backgroundImage: 'url(/imagens/fundo.png)'}}>
       <section>
       <ul>
            <li>
                <a href="https://www.linkedin.com/in/joaocandidomessias" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="https://github.com/Joao-candido-messias/organo" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/messias_og?igsh=cHpodWU5eTBlMzI4" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por João Messias.
        </p>
       </section>
    </footer>)
}

export default Rodape