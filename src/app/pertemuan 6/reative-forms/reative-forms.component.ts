import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reative-forms',
  standalone: false,
  templateUrl: './reative-forms.component.html',
  styleUrl: './reative-forms.component.scss'
})
export class ReativeFormsComponent implements OnInit {

formMurid!: FormGroup;
// template form
// nama, email, alamat, password, umur

 constructor(
  private formBuilder: FormBuilder
 ){

 }
  ngOnInit() {
    this.formInit();
  }

  formInit(){
    // membuat group untuk form

    // array [initial value, control value]
    this.formMurid = this.formBuilder.group({
      nama: ['', Validators.required],
      email: ['', (Validators.required, Validators.email)],
      alamat: ['', Validators.required],
      password: ['', Validators.required]
    });

    // new formControl
    // this.formMurid = this.formBuilder.group({
    //   nama: new FormControl(Validators),
    //   email,
    //   alamat,
    //   password,
    //   umur
    // })



  }

  simpan(){
    // get input by value
    // const valueNama = this.formMurid.get('email')?.value;
    // console.log('email:', valueNama)

    // get all value
    // const valueAll = this.formMurid.getRawValue();
    // console.log('all data:', valueAll)

    if(this.formMurid.invalid) {
      this.formMurid.markAllAsTouched();
      return;
    } else {
      this.formMurid.getRawValue();
    }


  }



}
