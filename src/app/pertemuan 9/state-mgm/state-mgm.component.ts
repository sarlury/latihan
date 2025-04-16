import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountersService } from '../../service/counters.service';

@Component({
  selector: 'app-state-mgm',
  standalone: false,
  templateUrl: './state-mgm.component.html',
  styleUrl: './state-mgm.component.scss'
})
export class StateMgmComponent implements OnInit {

  // variable
  counter$!: Observable<number>
  data: any;

  constructor(
    private counterService: CountersService
  ){
    this.counter$ = this.counterService.counter;
    console.log('counter', this.counter$)
  }
  ngOnInit() {
    this.getData();
  }

  tambahSatu() {
    this.counterService.tambah();
  }

  kurangSatu() {
    this.counterService.kurang();
  }

  getData() {
    this.counterService.getDataUser().subscribe({
      next: (result) => {
        console.log('result', result)
        this.data = result;
      }
    })
  }

}
