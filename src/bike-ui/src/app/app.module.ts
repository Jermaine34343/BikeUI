import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {BikeService} from "./services/bike.service";
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule} from "@angular/forms";
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth.guard";

const routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [BikeService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
