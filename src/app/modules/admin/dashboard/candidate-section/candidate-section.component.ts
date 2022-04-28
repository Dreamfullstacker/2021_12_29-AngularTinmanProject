import { Component, Input, OnInit } from '@angular/core';
import { CandidateInterestJob, CandidateJob } from 'app/core/assessment/assessment.type';

@Component({
    selector: 'candidate-section',
    templateUrl: './candidate-section.component.html',
    styleUrls: ['./candidate-section.component.scss']
})
export class CandidateSectionComponent implements OnInit {

    @Input() section: CandidateInterestJob;
    isExpandableJob3: boolean = true;
    isExpandableJob4: boolean = true;
    displayJobs = 5;
    constructor() { }

    ngOnInit(): void {
    }

    getFirstJobs(jobs: CandidateJob[]): CandidateJob[] {
        return jobs.slice(0, this.displayJobs);
    }

    getRestJobs(jobs: CandidateJob[]): CandidateJob[] {
        return jobs.slice(this.displayJobs);
    }
}
