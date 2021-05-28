import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalsComponent } from '../approvals/approvals.component';
import { BooksComponent } from '../books/books.component';
import { EmployeesComponent } from '../employees/employees.component';

const routes: Routes = [
  {path: 'employees' , component: EmployeesComponent},
  {path: 'books', component: BooksComponent},
  {path: 'approvals', component:ApprovalsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
