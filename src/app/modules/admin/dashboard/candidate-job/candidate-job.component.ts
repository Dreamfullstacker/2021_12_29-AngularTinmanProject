import { Component, Input, OnInit } from '@angular/core';
import { CandidateJob } from 'app/core/assessment/assessment.type';

@Component({
    selector: 'candidate-job',
    templateUrl: './candidate-job.component.html',
    styleUrls: ['./candidate-job.component.scss']
})
export class CandidateJobComponent implements OnInit {
    @Input() job: CandidateJob;

    constructor() { }

    ngOnInit(): void {
    }

}
