import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { CustomErrorHandler } from '../classes/custom-error-handler.class';

@NgModule({
    providers: [
        {
            provide: ErrorHandler,
            useClass: CustomErrorHandler
        }
     ]
})
export class CustomErrorHandlerModule {}
