import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DynamicTableConfiguratorComponent } from './dynamic-table-configurator/dynamic-table-configurator.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatChipsModule,
  ],
  declarations: [AppComponent, DynamicTableConfiguratorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
