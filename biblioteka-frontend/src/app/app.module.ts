import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BookstoreComponent} from './components/bookstore/bookstore.component';
import { BookstoreFormComponent} from './components/bookstore/bookstore-form/bookstore-form.component';
import { BookstoreGridComponent} from './components/bookstore/bookstore-grid/bookstore-grid.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent} from './components/profile/profile.component';
import {ProfileFormComponent} from './components/profile/profile-form/profile-form.component';
import {ProfileGridComponent} from './components/profile/profile-grid/profile-grid.component';
import {AdminComponent} from './components/admin/admin.component';
import { TabRoutingModule} from './components/admin/router-tab/tab-routing.module';
import {EmployeesComponent} from './components/admin/employees/employees.component';
import {EmployeesGridComponent} from './components/admin/employees/employees-grid/employees-grid.component';
import {BooksComponent} from './components/admin/books/books.component';
import {BooksGridComponent} from './components/admin/books/books-grid/books-grid.component'
import { ApprovalsComponent} from './components/admin/approvals/approvals.component';
import { ApprovalsGridComponent} from './components/admin/approvals/approvals-grid/approvals-grid.component';
import { AddBookComponent } from './components/admin/books/add-book/add-book.component';
import { AddEmployeeComponent } from './components/admin/employees/add-employee/add-employee.component';
import {RestApiService} from './components/shared/rest-api.service';
import {ReviewComponent} from './components/profile/review/review.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/admin/employees/edit-employee/edit-employee.component';
import { EditBookComponent } from './components/admin/books/edit-book/edit-book.component';
import { HomeComponent } from './components/home/home.component';
import { BooksService } from './components/bookstore/shared/books.service';
import { ApprovalService } from './components/admin/approvals/shared/approval.service';
import { BooksAdminService } from './components/admin/books/shared/books.admin.service';
import { EmployeeService } from './components/admin/employees/shared/employee.service';
import { ProfileService } from './components/profile/shared/profile.service';
import {AuthService} from './components/shared/authentication.service'
import { LoginService } from './components/login/shared/login.service';
import { AuthGuard } from './components/shared/auth.guard';


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
    AdminComponent,
    EmployeesComponent,
    EmployeesGridComponent, 
    BooksComponent,
    BooksGridComponent,
    ApprovalsComponent,
    ApprovalsGridComponent,
    AddBookComponent,
    AddEmployeeComponent,
    ReviewComponent,
    EditEmployeeComponent,
    EditBookComponent,
    HomeComponent
  ],
  imports: [  
    FormsModule,
    ReactiveFormsModule,  
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TabRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    BooksService,
    ApprovalService,
    BooksAdminService,
    EmployeeService,
    ProfileService,
    AuthService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
