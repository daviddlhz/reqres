import { HttpStatusCode } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { storageKey } from '@core/constants/storagekey.enum';
import { IAuthRepository } from '@domain/auth/auth.repository';
import { ILocalStorageRepository } from '@domain/storage/localstorage.repository';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject('authRepository') private authService: IAuthRepository,
    @Inject('localStorageRepository') private localStorageService: ILocalStorageRepository
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.authForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required]],
      password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    this.authService.authentication(this.authForm.value).subscribe((response) => {
      if (response.status == HttpStatusCode.Ok) {
        const { token } = response.body;
        this.localStorageService.save(storageKey.TOKEN, token);
        this.router.navigateByUrl('/home');
      }
    })
  }
}
