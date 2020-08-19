import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  ratting: any;
  feature: any;
  selected: any[] = [];
  category: any = [];
  services: any = [];
  defects: any;
  price: any;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private util: UtilService,
    private apiservice: ApiService
  ) {
    this.ratting = 4;
  }

  ionViewWillEnter() {
    this.category = JSON.parse(localStorage.getItem('category'));
    this.apiservice.getsubcategory(this.category.id)
      .subscribe((data: any) => {
        this.services = data;
        console.log(data);
        this.feature = this.services[0].id;
        this.price = this.services[0].price;
        this.apiservice.getdefects(this.feature)
          .subscribe((data: any) => {
            this.defects = data;
          });

      })
  }

  ngOnInit() {
  }

  segmentChanged(event) {
    this.defects = [];
    this.apiservice.getdefects(event.target.value)
      .subscribe((data: any) => {
        this.defects = data;
      });
    for (let i = 0; i <= this.services.length; i++) {
      if (this.services[i].id == event.target.value) {
        this.price = this.services[i].price;
        break;
      }
    }
  }


  async addtocart(item) {
    let allData={
      user:localStorage.getItem('user_id'),
      service:item.subcategory,
      defects:item.id,
      quantity:1,
      price:this.price,
      total:this.price
    }
    console.log(allData);
    await this.apiservice.addtocart(allData)
    .subscribe((data:any)=>{
      console.log(data);
    })
  }


  back() {
    this.navCtrl.back();
  }
  appoiment() {
    if (this.selected.length <= 0) {
      this.util.errorToast('Please select atleast one service');
      return false;
    }
    this.router.navigate(['make-appoinments']);
  }
  add(item) {
    console.log('before add/remove', this.selected);
    if (this.selected.includes(item)) {
      this.selected.filter(x => console.log(x, item));
      this.selected = this.selected.filter(x => x !== item);
    } else {
      this.selected.push(item);
    }
    console.log('selected', this.selected);
  }

}
