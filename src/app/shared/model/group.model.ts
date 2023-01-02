export interface Group {
    groupId: string
    groupName: string
    groupType: GroupType
}

export enum GroupType {
    Input = 'Input',
    Output = 'Output',
    Action = 'Action',
}
