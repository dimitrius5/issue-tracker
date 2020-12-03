import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('title') title:ElementRef;
  @ViewChild('desc') desc:ElementRef;

  public issue = this.getIssue();
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
    this.getIssue();
    console.log(this.issue);
  }

  getIssue(): Issue {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.issueService.getIssue(id);
  }
  Submit(){
    this.issue.title = this.title.nativeElement.value;
    this.issue.desc = this.desc.nativeElement.value;
    console.log(this.issue);
    this.issueService.save(this.issue);
  }
}
