import { AbstractControl, ValidatorFn } from '@angular/forms';

// Validating Password & ConfirmPassword and exporting passwordValidation.

export function passwordValidation(control: AbstractControl): { [key: string]: boolean } | null {

  const password = control.get('Password');
  const confirmPassword = control.get('ConfirmPassword');
  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  // tslint:disable-next-line: object-literal-key-quotes
  return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null;
}
