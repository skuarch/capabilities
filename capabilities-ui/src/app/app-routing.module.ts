import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateCapabilityComponent } from './components/capabilities/create-capability/create-capability.component';
import { ListCapabilitiesComponent } from './components/capabilities/list-capabilities/list-capabilities.component';


const routes : Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'capability/create', component: CreateCapabilityComponent },
    { path: 'capability/list', component: ListCapabilitiesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}