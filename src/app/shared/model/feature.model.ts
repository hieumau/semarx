import {GroupType} from "./feature-group.model";

export interface Feature {
    groupId?: string,
    groupName: string
    groupType: GroupType
    features: string
    description: string

    selectedEventId?: string[]
}
