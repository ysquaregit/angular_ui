import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {UserData} from './UserData'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private baseURL = 'http://192.168.0.100:3000/api/';
  private actionComponentName="user_managements"
  constructor( private http: HttpClient) { 

  }
   /** GET Users from the server */
   getUserList (): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.baseURL + this.actionComponentName)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }
 /** DELETE: delete the User from the server */
 deleteUser (userEmail: String): Observable<String> {
  let id : String=userEmail;

  const url = `${this.baseURL + this.actionComponentName}/${id}`;

  return this.http.delete<String>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<String>('deleteHero'))
  );
}

 /** POST: add a new hero to the server */
 addUserinfo (newUserData: UserData): Observable<UserData[]> {
  return this.http.post<UserData[]>(this.baseURL + this.actionComponentName, newUserData, httpOptions).pipe(
    tap((newUserData: UserData[]) => this.log(`added user`)),
    catchError(this.handleError<UserData[]>('addHero'))
  );
}
  getUserID():String {
    return "userID";
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add('HeroService: ' + message);
    //alert('HeroService: ' + message);
  }
}
