import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../../service/list-service.service';

@Component({
  selector: 'app-kelas',
  standalone: false,
  templateUrl: './kelas.component.html',
  styleUrl: './kelas.component.scss'
})
export class KelasComponent implements OnInit {
  NamaSiswa: any;
  namaMurid: any[] = [];

  constructor(
    private listService: ListServiceService
  ){}
  ngOnInit(): void {
  //  data list murid
  }

  showNama()
  {
    this.namaMurid = this.listService.getList();
    // this.namaMurid = this.listService.getList();
    // console.log(cek) 
}

}
