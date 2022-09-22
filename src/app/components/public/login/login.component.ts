import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


declare let alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;


  frmLogin!: FormGroup;
  frmRegister!: FormGroup;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.frmLogin = this.formBuilder.group({
      id_usuario: '',
      password: '',
    });

    this.frmRegister = this.formBuilder.group({
      id_usuario: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
  }

  signIn(): void {

    this.loginService.signIn(this.frmLogin.value).subscribe((result) => {
      console.log(result);
      if (result.estado) {
        window.localStorage.setItem('token', result.token.access_token);
        window.localStorage.setItem('api_token', result.token.api_token);
        this.router.navigateByUrl('/private/comida-tipica');
      } else {
        alertify.error("Usuario no encontrado");
        this.frmLogin.get('id_usuario')?.setValue('');
        this.frmLogin.get('password')?.setValue('');
      }
    });
  }

  registerUser(): void {

    this.loginService.register(this.frmRegister.value).subscribe(response => {
      if (response.user) {
        alertify.success("Usuario Registrado Correctamente");
        this.closebutton.nativeElement.click();
      }
    })
  }

}
