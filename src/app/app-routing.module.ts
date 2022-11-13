import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './components/enter/enter.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


export const routes: Routes = [
  { path: 'enter', component: EnterComponent },
  { path: 'thankyou', component: ThankYouComponent },
  { path: '**', component: EnterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
