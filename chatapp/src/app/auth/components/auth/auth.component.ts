import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  form_login: boolean = false;
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.auth.login(this.loginForm.value).subscribe((data) => {});
    }
  }
  register() {
    if (
      this.registerForm.value.email &&
      this.registerForm.value.password &&
      this.registerForm.value.firstName &&
      this.registerForm.value.lastName &&
      this.registerForm.value.username
    ) {
      this.auth.register(this.registerForm.value).subscribe((data) => {});
    }
  }
}
