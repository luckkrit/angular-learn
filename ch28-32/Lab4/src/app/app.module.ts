import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PrettyPrintComponent } from './pretty-print/pretty-print.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, PostListComponent, PrettyPrintComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
