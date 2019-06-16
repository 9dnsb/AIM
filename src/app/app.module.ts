import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardDetailsPage } from './card-details/card-details.page';
import { QuizPage } from './quiz/quiz.page';
import { QuizPageModule } from './quiz/quiz.module';
import { CardDetailsPageModule } from './card-details/card-details.module';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [CardDetailsPage, QuizPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, QuizPageModule, CardDetailsPageModule],
  providers: [
    StatusBar,
    LocalNotifications,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
