import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm :FormGroup = new FormGroup(
    { 'firstName': new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      'lastName': new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
      'repeatPassword': new FormControl('',Validators.required)
    }
  )

  submit()
  {
    if(this.registrationForm.invalid)
    {
      return ;
    }
    this.registrationForm.reset();
    alert('Successfully submit')
  }
}
