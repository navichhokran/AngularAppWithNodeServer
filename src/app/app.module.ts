import { environment } from './../environments/environment';
import { AuthGuard } from './services/auth-guard.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './backend/fake-backend';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersService } from './services/teachers.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { titlecasePipe } from './titlecase.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TopicsFormComponent } from './topics-form/topics-form.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SigninComponent } from './signin/signin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    AuthorsComponent,
    SummaryPipe,
    titlecasePipe,
    FavouriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    TopicsFormComponent,
    PostsComponent,
    NotfoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PostDetailsComponent,
    SigninComponent,
    NoAccessComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path : '',
        component : HomeComponent,
        canActivate : [AuthGuard]
      },
      {
        path : 'signin',
        component : SigninComponent
      },
      {
        path : 'contact',
        component : ContactFormComponent,
        canActivate : [AuthGuard]
      },
      {
        path : 'signup',
        component :  SignupFormComponent
       },
      {
        path : 'posts',
        component : PostsComponent,
        canActivate : [AuthGuard]
      },
      {
        path : 'posts/:postId',
        component : PostDetailsComponent,
        canActivate : [AuthGuard]
      },
      {
        path : 'photos',
        component : PhotosComponent,
        canActivate : [AuthGuard]
      }
      // {
      //   path : '**',
      //   component : NotfoundComponent,
      //   canActivate : [AuthGuard]
      //  }
    ])
  ],
  providers: [
    TeachersService,
    AuthorsService,
    PostService,
    OrderService,
    AuthService,
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions,
    AngularFireDatabase,
    { provide : ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
