import './styles/KeyNoteCard.css'
import ig from './assets/ig.png'
import linkedin from './assets/linkedin.png'
import git from './assets/github.png'

export default function KeynoteCard ({img = "https://png.pngtree.com/png-vector/20240313/ourlarge/pngtree-cute-cat-laughing-happily-png-image_11942584.png",
    nome = 'inserir nome do palestrante',
    descricao = 'inserir descrição do palestrante',
    githubLink = null,
    githubArroba = null,
    instagramLink = null,
    instagramArroba = null,
    linkdinLink = null,
    linkdinArroba = null,
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
            {(githubLink !== null || instagramLink !== null || linkdinLink !== null) && (
                <div className='keynote-segunda-linha'>
                    {githubLink !== null && (
                        <div className='keynote-segunda-linha-item'>
                            <a href={githubLink}>
                                <img src={git} alt="" />
                                {githubArroba}
                            </a>
                        </div>
                    )}
                    {instagramLink !== null && (
                        <div className='keynote-segunda-linha-item'>
                            <a href={instagramLink}>
                                <img src={ig} alt="" />
                                {instagramArroba}
                            </a>
                        </div>
                    )}
                    {linkdinLink !== null && (
                        <div className='keynote-segunda-linha-item'>
                            <a href={linkdinLink}>
                                <img src={linkedin} alt="" />
                                {linkdinArroba}
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}