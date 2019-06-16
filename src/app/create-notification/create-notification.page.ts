import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.page.html',
  styleUrls: ['./create-notification.page.scss'],
})
export class CreateNotificationPage implements OnInit {
  initDate = new Date();
  myDate = new Date();
  noteName = '';
  customPickerOptions: any;
  constructor(public localNotifications: LocalNotifications,
              private alertController: AlertController) {

    }

  ngOnInit() {
  }

  toggle() {

    if (this.noteName === '' || (this.isValidDate(this.myDate))) {
      this.presentAlert('Error', 'You must enter a name and time');
    } else {
      const res = this.myDate.toString();
      
      const hours = res.substring(0, 2);
      const minutes = res.substring(3, 6);
      this.repeatingDaily2(parseInt(hours), parseInt(minutes) );
      this.presentAlert('Notification Created', 'You have created a notification called ' + this.noteName);
    }

  }

  repeatingDaily2(anHour, aMinute) {
    console.log(anHour, aMinute);
    const random = Math.floor(Math.random() * (+9999999 - +1)) + +1;
    this.localNotifications.schedule({
      id: random,
      title: this.noteName,
      text: 'AIM App Notification',
      trigger: { every: { hour: anHour, minute: aMinute } }
    });
  }

  async presentAlert(head, mess) {
    const alert = await this.alertController.create({
      header: head,
      subHeader: mess,
      buttons: ['OK']
    });

    await alert.present();
  }

  isValidDate(date) {
    return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
  }

}
