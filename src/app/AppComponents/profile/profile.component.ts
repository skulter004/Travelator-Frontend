import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Models/Profile.model';
import { AccountService } from 'src/app/Services/account.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: Profile | null;
  constructor(private authService: AuthService, private router: Router, private accountService: AccountService){}
  logOut(){
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

  ngOnInit() {
    this.accountService.profile$.subscribe((res: Profile | null) => {
      this.profile = res;
    });
    
    if (!this.profile) {
      this.accountService.fetchProfileDetails().subscribe();
    }
  }
}
