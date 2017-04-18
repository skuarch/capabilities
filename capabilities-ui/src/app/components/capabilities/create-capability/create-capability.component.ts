import { Component, OnInit } from '@angular/core';
import { Capability } from '../../../model/capability';
import { CapabilityService } from '../../../services/capability.service';
import { ErrorService } from '../../../services/error.service';
import { MessagesComponent } from '../../../components/messages/messages.component';

@Component({
  selector: 'app-create-capability',
  templateUrl: './create-capability.component.html',
  styleUrls: ['./create-capability.component.css']
})
export class CreateCapabilityComponent implements OnInit {

  capability: Capability;
  errorMessage: string;  
  infoMessage: string;  

  constructor(
    private capabilityService: CapabilityService, 
    private errorService: ErrorService) { }

  ngOnInit() {
    this.initCapability();
  }

  saveCapability() {
    this.capabilityService
      .post(this.capability)
      .subscribe(
        (response: any) => this.initCapability(), 
        (error: any) =>this.errorMessage = error.message || 'unknown errors');
  }

  private initCapability() {
    this.capability = {
      id:0,
      name:'',
      uri:''
    };
  }

  private validateCapability() {
    let ok = false;
    if(!this.capability.name || !this.capability.uri) {
      ok = false;
    } else {
      ok = true;
    }    
    return ok;
  }

}
