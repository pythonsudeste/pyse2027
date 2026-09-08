import '../styles/Section1.css'
import { PalestranteList } from './PalestrantList'

export default function Section1() {
    return (
            <div className="PaginaPalestrantes_Section1">
                <div className="PaginaPalestrantes_Section1_aba">
                    <h3>Palestrante</h3>
                </div>
    
                {/* 
                <div className='PaginaPalestrantes_Section1_PalestranteCard'>
                    {PalestranteList.map((palestrante, index) => (
                        // <div className='Section6-palestrantescards'>
                            <div key={palestrante.code} className="PaginaPalestrantes_palestrante_item">
                                <h2>{palestrante.talkTitle}</h2>
                                <img src={palestrante.avatar} alt={`Avatar de ${palestrante.name}`} />
                                <h4>{palestrante.name}</h4>
                                <p>{palestrante.biography}</p>
                            </div>
                        // </div>
                        ))
                    }
                </div>
                 */}
            </div>
        )
}