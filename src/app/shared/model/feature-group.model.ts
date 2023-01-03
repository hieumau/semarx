
export interface FeatureGroup {
    id: string
    name: string
    type: GroupType

}

export enum GroupType {
    Input = 'Input',
    Output = 'Output',
    Action = 'Action',
}
