import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SwiftviewComponent} from './swiftview/swiftview.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiftviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
