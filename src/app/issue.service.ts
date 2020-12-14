import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Issue } from './issue';
import { LocalStorage } from '../app/storage/local-storage.interface'

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issuesUrl = 'api/issues';

  constructor(
    private http: HttpClient,
    public storage: LocalStorage
  ) { }

  getIssue(id: number): Issue {
    if(id) {
      return JSON.parse(this.storage.getItem(id.toString()));
    } else {
      const issue = {} as Issue;
      issue.id = Date.now();
      issue.open = true;
      issue.new = true;
      return issue;
    }
  }

  save(issue: Issue) {
    this.storage.setItem(issue.id.toString(), JSON.stringify(issue))
  }

  getAllIssues() : Array<Issue> {
    const storageValues = Object.values(this.storage.getAllItems());
    const issues: Array<Issue> = [];
    for(const value of storageValues) {
      issues.push(JSON.parse(value));
    }

    return issues;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    //this.messageService.add(`IssueService: ${message}`);
  }
}
