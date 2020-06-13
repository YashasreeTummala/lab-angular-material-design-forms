import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordValidation } from 'src/app/validations/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  hide = true;
  hide1 = true;

  get firstName() {
    return this.myForm.get('FirstName');
  }

  get lastName() {
    return this.myForm.get('LastName');
  }

  get email() {
    return this.myForm.get('Email');
  }

  get password() {
    return this.myForm.get('Password');
  }

  get confirmPassword() {
    return this.myForm.get('ConfirmPassword');
  }
  // FormBuilder has FormFroup & FormControl.
  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z]+$')]],
      LastName: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[a-zA-Z]+$')]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,40})')]],
      ConfirmPassword: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,40})')]]
    }, { validator: passwordValidation });
  }

  ngOnInit(): void {
  }

  submitDetails() {
    if (this.myForm.invalid) {
      return false;
    }
    console.log(this.myForm.value);
  }
}
