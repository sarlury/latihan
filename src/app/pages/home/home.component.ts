import { Component, OnInit } from '@angular/core';
import { Pegawai } from '../../models/pegawai';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // pegawai!: Pegawai;
  title!: string;
  dataPegawai: any;
  
// variable di tulis diatas constructor
  constructor() {

  }

  ngOnInit(): void {
      this.getDataPegawai();
  }

  getDataPegawai() {
    const pegawai: Pegawai = {
      nama: '',
      nomorIndukPegawai: '',
      nik: 0,
      jabatan: '',
      gaji: 0,
      tugas: {},
      tunjangan: [],
      divisi: ''
    }

    this.dataPegawai = pegawai;




  }

}
