/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        subtitle: '',
        type    : 'group',
        icon    : '',
        children: [
            {
                id   : 'dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:view-grid',
                link : '/dashboard'
            },
        ]
    },

    {
        id      : 'settings',
        title   : 'SETTINGS',
        subtitle: '',
        type    : 'group',
        icon    : '',
        children: [
            {
                id   : 'features-groups',
                title: 'Features Groups',
                type : 'basic',
                icon : 'heroicons_outline:map',
                link : '/feature-group'
            },
            {
                id   : 'features',
                title: 'Features',
                type : 'basic',
                icon : 'heroicons_outline:check-circle',
                link : '/feature'
            },
            {
                id   : 'events',
                title: 'Events',
                type : 'basic',
                icon : 'heroicons_outline:calendar',
                link : '/event'
            },
            {
                id   : 'default-configuration',
                title: 'Default Configuration',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/default-config'
            },
            {
                id   : 'object',
                title: 'Objects',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/object'
            }
        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
