import './styles/Carregamento.css'
import logo from "/logo_pyse_1.PNG"

export default function Carregamento() {
    return (<>
        <div className='Carregamento'>
            <img src={logo} alt="" />
            <h4>Carregando...</h4>
        </div>
    </>)
}