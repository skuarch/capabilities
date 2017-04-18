import { ErrorHandler } from '@angular/core';
import { NgModule } from "@angular/core";

export class CustomErrorHandler extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error) {
    super.handleError(error);
    //console.log('error console', error);
  }
}
