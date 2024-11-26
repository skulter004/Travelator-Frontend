import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Profile } from '../Models/Profile.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'https://localhost:7034/api/Account'; 
  private profileSource = new BehaviorSubject<Profile | null>(null);
  profile$ = this.profileSource.asObservable();

  
  constructor(private http:HttpClient) {
    this.fetchProfileDetails();
   }

   fetchProfileDetails() {
    return this.http.get<{ details: Profile }>(`${this.apiUrl}/profileDetails`).pipe(
      map(res => res.details), 
      tap((profile: Profile) => {
        this.profileSource.next(profile);
      })
    );
  }

  getProfile(): Profile | null {
    return this.profileSource.value;
  }
}
