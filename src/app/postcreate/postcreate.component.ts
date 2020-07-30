import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { AppService } from './../services/app.service'; 

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent {

  constructor(private appService: AppService, 
              private formBuilder: FormBuilder) { }

  public form : FormGroup = this.formBuilder.group({
    title: ["", Validators.required], 
    body: ["", Validators.required]
  });  

  ngOnInit() {
  }

  create(e) {
    this.appService
    .save(this.form.value.title, this.form.value.body)
    .subscribe(res => this.clear()); 
  }

  clear() {
    this.form  = this.formBuilder.group({
      title: ["", Validators.required], 
      body: ["", Validators.required]
    });  
  }

  get f() {
    return this.form.controls; 
  }

}
