import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User();
  constructor() { }

  ngOnInit() {
  }

  submit(form: Form) {
    console.log('Submitted');
    console.log(this.model);
  }

}
export class User {
  constructor() { }
}
