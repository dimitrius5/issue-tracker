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
  public issue: Issue = {
    id: 1,
    title: 'test title',
    desc: 'test desc'
  }
  titleFormControl = new FormControl(this.issue.title, [
    Validators.required,
  ]);
  descFormControl = new FormControl(this.issue.desc, [
    Validators.required,
  ]);
  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
  ) { }

  ngOnInit(): void {
    console.log(this.issue);
    this.getIssue();
    console.log(this.issue);
  }

  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issue = this.issueService.getIssue(1);
    console.log(id);
  }
  Submit(){
    console.log(this.issue);
    this.issueService.save(this.issue);
  }
}
