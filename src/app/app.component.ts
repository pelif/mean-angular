import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { AppService } from './services/app.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-angular';

  constructor(private appService: AppService, 
              private formBuilder: FormBuilder) { } 

  public form = this.formBuilder.group({
    title: [""], 
    body: [""]
  });             

  ngOnInit() {
    this.appService.fetchServer().subscribe(data => console.log(data));
  }

  create(e) {
    this.appService.save(this.form.value.title, this.form.value.body).subscribe(res => console.log(res)); 
  }
}
