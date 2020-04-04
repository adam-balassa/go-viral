import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animation } from 'src/app/components/animations';
import { Subscription } from 'rxjs';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  animations: [ animation() ]
})
export class ShoppingComponent implements OnInit {

  help: boolean;

  zip: string;
  city: string = '';
  frequency: number = -1;
  payment = {
    transfer: true,
    cash: true
  };
  description: string;

  @ViewChild('form') form;
  constructor(private link: ActivatedRoute, private registration: RegistrationService) {}

  ngOnInit() {
    this.setRegistrationType(this.link.snapshot.parent.params);
  }

  setRegistrationType(params) {
    this.help = params.help === 'help';
  }

  zipChanged() {
    if (this.zip.length === 4)
      this.city = 'Budapest';
    else this.city = '';
  }

  next() {
    this.registration.registrationData.shopping = {
      zip: this.zip, frequency: this.frequency, payment: this.payment, description: this.description 
    };
    this.registration.next.next();
  }

  prev() {
    this.registration.prev.next();
  }

}
