import "../styles/Section3.css"
import divisao from "/divisao.svg"
import arca_hub from '/arcahub_local.webp'
import campus_fiap from '/campus_fiap.png'

export default function Section3() {
    return (
        <div className="Section3">
            <img src={divisao} alt="divisão de sections do site" />

            <div className="Section3-titulo">
                <h3>Cronograma</h3>
                <h5>A Python Sudeste 2026 é composta por 2 tipos de atividades: tutoriais e palestras</h5>
            </div>

            <div className="Section3-todas-datas">
                <div className="Section3-data">
                    <h6>Tutoriais e Palestras</h6>
                    <h6>24 a 26 de Julho</h6>
                    <p>Os tutoriais são cursos práticos que acontecem no primeiro dia do evento, com duração de 4 horas.</p>
                    <div className="Section3-data-local">
                        <h6>Local:</h6>
                        <h6>Campus da FIAP</h6>
                        <img src={campus_fiap} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}