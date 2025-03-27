import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { ExpenseComponent } from './components/expense/expense.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzFormModule,
    NzCardModule,
    CommonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }