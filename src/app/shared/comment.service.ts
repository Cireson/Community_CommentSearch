import { AnalystComment } from './comment.model';
import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {

  constructor(protected http: Http) { }

  getAnalystComments(searchTerm: string, take: number, skip: number): Observable<any> {
    const queryId = '9ba2a657-0e70-aee0-4814-7691eb4389a1';

    // tslint:disable-next-line:max-line-length
    return this.http
      .get(`/api/v3/Dashboard/GetDashboardDataById`, {
        params: {
          dateFilterType: 'NoFilter',
          searchTerm: searchTerm,
          take: take,
          skip: skip,
          queryId: queryId
        }
      })
      .map((res: Response) => res.json())
      .catch(err => Observable.throw(err));
  }
}
