import { Injectable } from '@angular/core';
import { Capability } from '../model/capability';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorService } from '../services/error.service';
import { HttpService } from '../services/http.service';

@Injectable()
export class CapabilityService {

  private static url:string = 'http://localhost:8080/capabilities';

  constructor(    
    private errorService:ErrorService,
    private httpService:HttpService) { }

  post(capability:Capability):Observable<Capability> {
    return this.httpService
      .post(CapabilityService.url, capability)
      .map((response: any) => response.json());
      
  }

  getCapabilities(): Observable<Capability[]> {
    return this.httpService
      .get(CapabilityService.url,null)
        .map((response: any) => response.json());    
  }

}
