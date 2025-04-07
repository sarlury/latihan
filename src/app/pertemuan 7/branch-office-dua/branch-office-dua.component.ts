import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-office-dua',
  standalone: false,
  templateUrl: './branch-office-dua.component.html',
  styleUrl: './branch-office-dua.component.scss'
})
export class BranchOfficeDuaComponent {

  idPegawai: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params.subscribe(result => {
      console.log(result)
      this.idPegawai = result['id'];
    })
  }

}
