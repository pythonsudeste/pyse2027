import { NewImage } from '@/feature/NewImage';
import styles from './Hero.module.css';
import image from './comunidade-rio-1600.webp';

export const Hero = () => {
    return (
        <section>
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
        </section>
    )
}