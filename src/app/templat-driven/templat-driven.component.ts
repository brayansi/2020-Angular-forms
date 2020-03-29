import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templat-driven',
  templateUrl: './templat-driven.component.html',
  styleUrls: ['./templat-driven.component.scss']
})
export class TemplatDrivenComponent implements OnInit {

  user = {
    name: '',
    age: '',
    email: '',
    confirmEmail: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm);
  }

}
