import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './features/my-first/my-first.component';
import { CourseComponent } from './features/course/course.component';
import {FormsModule} from '@angular/forms'; 
import {ReactiveFormsModule} from '@angular/forms'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PipeComponent } from './features/pipe/pipe.component';
import { SummaryPipePipe } from './pipes/summary-pipe.pipe';
import { InputFormatDirective } from './directives/input-format.directive';
import { LoginComponent } from './validation/login/login.component';
import { ReactiveLoginComponent } from './validation/ReactiveForm/login/login.component';
import { CallHttpComponent } from './features/call-http/call-http.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    CourseComponent,
    PipeComponent,
    SummaryPipePipe,
    InputFormatDirective,
    LoginComponent,
    ReactiveLoginComponent,
    CallHttpComponent,
    NavBarComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
