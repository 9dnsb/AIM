import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotification } from '@ionic-native/local-notifications/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  scheduled = [];
  myDate = new Date();
  noteName = '';
  customPickerOptions: any;

  constructor(
    private alertCtrl: AlertController,
    private plt: Platform,
    public localNotifications: LocalNotifications,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async showAlert(header2, sub, msg) {
    const alert = await this.alertCtrl.create({
      header: header2,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

  }

  enableNotif() {

    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'You have enabled notifications',
      data: { mydata: 'My hidden message this is' },
      foreground: false // Show the notification while app is open
    });
  }

  delNotif() {
    this.localNotifications.cancelAll();
    this.localNotifications.clearAll();
    this.viewNotif();
  }

  viewNotif() {
    this.localNotifications.getAll().then((res: ILocalNotification[]) => {
      this.scheduled = res;
      this.scheduled = this.getUnique(this.scheduled, 'id');
      console.log(this.scheduled);
    });
  }

  toggle() {
    const res = this.myDate.toString();
    const hours = res.substring(0, 2);
    const minutes = res.substring(3, 6);
    this.repeatingDaily2(parseInt(hours), parseInt(minutes) );
  }

  repeatingDaily2(anHour, aMinute) {
    const random = Math.floor(Math.random() * (+9999999 - +1)) + +1;
    this.localNotifications.schedule({
      id: random,
      title: this.noteName,
      text: 'Test',
      trigger: { every: { hour: anHour, minute: aMinute } }
    });
  }

  createNotif() {
    this.router.navigate(['/create-notification']);
  }

  getUnique(arr, comp) {

    const unique = arr
         .map(e => e[comp])

       // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }
}
