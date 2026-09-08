import '../styles/Section1.css'
import banner from '/banner_section_1.png'
import bannerMobile from '/banner-mobile.png'
import { linksTicketSaleSite } from '../../../Links'

export default function section1() {
    return (
        <div className="section1">
            <img src={banner} alt="Banner PythonSudeste" className="section1-bannerDesktop"/>
            <img src={bannerMobile} alt="Banner PythonSudeste" className="section1-bannerMobile"/>

            <div className="section1-aba-ingressos">
                <h1>Compre seu ingresso para Python Sudeste</h1>
                <h2>Primeiro lote da Python Sudeste liberado</h2>
                <a href={linksTicketSaleSite} target="_blank">
                    <button>Compre aqui!</button>
                </a>
            </div>
        </div>
    )
}