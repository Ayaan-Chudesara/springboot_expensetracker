import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_ICONS, NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { registerLocaleData } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    NzButtonModule
  ],
  providers: [{provide:NZ_I18N,useValue:en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
