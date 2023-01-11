import {GroupType} from "../../shared/model/feature-group.model";
import {Object} from "../../shared/model/object.model";

export const objectList: Object[] = [
    {
        name: 'Banana',
        category: 'Object Movement',
        dimension: GroupType.Input,
        feature: 'Long'
    },
    {
        name: 'Banana',
        category: 'Object Shape',
        dimension: GroupType.Input,
        feature: 'None'
    },
    {
        name: 'Banana',
        category: 'Object Color',
        dimension: GroupType.Output,
        feature: 'Yellow'
    },
    {
        name: 'Banana',
        category: 'Safety',
        dimension: GroupType.Action,
        feature: 'Engage'
    },
    {
        name: 'Apple',
        category: 'Teaming',
        dimension: GroupType.Output,
        feature: 'None'
    },
    {
        name: 'Apple',
        category: 'Sickness',
        dimension: GroupType.Action,
        feature: 'High'
    },
    {
        name: 'Apple',
        category: 'Overall Energy',
        dimension: GroupType.Output,
        feature: 'Low'
    },
]
