import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide4',
  templateUrl: './guide4.component.html',
  styleUrls: ['./guide4.component.scss']
})
export class Guide4Component implements OnInit {

    guides: string[] = [
        'NoAnswer-guide',
        'AnswerHonestly-guide',
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
