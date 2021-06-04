import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/admin/books/add-book/add-book.component';
import { AddEmployeeComponent } from './components/admin/employees/add-employee/add-employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ReviewComponent } from './components/profile/review/review.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { EditEmployeeComponent } from './components/admin/employees/edit-employee/edit-employee.component';
import { EditBookComponent } from './components/admin/books/edit-book/edit-book.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'bookstore', component: BookstoreComponent},
  {path: 'profile', component:ProfileComponent},
  {path:'admin', component:EmployeesComponent},
  {path: 'add-book', component:AddBookComponent},
  {path: 'edit-book', component:EditBookComponent},
  {path: 'add-employee', component:AddEmployeeComponent},
  {path: 'edit-employee', component:EditEmployeeComponent},
  {path: 'review', component:ReviewComponent},
  {path: 'home', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
