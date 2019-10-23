import { Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationEnd } from '@angular/router';
import { MyCookieService } from '../services/my-cookie.service';
import { ToastrService } from 'ngx-toastr';
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiLoading:any;
  loginData:any= {email:'',password:'',deviceType: 'Web', serviceKey: 'U2kaw394fckxegsmretk', fcmToken: 'c81e728d9d4c2f636f067f89cc14862c'};

  constructor(  
  	private api:ApiService,
    private myCookieService : MyCookieService,
    private router : Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {

  }

  doLogin(){
    this.apiLoading=true;
    var fd = new FormData();
    fd.append('email', this.loginData.email);
    fd.append('password', this.loginData.password);
    this.api.postDataApi('login',fd).subscribe((response : any) => {
      if(response.errorCode == '0'){
        this.setCookieAndNavigate(response.data[0]);
      } else {
        this.toastr.error(response.message, 'Please Try Again');
      }
      this.apiLoading=false;
    },
    (error: any) => {
      console.log(error);
      this.apiLoading=false;
    }
    )
  }

  setCookieAndNavigate(user){
    this.myCookieService.setCookie('user', user);
    this.router.navigate(['dashboard']);
  }


}
