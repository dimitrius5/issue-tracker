import { Component, AfterViewInit, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { from } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.sass']
})

export class IssuesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'desc', 'open', 'created'];
  issues = this.issueService.getAllIssues();
  dataSource = new MatTableDataSource(this.issues);
  resultsLength = this.issues.length;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private issueService: IssueService,
  ) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.issues);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

@Pipe({name: 'openClose'})
export class OpenClosePipe implements PipeTransform {
  transform(value: boolean): string {
    console.log(value)
    return value ? 'open' : 'closed'
  }
}
