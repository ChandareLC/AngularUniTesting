import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StrenghPipe } from './pipes/Strength/strengh.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StrenghPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
