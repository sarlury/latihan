import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
  users = [
    { id: 1, name: 'Joko', active: true },
    { id: 2, name: 'Sari', active: false },
    { id: 3, name: 'Budi', active: true }
  ];

  counter$ = new BehaviorSubject<number>(0);

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

  // getStatusAktif(): Observable<any> {
  //   return of(...this.users).pipe(
  //     filter(user => user.active)
  //   );
  // }


  // get counter(): Observable<number> {
  //   return this.counter$.asObservable();
  // }

  // increment() {
  //   this.counter$.next(this.counter$.value + 1);
  // }
  // decrement() {
  //   this.counter$.next(this.counter$.value - 1);
  // }
}
