/* eslint-disable @typescript-eslint/naming-convention */
export type Layout =
    | 'empty'
    // Horizontal
    | 'centered'
    | 'enterprise'
    | 'material'
    | 'modern'
    // Vertical
    | 'classic'
    | 'classy'
    | 'compact'
    | 'dense'
    | 'futuristic'
    | 'thin';


export interface FooterButtonData {
    Type: string;
    Id: string;
    Text: string;
    Action: string;
    Class: string;
    Icon: string;
};
