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

  getIssue(id: number): Observable<Issue> {
    const url = `${this.issuesUrl}/${id}`;
    return this.http.get<Issue>(url).pipe(
      tap(_ => this.log(`fetched issue id=${id}`)),
      catchError(this.handleError<Issue>(`getIssue id=${id}`))
    );
  }

  save(issue: Issue) {
    this.storage.setItem(issue.id.toString(), JSON.stringify(issue))
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
