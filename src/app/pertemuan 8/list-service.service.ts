import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getListData(){
    return 'list service';
  }

  getListAmount(){
    return 'list Amount';
  }
  getListStudent(id: number){
    return id;
  }

  cobaObserveable(): Observable<any> {
  return this.httpClient.get(this.url);
  }
}
