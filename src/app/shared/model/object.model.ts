import {FeatureGroup, GroupType} from "./feature-group.model";
import {Feature} from "./feature.model";

export interface Object {
    name: string,
    category: string,
    dimension: GroupType,
    feature: string
}
