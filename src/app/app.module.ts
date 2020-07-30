import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { PostlistComponent } from './postlist/postlist.component';
import { PostcreateComponent } from './postcreate/postcreate.component';
import { PostDetailsComponent } from './post-details/post-details.component'; 

const appRoutes: Routes = [
  {
    path: '', 
    component: PostlistComponent
  }, 
  {
    path: 'new', 
    component: PostcreateComponent
  }, 
  {
    path: 'post/:slug', 
    component: PostDetailsComponent 
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostcreateComponent, 
    PostDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), 
    BrowserModule,
    UiModule, 
    HttpModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
