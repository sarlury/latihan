import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-display-list',
  standalone: false,
  templateUrl: './display-list.component.html',
  styleUrl: './display-list.component.scss'
})
export class DisplayListComponent implements OnInit {

  listCountry: any[] = [];

  constructor(
    private listService: ListServiceService
  ) {

  }
  ngOnInit() {
  const idStudent = 117263576312;
  const list = this.listService.getListStudent(idStudent);
  this.getObserveable();
  }

  getObserveable(){
    this.listService.cobaObserveable().subscribe({
      // next untuk return value
      next: (result) => {
        console.log('result dari API', result)
        this.listCountry = result.Results;
      },
      // error untuk return jika terjadi kesalahan pada API/server
      error: (error) => {
        console.log('error', error)
      }
    })
  }

}
