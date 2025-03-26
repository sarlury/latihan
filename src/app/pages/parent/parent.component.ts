import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  namaMurid: string = 'jemy';
  tanggal: any;
  gaji = 10000000;
  // buat kondisi
  statusKursusAngular!: boolean;
  statusKursusIonic: boolean = false;

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
  ){}

  ngOnInit(): void {
    // logic call api
    // this.namaMurid = 'Jemy';
    this.tanggal = new Date();
    console.log('tanggal', this.tanggal)
  }

  showData(event: any){
    this.namaMurid = 'Jemy';
    console.log(event)
  }

  save(){
    
  }

}
