import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocationModalPage } from '../location-modal/location-modal.page';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  address = 'New Home Town,old way';
  category: any;
  searchQuery: any;
  searchdata: any;
  user_id: any;

  constructor(
    private menuController: MenuController,
    private router: Router,
    private modalCtrl: ModalController,
    private apiservice: ApiService,
    private util: UtilService,
    private jwthelper:JwtHelperService
  ) { 
    const decodedToken = this.jwthelper.decodeToken(localStorage.getItem('access_token'));
    console.log(decodedToken);
    localStorage.setItem('user_id',decodedToken.user_id);
  }

  ionViewWillEnter() {
    this.menuController.enable(true);
    this.loadData();
  }
  ngOnInit() {
  }

  loadData() {
    this.apiservice.getcategory()
      .subscribe((data: any) => {
        console.log(data);
        this.category = data;
        this.searchdata=data;
      })
  }

  search(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.category = this.searchdata.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.loadData();
    }

  }

  onCancel(ev) {
    ev.target.value = '';
    this.loadData();
  }

  openSalon(item) {
    localStorage.setItem('category',JSON.stringify(item));
    this.router.navigate(['details']);
  }
  onSearchChange(event) {

  }
  // goToMap() {
  //   this.presentModal();
  // }

  // async presentModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: LocationModalPage
  //   });

  //   modal.onDidDismiss().then((data: any) => {
  //     console.log(data);
  //     this.address = data.data.addr;
  //   });
  //   return await modal.present();
  // }

}
