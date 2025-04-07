import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-office',
  standalone: false,
  templateUrl: './head-office.component.html',
  styleUrl: './head-office.component.scss'
})
export class HeadOfficeComponent {

  routingDinamis: string = '';

  constructor(
    private router: Router
  ){}

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
