import { useParams } from "react-router-dom"
import AllActivityListConfig from "../../../config/AllActivityListConfig.yaml?raw";
import { parse } from "yaml"; 
import "./SpeakerPage.css"

const AllActivityList = parse(AllActivityListConfig);
const AllActivity = AllActivityList.ActivityList;

export const SpeakerPage = () => {
    const { id } = useParams();

    const speaker = AllActivity.filter(activity => activity.id == id)[0];
    return (
        <section className="SpeakerPage">
            <div className="SpeakerPage-container">
                <div className="SpeakerPage-container-talk">
                    <h2>{speaker.title}</h2>
                    <h4>{speaker.type === "talk" ? "Palestra" : speaker.type}</h4>
                    <p>{speaker.description}</p>
                </div>
                {speaker.speaker.map((speaker) => (
                    <div className="SpeakerPage-container-speaker">
                        <img 
                            src={speaker.avatar}
                            alt={`Foto de ${speaker.name}`}
                        />
                        <h3>{speaker.name}</h3>
                        <p>{speaker.biography}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}