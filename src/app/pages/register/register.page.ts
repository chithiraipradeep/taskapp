import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController, NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { register } from 'src/app/interfaces/register';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  user: register = {
    email: '',
    password: '',
    username: '',
    dob: '',
    phone: '',
    address: '',
    avatar: ''
  };
  slideOpts = {
    slidesPerView: 1,
    allowTouchMove: false
  };
  otp: any = '';
  hideResend: boolean;
  constructor(
    private location: Location,
    private util: UtilService,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    private apiservice: ApiService
  ) {
    this.hideResend = false;

  }

  ngOnInit() {
  }
  goNext() {
    this.slides.slideNext(500).then(d => console.log(d));
  }
  phoneValidation() {
    console.log('user', this.user)

    if (this.user.phone === '' || this.user.phone.length != 10) {
      this.util.toast('Please enter proper mobile number', 'danger', 'bottom');
      return false;
    }
    let data = {
      phone: this.user.phone
    };
    this.apiservice.validate_phone(data)
      .subscribe((data: any) => {
        console.log(data);
        if (data.status == true) {
          setTimeout(() => {
            this.hideResend = true;
          }, 3000);
          this.goNext();
        }
        else {
          this.util.toast(data.detail, 'danger', 'bottom');
        }
      });
  }

  prev() {
    this.slides.slidePrev(1000).then(d => console.log(d));
  }
  back() {
    this.location.back();
  }
  onOtpChange(event) {
    console.log(event);
    this.otp = event;
  }
  validateOtp() {
    if (this.otp === '') {
      this.util.toast('Please enter otp', 'danger', 'bottom');
      return false;
    }

    let data = {
      phone: this.user.phone,
      otp: this.otp
    }

    this.apiservice.validate_otp(data)
      .subscribe((data: any) => {
        console.log(data);
        if (data.status == true) {
          this.goNext();
        }
        else {
          this.util.toast(data.detail, 'danger', 'bottom');
        }
      })

  }
  password() {
    if (this.user.password === '') {
      this.util.toast('Please enter password', 'danger', 'bottom');
      return false;
    }
    this.goNext();
  }

  parseDate() {
    let date = this.user.dob.substring(0, 10);
    this.user.dob = date;
    console.log(date);
  }

  submit() {
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!(emailfilter.test(this.user.email))) {
      this.util.toast('Please enter valid email', 'danger', 'bottom');
      return false;
    }
    localStorage.setItem('uid', this.user.email);

    let data = {
      phone: this.user.phone,
      password: this.user.password,
      username: this.user.username,
      profile: {
        date_Of_Birth: this.user.dob,
        email: this.user.email,
        address: this.user.address
      }
    }
    console.log(data);
    this.apiservice.customerregister(data)
      .subscribe((data: any) => {
        console.log(data);
        if (data.success == "True") {
          this.navCtrl.navigateRoot(['login']);
        }
        else {
          this.util.toast(data.detail, 'danger', 'bottom');
        }
      })

  }
  async avatar() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Avtars',
      mode: 'ios',
      buttons: [{
        text: 'Gallery',
        icon: 'image-outline',
        handler: () => {
          console.log('galley clicked');
        }
      }, {
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  resend() {
    console.log('resend');
  }
}
