import { Injectable } from '@angular/core';
import { RegistrationType, RegistrationStep, Category, RegistrationData } from '../model/registration.model';
import { Subject } from 'rxjs';

const registrationTypes: { [key: string]: RegistrationStep } = {
  personal: { url: 'personal', title: 'Személyes adatok' },
  bio: { url: 'bio', title: 'Bemutatkozás' },
  shopping: { url: 'shopping', title: 'Bevásárlás' },
  login: { url: 'login', title: 'Belépés' },
  teaching: { url: 'teaching', title: 'Tanítás' },
  check: { url: 'check', title: 'Ellenőrzés' }
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  next = new Subject();
  prev = new Subject();
  registrate = new Subject();

  registrationData: RegistrationData = {};

  constructor() { }

  getSteps(category: Category, isLoggedIn = true): RegistrationStep[] {
    if (isLoggedIn)
      return [ registrationTypes[category], registrationTypes.login, registrationTypes.check ];
    else
      return [ registrationTypes[category], registrationTypes.personal, registrationTypes.bio, registrationTypes.check ];
  }
}
