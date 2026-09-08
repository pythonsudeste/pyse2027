import './styles/KeyNoteCard.css'
import ig from './assets/KeyNoteCard/ig.png'
import linkedin from './assets/KeyNoteCard/linkedin.png'
import git from './assets/KeyNoteCard/github.png'

export default function PalestranteCard({img = "https://png.pngtree.com/png-vector/20240313/ourlarge/pngtree-cute-cat-laughing-happily-png-image_11942584.png",
    nome = 'inserir nome do palestrante',
    descricao = 'inserir descrição do palestrante',
    githubLink = 'inserir link de github do palestrante',
    githubArroba = 'inserir Arroba de github do palestrante',
    instagramLink = 'inserir link de instagram do palestrante',
    instagramArroba = 'inserir Arroba de instagram do palestrante',
    linkdinLink = 'inserir link de linkdin do palestrante',
    linkdinArroba = 'inserir Arroba de linkdin do palestrante',
}) {
    return (
        <div className="keynote">
            <div className='keynote-primeira-linha'>
                <img src={img} alt="Palestrante" />
                <div className='keynote-primeira-linha-nome'>
                    <h4>{nome}</h4>
                    <p>{descricao}</p>
                </div>
            </div>
            <div className='keynote-segunda-linha'>
                {githubLink !== "inserir link de github do palestrante" && (
                    <div className='keynote-segunda-linha-item'>
                        <a href={githubLink}>
                            <img src={git} alt="" />
                            {githubArroba}
                        </a>
                    </div>
                )}
                {instagramLink !== "inserir link de instagram do palestrante" && (
                    <div className='keynote-segunda-linha-item'>
                        <a href={instagramLink}>
                            <img src={ig} alt="" />
                            {instagramArroba}
                        </a>
                    </div>
                )}
                {linkdinLink !== "inserir link de linkdin do palestrante" && (
                    <div className='keynote-segunda-linha-item'>
                        <a href={linkdinLink}>
                            <img src={linkedin} alt="" />
                            {linkdinArroba}
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}