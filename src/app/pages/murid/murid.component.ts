import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-murid',
  standalone: false,
  templateUrl: './murid.component.html',
  styleUrl: './murid.component.scss'
})
export class MuridComponent {

  @Input() ListMurid: any[] = [];
  @Output() ShowListMurid = new EventEmitter();

  constructor(){}

  showData(){
    this.ShowListMurid.emit();
  }

}
