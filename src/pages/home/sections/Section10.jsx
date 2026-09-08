import '../styles/Section10.css'
import divisao from '/divisao.svg'
import banner from '/banner_section10_home_sobre_o_rio.webp'

export default function Section10() {
    return (<>
        <div className='Section10'>
            <div className='Section10_texto'>
                <div className='Section10_texto_titulo'>
                    <h5>Bem vindos ao Rio de Janeiro!</h5>
                    <h5>A casa da Python Sudeste em 2026</h5>
                </div>
                <div className='Section10_texto_completo'>
                    <p>O Rio de Janeiro sempre foi reconhecido por sua beleza, cultura e criatividade, mas, também se destaca como um polo estratégico para o avanço da tecnologia no Brasil. Da pesquisa científica que nasce em instituições de referência aos hubs de inovação que conectam startups, empresas e comunidades, o Rio se consolida como um território fértil para quem transforma ideias em impacto real.</p>
                    <p>É aqui que universidades como UFRJ, UFF e PUC-Rio formam talentos que alimentam o ecossistema nacional de engenharia, ciência de dados e desenvolvimento de software. É aqui que centros como o Parque Tecnológico da UFRJ e o Porto Maravalley aceleram projetos que unem academia, mercado e governo. É aqui que comunidades vibrantes, como a nossa, encontram espaço para crescer, difundir conhecimento e colaborar.</p>
                    <p>No contexto da tecnologia brasileira, o Rio de Janeiro é um catalisador: conecta tradição científica com inovação empreendedora, criatividade com engenharia, diversidade com potência transformadora. E é justamente essa energia que faz eventos como o Python Sudeste acontecerem, porque quando uma comunidade se reúne, compartilha e constrói junto, ela eleva todo o ecossistema.</p>
                    <p>O Rio inspira. O Rio cria. O Rio progride.</p>
                    <p>E hoje, o Rio impulsiona a tecnologia brasileira, com a força de quem sabe que inovação também é cultura, colaboração e comunidade.</p>
                </div>
                <img src={banner} alt="" />
            </div>

            <img src={divisao} className='Section10_divisao' alt='Divisão de seções' />
        </div>
    </>)
}