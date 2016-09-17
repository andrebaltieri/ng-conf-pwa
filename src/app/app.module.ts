import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { HomePage } from './pages/home-page/home.page';

import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HeadbarComponent,
    HomePage,
    ListCoursesComponent,
    CourseDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    
  ],
  bootstrap: [HomePage]
})
export class AppModule { }
