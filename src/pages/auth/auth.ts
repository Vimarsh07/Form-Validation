import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
 
import { HomePage } from '../home/home';
 
@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
 
export class AuthPage {
 
    authForm: FormGroup;
 
    constructor(public nav: NavController,  public formBuilder: FormBuilder) {
 
        this.nav = nav;

        function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
            if (control.value !== undefined && (isNaN(control.value) || control.value < 10 || control.value > 90)) {
                return { 'out of range': true };
            }
            
            return null;
        }
 
        this.authForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(5)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*') ])],
            age: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), ageRangeValidator ] )],
            email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')])] 
            
           
        });
    }
 
    onSubmit(value: any): void { 
        if(this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            window.localStorage.setItem('age', value.age);
            window.localStorage.setItem('email', value.email);
 
            this.nav.push(HomePage);
        }
    }   
}