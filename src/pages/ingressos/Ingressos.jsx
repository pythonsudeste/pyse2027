import "./styles/Ingressos.css"
import { linksTicketSaleSite } from "../../Links"

export default function Ingressos() {
    return(<section className="Ingressos">
        <h3>Hora de correr!</h3>
        <h5>Os ingressos estão liberados!!!</h5>
        <a href={linksTicketSaleSite} target="_blank">
            Comprar ingressos
        </a>
    </section>)
}