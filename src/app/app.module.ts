import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router'



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet
  ]
})
export class AppModule { }
