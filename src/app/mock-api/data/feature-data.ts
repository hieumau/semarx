import {EventModal} from "../../shared/model/event.model";
import {GroupType} from "../../shared/model/feature-group.model";
import {Feature} from "../../shared/model/feature.model";

export const futureList: Feature[] = [
    {
        groupId: 'G1',
        groupName: 'Object Move',
        groupType: GroupType.Input,
        features: 'IP1 - 1',
        description: 'None 1'
    },
    {
        groupId: 'G1',
        groupName: 'Object Move',
        groupType: GroupType.Input,
        features: 'IP1 - 2',
        description: 'None 2'
    },
    {
        groupId: 'G1',
        groupName: 'Object Move',
        groupType: GroupType.Input,
        features: 'IP1 - 3',
        description: 'None 3'
    },
    {
        groupId: 'G2',
        groupName: 'Object Shape',
        groupType: GroupType.Output,
        features: 'IP2 - 1',
        description: 'Round 1'
    },
    {
        groupId: 'G2',
        groupName: 'Object Shape',
        groupType: GroupType.Output,
        features: 'IP2 - 2',
        description: 'Round 2'
    },
    {
        groupId: 'G2',
        groupName: 'Object Shape',
        groupType: GroupType.Output,
        features: 'IP2 - 3',
        description: 'Round 3'
    },
    {
        groupId: 'G3',
        groupName: 'Object Color',
        groupType: GroupType.Input,
        features: 'IP3 - 1',
        description: 'Unknown 1'
    },
    {
        groupId: 'G3',
        groupName: 'Object Color',
        groupType: GroupType.Input,
        features: 'IP3 - 2',
        description: 'Unknown 2'
    },
    {
        groupId: 'G3',
        groupName: 'Object Color',
        groupType: GroupType.Input,
        features: 'IP3 - 3',
        description: 'Unknown 3'
    },
    {
        groupId: 'G3',
        groupName: 'Object Color',
        groupType: GroupType.Input,
        features: 'IP3 - 4',
        description: 'Unknown 4'
    },
    {
        groupId: 'G4',
        groupName: 'Object Texture',
        groupType: GroupType.Output,
        features: 'IP4 - 1',
        description: 'Round 1'
    },
    {
        groupId: 'G4',
        groupName: 'Object Texture',
        groupType: GroupType.Output,
        features: 'IP4 - 2',
        description: 'Round 2'
    },
    {
        groupId: 'G5',
        groupName: 'Object Size',
        groupType: GroupType.Input,
        features: 'IP5 - 1',
        description: 'Day 1'
    },
    {
        groupId: 'G5',
        groupName: 'Object Size',
        groupType: GroupType.Input,
        features: 'IP5 - 2',
        description: 'Day 2'
    },
    {
        groupId: 'G6',
        groupName: 'Object Time',
        groupType: GroupType.Action,
        features: 'IP6 - 1',
        description: 'Red 1'
    },
]
