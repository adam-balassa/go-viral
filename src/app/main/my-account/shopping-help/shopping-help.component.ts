import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Need } from 'src/app/model/api.model';

@Component({
  selector: 'app-shopping-help',
  templateUrl: './shopping-help.component.html',
  styleUrls: ['./shopping-help.component.css']
})
export class ShoppingHelpComponent implements OnInit {

  needs: Need[];
  constructor(private account: AccountService) { }

  ngOnInit() {
    this.initNeeds();
  }

  async initNeeds() {
    this.needs = await this.account.getUsersNeeds();
  }

  displayShoppingFrequency(n: number): string {
    switch (n) {
      case 0: return 'egyszer';
      case 1: return 'naponta';
      case 2: return '2 naponta';
      case 3: return 'hetente kétszer';
      case 7: return 'hetente';
      case 14: return 'ritkábban, mint hetente';
    }
  }

  getAge(birthday: string) {
    const birthDate = new Date(birthday);
    const now = new Date();
    return now.getFullYear() - birthDate.getFullYear();
  }

}
