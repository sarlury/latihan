import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  lists = ['Jemy', 'Ahmad'];
  constructor() { }

  getList(){
    return this.lists;
  }
}
