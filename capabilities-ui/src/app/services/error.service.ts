import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { MessagesComponent } from '../components/messages/messages.component';

@Injectable()
export class ErrorService {

  constructor() { }  

  handleHttpErrors(error: Response) {
    
    let errorObject = { message: '' };

    if(!error.ok && error.status == 0 && error.statusText == '') {
      errorObject.message = 'connections problems';
    } else {
      errorObject.message = 'ooooops error';
    }
        
    return Observable.throw(errorObject);    
  }

  handlerErrorMessage(message: string) {
    console.log('handlerErrorMessage: ', message);
  }

}
