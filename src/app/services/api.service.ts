import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any;
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
  }



  //api 

  public validate_phone(data) {
    return this.http.post(this.baseUrl + "validate_phone/", data, {});
  }

  public validate_otp(data) {
    return this.http.post(this.baseUrl + "validate_otp/", data, {});
  }

  public customerregister(data) {
    return this.http.post(this.baseUrl + "register/", data, {});
  }

  public customerlogin(data) {
    return this.http.post(this.baseUrl + "token/", data, {});
  }


  public getcategory() {
    return this.http.get(this.baseUrl + "category/", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    });
  }

  public getsubcategory(id) {
    return this.http.get(this.baseUrl + "subcategory/?category=" + id, {
       headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    });
  }

  public getdefects(id) {
    return this.http.get(this.baseUrl + "defects/?subcategory=" + id, {
       headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    });
  }

  public addtocart(data) {
    return this.http.put(this.baseUrl + "cart/", data, {
       headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    });
  }



}
