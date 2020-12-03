import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.sass']
})
export class IssuesComponent implements OnInit {

  issues = this.issueService.getAllIssues();

  constructor(
    private issueService: IssueService,
  ) {
   }

  ngOnInit(): void {
  }

}
