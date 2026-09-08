import calendario_1 from "/submissao/calendario_1.svg"
import calendario_2 from "/submissao/calendario_2.svg"
import calendario_3 from "/submissao/calendario_3.svg"
import "./styles/Submissao.css"

export default function Submissao() {
    return(<section className="Submissao">
        <h3 className="Submissao-h3">O tempo para enviar palestras se encerrou!</h3>
        <h4 className="Submissao-h4">Em breve o resultado será divulgado</h4>
        {/* <h4 className="Submissao-h4">Seja palestrante e faça parte!</h4> */}

        {/* <div className="Submissao-linha2"> */}
            {/* <div className="Submissao-linha2-esquerda"> */}
                {/* <h3>Como participar</h3> */}
                {/* <ul> */}
                    {/* <li> Palestras técnicas sobre Python e seu ecossistema</li> */}
                    {/* <li> Python em diferentes áreas: web, data science, IA, IoT</li> */}
                    {/* <li> Casos de sucesso e experiências práticas</li> */}
                    {/* <li> Tópicos sobre carreira e desenvolvimento profissional</li> */}
                    {/* <li> Iniciativas de diversidade e inclusão na tecnologia</li> */}
                {/* </ul> */}
            {/* </div> */}
{/*  */}
            {/* <div className="Submissao-linha2-direita"> */}
                {/* <h3>Formatos Disponíveis</h3> */}
                {/* <div className="Submissao-linha2-direita-item"> */}
                    {/* <h4>Palestra (20, 30, ou 40min)</h4> */}
                    {/* <p>Apresentações técnicas ou inspiracionais para o público geral.</p> */}
                {/* </div> */}
                {/* <div className="Submissao-linha2-direita-item"> */}
                    {/* <h4>Tutoriais (180min ou 360 min)</h4> */}
                    {/* <p>Sessões práticas e oficinas com atividades interativas.</p> */}
                {/* </div> */}
                {/* <div className="Submissao-linha2-direita-item"> */}
                    {/* <h4>Lightning Talks (5min)</h4> */}
                    {/* <p>Apresentações rápidas e dinâmicas sobre qualquer tópico, inscrições abertas no evento.</p> */}
                {/* </div> */}
            {/* </div> */}
        {/* </div> */}

        <div className="Submissao-linha3">
            {/* <div className="Submissao-linha3-item"> */}
                {/* <img src={calendario_1} alt="" /> */}
                {/* <h4>Prazo para Submissão</h4> */}
                {/* <p>10/04/2026</p> */}
            {/* </div> */}
            <div className="Submissao-linha3-item">
                <img src={calendario_2} alt="" />
                <h4>Resultados da Seleção</h4>
                <p>15/05/2026</p>
            </div>
            {/* <div className="Submissao-linha3-item"> */}
                {/* <img src={calendario_3} alt="" /> */}
                {/* <h4>Benefícios</h4> */}
                {/* <p>Inscrições gratuitas para palestrantes selecionados e certificado</p> */}
            {/* </div> */}
        </div>

        {/* <div className="Submissao-linha4"> */}
            {/* <a href="https://talks.python.org.br/pyse26/cfp" target="_blank"> */}
                {/* <button>Enviar Proposta</button> */}
            {/* </a> */}
        {/* </div> */}
    </section>)
}