import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [BrowserModule, FormsModule, MatChipsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
