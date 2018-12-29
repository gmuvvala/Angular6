import { Component, OnInit } from '@angular/core';
import { RegModel } from './regModel.model';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'registration-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  model = new RegModel("first name","last name","111-111-1111");
  submitted = false;
  constructor() {
    }

  ngOnInit() {
    }
  onSubmit(){
    this.submitted = true;
  }
}
