import { Component, OnInit } from '@angular/core';
import { Capability } from '../../../model/capability';
import { CapabilityService } from '../../../services/capability.service';
import { Observable }     from 'rxjs/Observable';
import { MessagesComponent } from '../../../components/messages/messages.component';

@Component({
  selector: 'app-list-capabilities',
  templateUrl: './list-capabilities.component.html',
  styleUrls: ['./list-capabilities.component.css']
})
export class ListCapabilitiesComponent implements OnInit {

  errorMessage: string;
  capabilities: Capability[];

  constructor(private capabilityService: CapabilityService) { }

  ngOnInit() {
    this.capabilityService
      .getCapabilities()
      .subscribe(
        (capabilities: Capability[]) => this.capabilities = capabilities,
        (error: any) => this.errorMessage = error.message || 'unknown errors');
  }

}
