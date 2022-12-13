import { Component, OnInit } from '@angular/core';
import {Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  credenciales = {
    email: '',
    password: '',
  }

  async login(){
    console.log('credenciales', this.credenciales);
    const res = await this.auth.loginEP(this.credenciales.email, this.credenciales.password)
    .catch(error =>{
      console.log('Error', error);
    })
    if (res) {
      console.log('res', res);
      this.router.navigate(['/qrgen']);
    }
  }

  

}
