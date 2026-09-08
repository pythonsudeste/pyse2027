import AllActivityListConfig from "../../../config/AllActivityListConfig.yaml?raw";
import { parse } from "yaml"; 
import "./styles/programationPanel.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllActivityList = parse(AllActivityListConfig);
const AllActivity = AllActivityList.ActivityList;

export const ProgramationPanel = () => {
    const [ selectedDate , setSelectedDate ] = useState("24 de julho");
    const datas = [...new Set(AllActivity.map(activity => activity.data))];
    return (
        <section className="ProgramationPanel">
            <div className="ProgramationPanel-Container">
                <div className="ProgramationPanel-Container-datas">
                    <a href="https://talks.python.org.br/pyse26/schedule/" target="_blank">
                        Para ver a programação pelo pretalx, clique aqui!
                    </a>
                    <h3>Selecione a data para ver a programação do dia:</h3>
                    <div className="ProgramationPanel-Container-datas-item">
                        {datas.map((data) => (
                            <div 
                                className={data == selectedDate ?
                                    `ProgramationPanel-Container-datas-item-button-selected`
                                    : ""
                                }
                            >
                                <button
                                    onClick={() => setSelectedDate(data)}
                                    key={data}
                                >
                                    {data}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ProgramationPanel-Container-activities">
                    {AllActivity
                        .filter(activity => activity.data === selectedDate)
                        .map((activity) => (
                            activity.type === "especial" ? (
                                <div key={activity.id} className="ProgramationPanel-especial-card">
                                    <h3>{activity.title}</h3>
                                    <h4>{activity.hour}</h4>
                                </div>
                            )
                            :
                            activity.type === "talk" || "tutorial" ? (
                                <Link 
                                    key={activity.id}
                                    className="ProgramationPanel-talktutorial-card"
                                    to={`/palestra/${activity.id}`}
                                >
                                    <div key={activity.id} className="ProgramationPanel-talktutorial-card-content">
                                        <div className="ProgramationPanel-talktutorial-card-hour">
                                            <h3>{activity.hour}</h3>
                                            <h3>{activity.local}</h3>
                                        </div>
                                        <h2>{activity.title}</h2>
                                        <div className="ProgramationPanel-talktutorial-card-all-speaker">
                                            {activity.speaker.map(speaker => (
                                                <div className="ProgramationPanel-talktutorial-card-speaker">
                                                    <h3>{speaker.name}</h3>
                                                    <img 
                                                        src={speaker.avatar} 
                                                        alt={`foto de ${speaker.name}`}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            )
                            :
                            null
                    ))}
                </div>
            </div>
        </section>
    )
};