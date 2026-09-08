import divisao from '/divisao.svg'
import '../styles/Section7.css'

export default function Section7() {
    return(
        <div className="Section7">
            <img src={divisao} alt='Divisão de seções' />

            <div className='Section7-texto'>
                <h4>Como Patrocinar a Python Sudeste</h4>
                <h5>Consulte nosso plano de patrocinio, e ajude essa comunidade que cresce mais a cada dia!</h5>
                <a  href="https://www.canva.com/design/DAG2zl6Zfu8/CtUL7bmwfTUdvVBhwsZzMQ/view?utlId=hf77ce17366"
                    target='_blank'>
                    <button>Acesse aqui nosso plano de patrocínio</button>
                </a>
            </div>

            <img src={divisao} alt='Divisão de seções' />
        </div>
    )
}