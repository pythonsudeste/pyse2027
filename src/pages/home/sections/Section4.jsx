import '../styles/Section4.css'
import img from "/logo_pyse_1.PNG?url"
import { Link } from 'react-router-dom'
import { linksTicketSaleSite } from '../../../Links'

export default function Section4() {
    return (
        <div className="Section4">
            <div className='Section4-itens-1'>
                <img src={img} alt="Logo da python sudeste" />
                <div className='Section4-itens-texto-1'>
                    <h4>Faça parte da Python Sudeste 2026!</h4>
                    <p>Compre agora seu ingresso e garanta a sua participação no nosso evento.</p>
                    <a href={linksTicketSaleSite} target="_blank">
                        <button>Comprar Ingresso</button>
                    </a>
                </div>
            </div>
            <div className='Section4-itens-2'>
                <img src={img} alt="Logo da python sudeste" />
                <div className='Section4-itens-texto-2'>
                    <h4>Confira a Agenda Completa!</h4>
                    <p>Veja todos os detalhes da programação da Python Sudeste 2026 e não perca nenhuma atividade.</p>
                    <Link to="/programation-panel"><button>Acessar Agenda</button></Link>
                </div>
            </div>
        </div>
    )
}