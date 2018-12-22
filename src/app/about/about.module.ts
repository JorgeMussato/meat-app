import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: AboutComponent}
]

@NgModule({
  declarations: [AboutComponent],
  imports: [ RouterModule.forChild(routes) ]
})
export class AboutModule {

}
