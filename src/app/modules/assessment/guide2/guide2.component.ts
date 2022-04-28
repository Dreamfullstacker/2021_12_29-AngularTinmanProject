import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide2',
  templateUrl: './guide2.component.html',
  styleUrls: ['./guide2.component.scss']
})
export class Guide2Component implements OnInit {

    guides: string[] = [
        'Back-guide',
        'BackRule-guide',
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
