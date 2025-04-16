import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountersService {

  counter$ = new BehaviorSubject<number>(1);

  users = [
    {
      id: 1,
      nama: 'Agus',
      active: true
    },
    {
      id: 2,
      nama: 'Budi',
      active: false
    },
    {
      id: 3,
      nama: 'Ratna',
      active: true
    },
  ]

  constructor() { }

  get counter(): Observable<number> {
    return this.counter$.asObservable();
  }

  tambah() {
    // next -> menyimpan perintah eksekusi value
    this.counter$.next(this.counter$.value + 1);
  }

  kurang() {
    this.counter$.next(this.counter$.value - 1);
  }

  getDataUser(): Observable<any> {
    return of(...this.users).pipe(
      filter(user => user.active),
    )
  }

}
