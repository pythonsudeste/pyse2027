import { NewImage } from '@/feature/NewImage';
import styles from './Hero.module.css';
import image from './comunidade-rio-1600.webp';

const LINK_PARA_COMPRA_DE_INGRESSO = '';

export const Hero = () => {
    return (
        <section>
            <Banner />
            <Contador />
            <Ingressos />
        </section>
    )
}

const Banner = () => {
    return (
        <div id="banner-hero" className={styles.banner} >
            <div className={styles.banner_texto_foto} >
                <div className={styles.banner_texto} >
                    <span className={styles.chip} >
                        7ª edição · região sudeste
                    </span>
                    <h1>Python <br /> Sudeste <br /> <span>2027</span></h1>
                    <p>Belo Horizonte, Minas Gerais. A montanha recebe a comunidade Python.</p>
                    <div className={styles.conjunto_chips} >
                        <span className={styles.chips_quadrados} >
                            Julho de 2027 · datas a confirmar
                        </span>
                        <span className={styles.chips_quadrados}>
                            Local a confirmar
                        </span>
                    </div>
                </div>
                <div className={styles.banner_foto}>
                    <NewImage
                        alt='Foto da Python Sudeste'
                        src={image}
                        height='100%'
                        width='100%'
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    )
}

const Contador = () => {
    return (
        <div className={styles.contador_container}>
            <div className={styles.contador}>
                <div className={styles.contador_texto}>
                    <h3>Contagem regressiva</h3>
                    <span>O desafio agora é segurar a ansiedade</span>
                </div>
                <div className={styles.contador_numeros}>
                    <div className={styles.numero_contagem}>
                        <strong>--</strong>
                        <span>Dias</span>
                    </div>
                    <div className={styles.numero_contagem}>
                        <strong>--</strong>
                        <span>Horas</span>
                    </div>
                    <div className={styles.numero_contagem}>
                        <strong>--</strong>
                        <span>Min</span>
                    </div>
                    <div className={styles.numero_contagem}>
                        <strong>--</strong>
                        <span>Seg</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Ingressos = () => {
    return (
        <div className={styles.ingressos_container}>
            <div className={styles.ingressos_banner}>
                <div className={styles.ingressos_banner_texto}>
                    <h2>Ingressos em breve</h2>
                    <p>Deixe seu e-mail e avisamos assim que o primeiro lote for liberado.</p>
                </div>
                <a href={LINK_PARA_COMPRA_DE_INGRESSO}>
                    <button className={styles.ingressos_banner_link}>
                        Quero ser avisado
                    </button>
                </a>
            </div>
        </div>
    )
}