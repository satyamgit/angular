import { Component, OnInit } from '@angular/core';
import { MyCookieService } from '../services/my-cookie.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	user:any;
	apiLoading:any;

	constructor(public myCookieService:MyCookieService, private toastr: ToastrService, private router : Router) { }

	ngOnInit() {
		window.scrollTo(0, 0);
		this.user = this.myCookieService.getCookie('user');


	}

	logout(){
		this.apiLoading= true;
		this.myCookieService.deleteCookie('user');
		this.user = undefined;
		this.toastr.success('Successfully Logout.','Thank You');
		setTimeout(() => { 
			this.myCookieService.deleteCookieAll();
			this.apiLoading= false;
		}, 1000);
		this.router.navigate(['/']);
	}

}
