import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthActions } from '../commons/actions/athentification.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { user, password } = this.loginForm.value;
    if (user === 'test01' && password === 'test01') {
      this.store.dispatch(AuthActions.login({ user }));
      this.router.navigate(['/tareas']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
