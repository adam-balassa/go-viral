import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './main/index/index.component';
import { HeaderComponent } from './main/header/header.component';
import { LoginComponent } from './main/login/login.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { ShoppingComponent } from './registrate/forms/shopping/shopping.component';
import { AutocompleteSelectorComponent } from './components/autocomplete-selector/autocomplete-selector.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormAlertComponent } from './components/form-alert/form-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    RegistrateComponent,
    ShoppingComponent,
    AutocompleteSelectorComponent,
    CheckboxComponent,
    FormAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
