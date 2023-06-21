import { Component } from '@angular/core';
import {CheckboxControlValueAccessor, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  loginForm = new FormGroup({
    // user  :new FormControl('', Validators.required),
    // user  :new FormControl('', [Validators.required,Validators.email]),

    //validaton for fullName
    fullName  :new FormControl('', Validators.required),
    // userName  :new FormControl('', [Validators.required,Validators.pattern('[a-zA-z]+$')]),
     //validaton for user name
    userName  :new FormControl('', [Validators.required,Validators.minLength(6), Validators.maxLength(20)]),
     //validaton for password
    password : new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    // CheckBox : new FormControl('', Validators.required)
    
    // user  :new FormControl('abc'), //defalut name
    // password : new FormControl('123') //default password
  }) 

//defintion of loginuser method
  loginUser(){
    console.log(this.loginForm.value);
  }
 
  
  get fullName(){
    return this.loginForm.get('fullName');
  }
  get userName(){
    return this.loginForm.get('userName');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get checkBox(){
    return this.loginForm.get('password');
  }
}
