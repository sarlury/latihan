import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListServiceService } from '../../service/list-service.service';

@Component({
  selector: 'app-head-office',
  standalone: false,
  templateUrl: './head-office.component.html',
  styleUrl: './head-office.component.scss'
})
export class HeadOfficeComponent implements OnInit {

  routingDinamis: string = '';
  country: any;

  constructor(
    private router: Router,
    private listService: ListServiceService
  ){}
  ngOnInit(): void {
    this.listService.getData().subscribe({
      next: (result) => {
        // console.log('result', result)
        // this.country = result;
      }
    })
  }

  cekLogin(){
 
  }

  goToBranchSatu(){

    const dataPegawai = {
      nama: 'Jemy',
      jabatan: 'Staff',
      divisi: 'IT'
    }

   this.router.navigate(['/branchSatu'], {queryParams: dataPegawai});
  }

  // saveToDatabase(){
  //   if(status === 'success') {
  //     this.router.navigateByUrl('/branchSatu');
  //   }
  // }

  goToBranchDua(id: string){
    this.router.navigate(['/branchDua', id]);
  }

  

}
