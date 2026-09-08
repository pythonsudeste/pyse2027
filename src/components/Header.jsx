import logo from "/logo_pyse_1.PNG"
import "./styles/Header.css"
import { Link } from "react-router-dom"
import { linksTicketSaleSite } from "../Links"

export default function Header() {
    return(
        <div className="Header">
            <div className="Header-ingresso">
                <Link to="/"><img src={logo} alt="Logo Python sudeste" /></Link>
                <Link to={linksTicketSaleSite} target="_blank"><button>Ingressos aqui!</button></Link>
            </div>
            <div className="Header-rotas">
                <Link to="/sobre"><h4>Sobre o Evento</h4></Link>
                <Link to="/local"><h4>Local</h4></Link>
                <Link to="/programation-panel"><h4>Programação</h4></Link>
            </div>
        </div>
    )
}