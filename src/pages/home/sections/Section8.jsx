import "../styles/Section8.css"

export default function Section8() {
    return (<>
        <div className="Section8">
            <div className="Section8_itens">
                <div className="Section8_titulo">
                    <h4>Código de Conduta</h4>
                    <h5>Leia o código de conduta da Python Sudeste 2026</h5>
                </div>

                <div className="Section8_texto">
                    <p>Todas as pessoas participantes do evento devem seguir o nosso <a className="Section8_texto_link_externo" href="https://github.com/pythonsudeste/codigo-de-conduta">Código de Conduta.</a></p>
                    <p>Caso você tenha sofrido ou identificado alguma ação que viole o código de conduta, por favor preencha este <a className="Section8_texto_link_externo" href="https://docs.google.com/forms/d/e/1FAIpQLSdL37CNgBiwxvIzjSeAFiCu852gDhT9uVnytjZIX2Nu_KmFVQ/viewform">formulário</a> para que a equipe responsável possa tomar as devidas medidas.</p>
                </div>
            </div>
        </div>
    </>)
}