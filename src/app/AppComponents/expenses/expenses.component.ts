import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/Models/Profile.model';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  profile!: Profile | null;
  constructor(private accountService: AccountService){}

  ngOnInit(): void {    
    this.accountService.profile$.subscribe((res: Profile | null) => {
      this.profile = res;
    });
    if (!this.profile) {
      this.accountService.fetchProfileDetails().subscribe();
    }
  }
  get progressPercentage(): number {
    if (this.profile?.budgetLimit && this.profile.usedBudget) {
      return Math.min(
        (Number(this.profile.usedBudget) / Number(this.profile.budgetLimit)) * 100,
        100
      );
    }
    return 0;
  }
}
