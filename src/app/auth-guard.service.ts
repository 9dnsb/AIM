import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  signedIn = false;

  constructor(public router: Router, public events: Events) {
    this.events.subscribe('data:AuthState', async (data) => {
      //console.log("Guard");
      this.signedIn = data.signedIn;
    });
  }

  canActivate() {
    //console.log(this.signedIn);
    if (!this.signedIn) {
      this.router.navigate(['/login']);
    }
    return this.signedIn;
  }
}
