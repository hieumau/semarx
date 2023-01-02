import {GroupType} from "./group.model";

export interface Feature {
    groupName: string
    groupType: GroupType
    features: string
    description: string
}
