import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './main/index/index.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { ShoppingComponent } from './registrate/forms/shopping/shopping.component';
import { PersonalComponent } from './registrate/forms/personal/personal.component';
import { BioComponent } from './registrate/forms/bio/bio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckComponent } from './registrate/forms/check/check.component';
import { HelpComponent } from './main/help/help.component';
import { LoginOrRegistrateComponent } from './registrate/forms/login/login-or-registrate.component';
import { MyAccountComponent } from './main/my-account/my-account.component';
import { ShoppingHelpComponent } from './main/my-account/shopping-help/shopping-help.component';

const routes: Routes = [
  { path: 'registrate/:help/:category', component: RegistrateComponent, children: [
    { path: 'check', component: CheckComponent },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'bio', component: BioComponent }
  ]},
  { path: '', component: MainComponent, pathMatch: 'prefix', children: [
    { path: 'my-account', component: MyAccountComponent, children: [
      { path: 'shopping-help', component: ShoppingHelpComponent }
    ]},
    { path: '', component: IndexComponent },
    { path: ':help/:category', component: HelpComponent, children: [
      { path: 'check', component: CheckComponent },
      { path: 'shopping', component: ShoppingComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'bio', component: BioComponent },
      { path: 'login', component: LoginOrRegistrateComponent }
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
