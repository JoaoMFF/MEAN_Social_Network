import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FeedComponent } from './feed/feed.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogsComponent } from './logs/logs.component';

const appRoutes: Routes = [
  {
    path: 'feed',
    component: FeedComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    FeedComponent,
    RegisterFormComponent,
    LoginFormComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
      //,
      //{ enableTracing: true} // < -- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
