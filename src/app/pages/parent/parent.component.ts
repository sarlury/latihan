import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  namaMurid: string = '';
  constructor(){}

  ngOnInit(): void {
    // logic call api
    // this.namaMurid = 'Jemy';
  }

  showData(event: any){
    this.namaMurid = 'Jemy';
    console.log(event)
  }

}
