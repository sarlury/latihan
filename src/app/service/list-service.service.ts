import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  lists = ['Jemy', 'Ahmad'];

  path = 'https://jsonplaceholder.typicode.com/todos';
  // path = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';

  constructor(
    private httpCLient: HttpClient
  ) { }

  getList(){
    return this.lists;
  }

  getData(): Observable<any> {
    return this.httpCLient.get(this.path);
  }
}
