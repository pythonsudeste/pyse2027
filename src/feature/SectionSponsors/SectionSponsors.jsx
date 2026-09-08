import allSponsorsData from "../../../config/SponsorsData.yaml?raw"
import { parse } from "yaml"; 
import "./SectionSponsors.css"

const SponsorsData = parse(allSponsorsData).SponsorsData;

export default function SectionSponsors() {
    return (<>
        <div className="SectionSponsors">
            <div className="SectionSponsors_titulo">
                <h4>Patrocinadores</h4>
                <h5>Conheça nossos patrocinadores e apoiadores</h5>
            </div>

            {Object.entries(SponsorsData).map(([nivel, sponsors]) => (
                <div key={nivel} className="SectionSponsors_patrocinadores">
                    <h3>{nivel}</h3>
                    <div>
                        {sponsors.map((sponsor) => (
                                <img
                                    key={sponsor.id}
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>)
}

function Patrocinadores({logo , link = "#"}) {
    return(
        <a href={link} target="_blank">
            <img src={logo} alt="Patrocinador" />
        </a>
    )
}