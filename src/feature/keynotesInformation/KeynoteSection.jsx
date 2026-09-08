import './styles/KeynoteSection.css'
import KeyNoteCard from './KeynoteCard'
import allKeynotesList from "../../../config/KeyNotesList.yaml?raw";
import { parse } from "yaml";

const keynotesList = parse(allKeynotesList).keyNotesList;

export default function KeynoteSection () {
    return (
        <div className="KeynoteSection">
            <div className="KeynoteSection-aba">
                <h3>KeyNotes</h3>
            </div>

            <div className='KeynoteSection-keynotescards'>
                {keynotesList.map((palestrante, index) => (
                        <KeyNoteCard
                            key={palestrante.nome}
                            img={palestrante.img}
                            nome={palestrante.nome}
                            descricao={palestrante.descricao}
                            githubArroba={palestrante.githubArroba}
                            githubLink={palestrante.githubLink}
                            instagramArroba={palestrante.instagramArroba}
                            instagramLink={palestrante.instagramLink}
                            linkdinArroba={palestrante.linkedinArroba}
                            linkdinLink={palestrante.linkedinLink}
                        />
                    ))
                }
            </div>
        </div>
    )
}