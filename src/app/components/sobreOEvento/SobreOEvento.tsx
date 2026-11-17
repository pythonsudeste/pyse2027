import styles from "./sobreOEvento.module.css";

export const SobreOEvento = () => {
    return (
        <section id='sobre' className={styles.sobre_container}>
            <div className={styles.sobre_texto}>
                <div className={styles.texto_esquerdo}>
                    <h3>SOBRE<br />O EVENTO</h3>
                    <p>Uma das maiores conferências regionais de Python do Brasil.</p>
                </div>
                <div className={styles.texto_direito}>
                    <p>A Python Sudeste (PySE) é um dos grandes eventos regionais da linguagem Python no Brasil. É um encontro de pessoas que aprendem juntas, trocam experiências e constroem comunidade. Tem por objetivo fomentar e compartilhar o conhecimento da tecnologia nos estados da região sudeste. Profissionais, estudantes, professores e entusiastas têm a chance de conhecer mais sobre as tendências de toda a área de tecnologia.</p>
                    <p>São abordados temas como Inteligência Artificial, Desenvolvimento Web, Otimização, Automação e DevOps, apresentando tanto a teoria (técnicas, frameworks, processos etc.) quanto a prática (casos de uso, demonstrações e outros) nas mais diversas áreas. Também são apresentados casos de sucesso, tendências do mercado e a contribuição dos desenvolvedores para toda a sociedade.</p>
                </div>
            </div>
        </section>
    )
}