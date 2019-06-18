import { Component, AfterContentInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { APIService } from 'src/API.service';

const listDeckNames = `
query listDeckNames {
  listDecks {
    items {
      id
      name
    }
  }
}
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  authState: any;
  didLogIn = false;
  signUpConfig = {
    header: 'Create Account',
    signUpFields: [
      {label: 'Email', key: 'email', name: 'email', required: true, displayOrder: 1, type: 'string'},

    {label: 'Username', key: 'username', name: 'username', required: true, displayOrder: 2, type: 'string'},
    {label: 'Password', key: 'password', name: 'password', required: true, displayOrder: 3}
    ],
    hiddenDefaults: ['username', 'phone_number']
    };

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    public router: Router,
    private apiService: APIService

  ) {
    this.authState = { signedIn: false };

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.authState.signedIn = authState.state === 'signedIn';
        this.events.publish('data:AuthState', this.authState);
        if (this.authState.signedIn) {
          const query = API.graphql(graphqlOperation(listDeckNames)) as Promise<any>;
          query.then(res => {
            const decks = res.data.listDecks.items;
            if (decks.length === 0 && !this.didLogIn) {
              this.didLogIn = true;
              this.apiService.CreateDeck({
                name: 'Enter Blood Pressure'
              });
            }
          });
        }
      });
    }

    showDecks() {
      this.router.navigate(['/home']);
    }
}
