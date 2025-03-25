import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  titleChild: string = 'Ini CHILD Pages';

  @Input() murid: string = '';
  @Output() lihatData = new EventEmitter();

  constructor(){}

  save() {
    this.lihatData.emit('dari child');
    // console.log(this.lihatData)
  }

}
