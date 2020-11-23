import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.sass']
})
export class IssueDetailComponent implements OnInit {
  issue: Issue
  titleFormControl = new FormControl('', [
    Validators.required,

  ]);
  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
  ) { }

  ngOnInit(): void {
    this.getIssue();
  }

  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id)
      .subscribe(issue => this.issue = issue);
  }

}
