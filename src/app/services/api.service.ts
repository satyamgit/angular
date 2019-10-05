import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject,Subscription, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.baseUrl;
  
  constructor(private _httpClient : HttpClient) {}

  /*%%%%%%%%GET API Data%%%%%%%%%*/
  getDataApi(subUrl):Observable<any>{     
    return this._httpClient.get(this.baseUrl+subUrl);
  }

  getDataApiById(subUrl, id):Observable<any>{
  	const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const params = new HttpParams().set('slug',id);    
    return this._httpClient.get(this.baseUrl+subUrl,{params : params});
  }

  /*%%%%%%%%POST API Data%%%%%%%%%*/
  postDataApi(subUrl, formData):Observable<any>{
    const  httpOptions : any = new  HttpHeaders().set("Content-Type", "application/json").set("Access-Control-Allow-Origin", "*");     
    return this._httpClient.post(this.baseUrl+subUrl,formData,httpOptions);
  }

}
