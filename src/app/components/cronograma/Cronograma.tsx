import styles from './Cronograma.module.css';

export const Cronograma = () => {
    return (
        <section id="cronograma" className={styles.cronograma_container}>
            <div className={styles.cronograma}>
                <div className={styles.cronograma_title}>
                    <h3>Cronograma</h3>
                </div>
                <div className={styles.cronograma_cards}>
                    <Card
                        data='A DEFINIR'
                        titulo='TUTORIAIS'
                        local='Local em breve'
                        descricao='Cursos práticos de 4 horas, em turmas reduzidas, no primeiro dia do evento.'
                    />
                    <Card
                        data='A DEFINIR'
                        titulo='TUTORIAIS'
                        local='Local em breve'
                        descricao='Cursos práticos de 4 horas, em turmas reduzidas, no primeiro dia do evento.'
                    />
                    <Card
                        data='A DEFINIR'
                        titulo='TUTORIAIS'
                        local='Local em breve'
                        descricao='Cursos práticos de 4 horas, em turmas reduzidas, no primeiro dia do evento.'
                    />
                </div>
                <div className={styles.local_do_evento}>
                    <div className={styles.local_do_evento_texto}>
                        <h6>LOCAL DO EVENTO</h6>
                        <p>Belo Horizonte, MG. Espaço a confirmar — atualizar com o campus anfitrião da edição.</p>
                    </div>
                    <div className={styles.local_do_evento_imagem}>
                        <img src="" alt="Foto do local do evento" />
                    </div>
                </div>
            </div>
        </section>
    )
}



const Card = ({
    data,
    titulo,
    local,
    descricao
} : {
    data : string,
    titulo : string,
    local : string,
    descricao : string
}) => {
    return (
        <div className={styles.card}>
            <span>{data}</span>
            <h5>{titulo}</h5>
            <h6>{local}</h6>
            <p>{descricao}</p>
        </div>
    )
}