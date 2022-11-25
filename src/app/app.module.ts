import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
const myRouter:Routes=[{
  path:"",
  component:ViewPostComponent
},
{
  path:"addPost",
  component:AddPostComponent
}]
@NgModule({
    declarations: [
        AppComponent,
        AddPostComponent,
        ViewPostComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(myRouter),
    ]
})
export class AppModule { }
