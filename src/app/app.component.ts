import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'latihanAngular';
  dataPegawai!: [];

// life cycle hook ngOnInit
// function yang di eksekusi setelah component selesai di baca oleh root module.
ngOnInit() {
    console.log('ngOnInit');
    this.title;
    this.getDataPegawai();
}

  getDataPegawai() {
    console.log('get data pegawai')
  }
 }
