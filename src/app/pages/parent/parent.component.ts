import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  namaMurid: string = '';
  tanggal: any;
  gaji = 10000000;
  // buat kondisi
  statusKursusAngular!: boolean;
  statusKursusIonic: boolean = false;
  contohNgModel: string = '';
  password: string = '';
  date: string = '';

  showErrorMsg: boolean = false;
  showName!: string;

  statusKursus: number = 0;
  // statusKursus: string = 'Angular';
  kondisiA: string = 'test';
  // daftarPegawai: any[] = [];

  materiAngular: any[] = [
    'Component',
    'Directive',
    'Pipe',
    'Class',
    'Life Cycle Hook'
  ]

  daftarPegawai: any[] = [
    {
      name: 'Jemy',
      posisi: 'Staff',
      divisi: 'IT',
      tugas: [
        {
          tugasJabatan: 'Developer',
          tugasDivisi: 'Team Lead'
        }
      ]
    },
    {
      name: 'Anton',
      posisi: 'Staff',
      divisi: 'Keuangan',
      tugas: [
        {
          tugasJabatan: 'Payroll',
          tugasDivisi: 'Manager'
        }
      ]
    },
    {
      name: 'Benny',
      posisi: 'Staff',
      divisi: 'HRD',
      tugas: [
        {
          tugasJabatan: 'Lembur',
          tugasDivisi: 'SPV'
        }
      ]
    },

  ]

  latihanAngular: any[] = [
    {
      pertemuan: 1,
      materi: 'component',
      status: 'selesai'
    },
    {
      pertemuan: 2,
      materi: 'directive',
      status: 'selesai'
    }

  ]



  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    // logic call api
    // this.namaMurid = 'Jemy';
    this.tanggal = new Date();
    console.log('tanggal', this.tanggal)
    // panggil API call: 
    // const dataDariApi = 'Jemy Sarlury';
    // this.contohNgModel = dataDariApi;
  }

  showData(event: any){
    this.namaMurid = '';
    console.log(event)
  }

  simpan(){
    console.log('ngModel', this.contohNgModel)
    console.log('Password:', this.password)
    console.log('Date:', this.date)
    this.showName = this.contohNgModel;
    if(this.contohNgModel === '') {
      this.showErrorMsg = true;
    } else {
      this.showErrorMsg = false;
    }
  }

  goToChild(){
    const data = {
      nama: 'Jemy', 
      posisi: 'Trainer'
    }

    this.router.navigate(['/child'], {queryParams: data})
  }

}
