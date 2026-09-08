import allActivityListConfig from '../../../../config/AllActivityListConfig.yaml?raw'
import { parse } from 'yaml'

const activityList = parse(allActivityListConfig).ActivityList

export function getAllSpeakersFromTalks() {
    const speakers = []
    
    activityList.forEach((activity) => {
        if (activity.type === 'talk' && activity.speaker) {
            activity.speaker.forEach((speaker) => {
                speakers.push({
                    name: speaker.name,
                    avatar: speaker.avatar,
                    biography: speaker.biography,
                    talkTitle: activity.title
                })
            })
        }
    })
    
    return speakers
}
