import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  titleChild: string = 'Ini CHILD Pages';
  dataDariParent: any;
  idParam: any;

  @Input() murid: string = '';
  @Output() lihatData = new EventEmitter();

  constructor(
    private getUrlParam: ActivatedRoute
  ){
    this.getUrlParam.params.subscribe(params => {
      console.log('params:', params['id']);
    })
    this.getUrlParam.queryParams.subscribe({
      next: (result) => {
        console.log('result', result)
        this.dataDariParent = result;
      }
    })
  }

  save() {
    this.lihatData.emit('dari child');
    // console.log(this.lihatData)
  }

}
