import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  public DATE_BEFORE_30_DAYS = moment().subtract(30, 'days').format('YYYY-MM-DD');

  constructor(private http: HttpClient) { }

  //Getting  repos before 30 days from GITHUB
  getStarredRepo(page: number): Observable<any> {
    return this.http.get<any>(`https://api.github.com/search/repositories?q=created:>${this.DATE_BEFORE_30_DAYS}&sort=stars&order=desc&page=${page}`);
  }
}
