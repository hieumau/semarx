import {Feature} from "./feature.model";

export interface FeatureGroup {
    id: string
    name: string
    type: GroupType
    featureList?: Feature[]
}

export enum GroupType {
    Input = 'Input',
    Output = 'Output',
    Action = 'Action',
}
