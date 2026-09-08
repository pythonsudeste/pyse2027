import { useState } from "react"
import "./styles/TicketsModal.css"
import logo from "/logo_pyse_1.PNG"
import { linksTicketSaleSite } from "../Links"

export default function TicketsModal() {
    const [ isTicketModalOpen , setIsTicketModalOpen ] = useState(true)

    return(
        <div 
            onClick={() => setIsTicketModalOpen(false)}
            className={`TicketsModal ${isTicketModalOpen ? "" : "invisible"}`}
        >
            <div 
                className="TicketsModal_container"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setIsTicketModalOpen(false)}
                >
                        X
                </button>
                <div className="TicketsModal_container_logo">
                    <img src={logo} alt="Logo da python sudeste" />
                </div>
                <div className="TicketsModal_container_texto">
                    <h3>Atenção!</h3>
                    <h4>O primeiro lote está se encerrando.</h4>
                    <h5>Dia 24, sexta-feira, começará a abertura do segundo lote. Então corra para conseguir acessar os ingressos do primeiro lote!!!</h5>
                    <a href={linksTicketSaleSite}>
                        <button>Compre agora!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}