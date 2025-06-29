import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search-page/search-page';
//import { SearchComponent } from './search-page';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,     // contains your routing config
    RouterModule,         // makes <router-outlet> work
    FormsModule,
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}