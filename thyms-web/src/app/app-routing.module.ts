import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginAdminGuard } from './guards/login-admin.guard'; ----> Necesario
//import { NoLoginAdminGuard } from './guards/no-login-admin.guard'; -------> Necesario
//import { LoginUserGuard } from './guards/login-user.guard'; --------> Login
import { InvoiceComponent } from './invoice/invoice.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: InvoiceComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
