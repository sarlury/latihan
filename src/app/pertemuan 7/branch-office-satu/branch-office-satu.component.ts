import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-office-satu',
  standalone: false,
  templateUrl: './branch-office-satu.component.html',
  styleUrl: './branch-office-satu.component.scss'
})
export class BranchOfficeSatuComponent implements OnInit {
  dataPegawai: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ){
    // get param
   
  }
  ngOnInit() {
   this.activatedRoute.queryParams.subscribe(result => {
     console.log('result', result)
 
    this.dataPegawai = result;
   })
   console.log(this.activatedRoute.snapshot)
  }

}
