import { useState } from 'react';
import './styles/ButaoFlutuante.css'
import { linksTicketSaleSite } from '../Links';
import { Link } from 'react-router-dom'

export default function ButaoFlutuante() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (<>
        <div className={`ButaoFlutuante ${isModalOpen ? "invisivel" : ""}`} onClick={openModal}>
            Menu
        </div>

        <div className={`Modal ${!isModalOpen ? "invisivel" : ""}`}>
            <Link to="/">Inicio</Link>
            <a href={linksTicketSaleSite} target="_blank">Ingressos aqui!</a>
            {/* <Link to="/submissao">Submeta sua Talk</Link> */}
            <Link to="/programation-panel">Programação</Link>
            <Link to="/sobre">Sobre o Evento</Link>
            <Link to="/local">Local</Link>
            <button onClick={closeModal}>Fechar</button>
        </div>
    </>)
}