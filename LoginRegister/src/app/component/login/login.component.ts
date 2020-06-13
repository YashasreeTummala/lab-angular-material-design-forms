import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordValidation } from 'src/app/validations/validations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  hide = true;

  get email() {
    return this.myForm.get('Email');
  }

  get password() {
    return this.myForm.get('Password');
  }

  // FormBuilder has FormFroup & FormControl.
  constructor(formBuilder: FormBuilder, private router: Router) {
    this.myForm = formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,40})')]],
    });
  }

  ngOnInit(): void {
  }

  submitDetails() {
    if (this.myForm.invalid) {
      return false;
    }


    if (this.myForm.get('Email').value === 'yash@gmail.com' && this.myForm.get('Password').value === 'Prograd9$') {
      console.log(this.myForm.value);
      this.router.navigate(['/display']);
    }
  }
}
