import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/interfaces/login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: login = { username: '', password: '' };
  submitted = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private util: UtilService,
    private menuController: MenuController
  ) { }
  ngOnInit() {
    this.menuController.enable(false);
  }

  onLogin(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      console.log('login');
      if (this.login.username === '') {
        this.util.toast('Please enter proper mobile number', 'danger', 'bottom');
        return false;
      }

      if (this.login.password === '') {
        this.util.toast('Please enter password', 'danger', 'bottom');
        return false;
      }
      let data = {
        username: this.login.username,
        password: this.login.password
      }
      this.api.customerlogin(data)
        .subscribe((data: any) => {
          console.log(data);
          localStorage.setItem('uid', form.control.value.username);
          localStorage.setItem('refresh_token', data.refresh);
          localStorage.setItem('access_token', data.access);
          this.router.navigate(['/home'], { replaceUrl: true });
        },(error:any)=>{
          this.util.toast('Username or password is incorrect', 'danger', 'bottom');
        })

    }
  }

  resetPass() {
    this.router.navigate(['reset']);
  }
  register() {
    this.router.navigate(['register']);
  }

}
