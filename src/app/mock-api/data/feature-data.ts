import {EventModal} from "../../shared/model/event.model";
import {GroupType} from "../../shared/model/feature-group.model";
import {Feature} from "../../shared/model/feature.model";

export const futureList: Feature[] = [
    {
        groupName: 'Object Move',
        groupType: GroupType.Input,
        features: 'IP1',
        description: 'None'
    },
    {
        groupName: 'Object Shape',
        groupType: GroupType.Output,
        features: 'IP2',
        description: 'Round'
    },
    {
        groupName: 'Object Color',
        groupType: GroupType.Input,
        features: 'IP3',
        description: 'Unknown'
    },
    {
        groupName: 'Object Texture',
        groupType: GroupType.Output,
        features: 'IP4',
        description: 'Round'
    },
    {
        groupName: 'Object Size',
        groupType: GroupType.Input,
        features: 'IP5',
        description: 'Day'
    },
    {
        groupName: 'Object Time',
        groupType: GroupType.Action,
        features: 'IP6',
        description: 'Red'
    },
]
