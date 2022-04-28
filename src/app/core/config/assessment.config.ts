export interface ProfilePoint {
    label: string;
    sub_title: string;
    full: string;
    point: number;
    isFinal?: boolean;
    canReturn?: boolean;
}
export const PROFILE_SECTION: ProfilePoint[] = [
    
    {
        label: 'Realistic',
        sub_title : 'Realistic Subtitle',
        full:'Realistic Profile Code',
        point: 0
    },
    {
        label: 'Investigative',
        sub_title: 'Investigative Subtitle',
        full:'Investigative Profile Code',
        point: 0
    },
    {
        label: 'Artistic',
        sub_title: 'Artistic Subtitle',
        full:'Artistic Profile Code',
        point: 0
    },
    {
        label: 'Social',
        sub_title: 'Social Subtitle',
        full:'Social Profile Code',
        point: 0
    },
    {
        label: 'Enterprising',
        sub_title: 'Enterprising Subtitle',
        full:'Enterprising Profile Code',
        point: 0
    },
    {
        label: 'Conventional',
        sub_title: 'Conventional Subtitle',
        full:'Conventional Profile Code',
        point: 0
    },
];
