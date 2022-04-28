/* eslint-disable @typescript-eslint/naming-convention */
export interface CandidateInterestJob {
    Interest: string;
    JobsLevel3: CandidateJob[];
    JobsLevel4: CandidateJob[];
}

export interface CandidateJob {
    Abstract: string;
    AppDataId: number;
    CareerPathway: string;
    Cluster: string;
    Family: string;
    JobTemplateId: string;
    RIASEC: string;
    TemplateTitle: string;
    TimeStamp: string;
    Zone: string;
}

export interface CandidateJobs {
    Level1: CandidateInterestJob;
    Level2: CandidateInterestJob;
    Level3: CandidateInterestJob;
}
