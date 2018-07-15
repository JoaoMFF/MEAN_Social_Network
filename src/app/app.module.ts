import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogsComponent } from './logs/logs.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    RegisterFormComponent,
    LoginFormComponent,
    LogsComponent,
    RegisterLoginComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: RegisterLoginComponent
      },
      { 
        path: 'feed/:id_post/comments',
        component: PostComponent
      },
      {
        path: 'feed/page/:pageNr',
        component: FeedComponent
      },
      { 
        path: 'logs', 
        component: LogsComponent 
      },
      { 
        path: '**', 
        component: RegisterLoginComponent 
      }
    ])
  ],
  providers: [FeedComponent, AppComponent, LogsComponent, PostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
