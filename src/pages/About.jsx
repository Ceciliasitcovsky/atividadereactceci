import { Link } from 'react-router-dom'
import fotoceciredonda from '../images/fotoceciredonda.png'

export default function About() {
    return (
        <section>
        
         <div className= 'pagesabout' ></div>
        <h2 className="nomecs">Oiii, sou Cecilia Sitcovsky!</h2>
        <img className= "fotoperfil" src={fotoceciredonda} />
        <ul className='ulperfil'>
            <li>19 anos</li>
            <li>Recifense, bairrista e apaixonada por processos</li>
            <li>Estudante de Sistemas para internet na UNICAP</li>
            <li>Futura turismologa pela UFPE</li>
            <li>Iniciando a jornada de desenvolvedora e sempre disposta a aprender mais sobre tecnologia e inovação</li>
        </ul>
        <h3>Conheça minhas Redes:</h3>
        <p className=""></p>
        <Link className= "linksobre" to = "https://www.instagram.com/csitcovsky/">Instagram </Link>
        <Link className= "linksobre" to = "https://www.linkedin.com/in/ceciliasitcovsky/">Linkedin </Link>
        <Link className= "linksobre" to = "https://github.com/Ceciliasitcovsk" >Github</Link>

       </section>
    )
}