import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { ErrorService } from '../services/error.service';

@Injectable()
export class HttpService {

  constructor(
    private http:Http, 
    private errorService:ErrorService) { }

  post(url: string, data: any): Observable<any> { 
      return this.http.post(url, data)
      .map((response: any) => response.json())
      .catch(this.errorService.handleHttpErrors);
  }

  put(url: string, data: any): Observable<any> { 
      return this.http.put(url, data)
      .map((response: any) => response.json())
      .catch(this.errorService.handleHttpErrors);
  }

  get(url: string, data: any): Observable<any> { 
      return this.http.get(url, data)      
        .catch(this.errorService.handleHttpErrors);
  }

  delete(url: string, id: number): Observable<any> { 
      return this.http.delete(url)
      .catch(this.errorService.handleHttpErrors);
  }

}
