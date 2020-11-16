import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ISSUES } from '../mock-issues';
import { from } from 'rxjs';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.sass']
})
export class IssuesComponent implements OnInit {

  issues = ISSUES;

  constructor() { }

  ngOnInit(): void {
  }

}
