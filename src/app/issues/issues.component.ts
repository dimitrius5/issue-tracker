import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { from } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.sass']
})
export class IssuesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'open', 'created'];
  issues = this.issueService.getAllIssues();
  resultsLength = this.issues.length;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private issueService: IssueService,
  ) {
   }

   ngAfterViewInit(): void {
     console.log(this.issues);
  }

}
