import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BookstoreComponent} from './components/bookstore/bookstore.component';
import { BookstoreFormComponent} from './components/bookstore/bookstore-form/bookstore-form.component';
import { BookstoreGridComponent} from './components/bookstore/bookstore-grid/bookstore-grid.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent} from './components/profile/profile.component';
import {ProfileFormComponent} from './components/profile/profile-form/profile-form.component';
import {ProfileGridComponent} from './components/profile/profile-grid/profile-grid.component';
import { ProfileButtonComponent} from './components/profile/profile-button/profile-button.component';
import {AdminComponent} from './components/admin/admin.component';
import { TabRoutingModule} from './components/admin/router-tab/tab-routing.module';
import {EmployeesComponent} from './components/admin/employees/employees.component';
import {EmployeesGridComponent} from './components/admin/employees/employees-grid/employees-grid.component';
import {EmployeesButtonComponent} from './components/admin/employees/employees-buttons/employees-buttons.component'
import {BooksComponent} from './components/admin/books/books.component';
import {BooksGridComponent} from './components/admin/books/books-grid/books-grid.component'
import {BooksButtonComponent} from './components/admin/books/books-buttons/books-buttons.component';
import { ApprovalsComponent} from './components/admin/approvals/approvals.component';
import { ApprovalsGridComponent} from './components/admin/approvals/approvals-grid/approvals-grid.component';
import { ApprovalsButtonComponent} from './components/admin/approvals/approvals-buttons/approvals-buttons.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookstoreComponent,
    BookstoreFormComponent,
    BookstoreGridComponent,
    NavBarComponent,
    ProfileComponent,
    ProfileFormComponent,
    ProfileGridComponent,
    ProfileButtonComponent,
    AdminComponent,
    EmployeesComponent,
    EmployeesGridComponent, 
    EmployeesButtonComponent,
    BooksComponent,
    BooksButtonComponent,
    BooksGridComponent,
    ApprovalsButtonComponent,
    ApprovalsComponent,
    ApprovalsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
