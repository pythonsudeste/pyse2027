import './styles/Local.css'
import divisao from '/divisao.svg'
import banner from '/banner_section10_home_sobre_o_rio.webp?url'
import arca_hub from '/arcahub_local.webp'
import campus_fiap from '/campus_fiap.png'
import Mapa from './Mapa'

const localArcaHub = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.805144293261!2d-43.18291690327647!3d-22.943356279093916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff2ef6ac403%3A0x7abbd08886d18d87!2sPraia%20de%20Botafogo%2C%20300%20-%203%20andar%20-%20Botafogo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022250-040!5e0!3m2!1spt-BR!2sbr!4v1772595377154!5m2!1spt-BR!2sbr";
const localCampusFiap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.546133069776!2d-43.197106709321275!3d-22.983634390080322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd52b34b585bf%3A0xaf5463e43ef0b53e!2sArca%20Hub!5e0!3m2!1spt-BR!2sbr!4v1772595093072!5m2!1spt-BR!2sbr";

export default function Local() {
    return (
    <section className='Local'>
        <div className='Local_texto'>
            <div className='Local_texto_titulo'>
                <h5>Bem vindos ao Rio de Janeiro!</h5>
                <h5>A casa da Python Sudeste em 2026</h5>
            </div>
            <div className='Local_texto_completo'>
                <p>O Rio de Janeiro sempre foi reconhecido por sua beleza, cultura e criatividade, mas, também se destaca como um polo estratégico para o avanço da tecnologia no Brasil. Da pesquisa científica que nasce em instituições de referência aos hubs de inovação que conectam startups, empresas e comunidades, o Rio se consolida como um território fértil para quem transforma ideias em impacto real.</p>
                <p>É aqui que universidades como UFRJ, UFF e PUC-Rio formam talentos que alimentam o ecossistema nacional de engenharia, ciência de dados e desenvolvimento de software. É aqui que centros como o Parque Tecnológico da UFRJ e o Porto Maravalley aceleram projetos que unem academia, mercado e governo. É aqui que comunidades vibrantes, como a nossa, encontram espaço para crescer, difundir conhecimento e colaborar.</p>
                <p>No contexto da tecnologia brasileira, o Rio de Janeiro é um catalisador: conecta tradição científica com inovação empreendedora, criatividade com engenharia, diversidade com potência transformadora. E é justamente essa energia que faz eventos como o Python Sudeste acontecerem, porque quando uma comunidade se reúne, compartilha e constrói junto, ela eleva todo o ecossistema.</p>
                <p>O Rio inspira. O Rio cria. O Rio progride.</p>
                <p>E hoje, o Rio impulsiona a tecnologia brasileira, com a força de quem sabe que inovação também é cultura, colaboração e comunidade.</p>
            </div>
            <img src={banner} alt="" />
        </div>
        <img src={divisao} className='Local_divisao' alt='Divisão de seções' />
        <div className='Local-enderecos'>
            <div className='Local-enderecos-itens'>
                <div className='Local-enderecos-itens-textos'>
                    <h3>Tutoriais e Palestras</h3>
                    <h4>Local: Campus da FIAP</h4>
                </div>
                <img src={campus_fiap} alt="" />
                <Mapa local={localArcaHub}/>
            </div>
        </div>
    </section>
    )
}