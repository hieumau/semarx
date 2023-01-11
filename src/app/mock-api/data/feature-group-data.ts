import {FeatureGroup, GroupType} from "../../shared/model/feature-group.model";

export const featureGroupList: FeatureGroup[] = [
    {
        id: 'G1',
        name:'Object Move',
        type: GroupType.Input,
    },
    {
        id: 'G2',
        name:'Object Shape',
        type: GroupType.Output,
    },
    {
        id: 'G3',
        name:'Object Color',
        type: GroupType.Input,
    },
    {
        id: 'G4',
        name:'Object Texture',
        type: GroupType.Output,
    },
    {
        id: 'G5',
        name:'Object Size',
        type: GroupType.Input,
    },
    {
        id: 'G6',
        name:'Object Time',
        type: GroupType.Action,
    },
]
