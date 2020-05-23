import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router : Router ) { }

  login(usuario){

    

      return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
        /*Retrun http*/
        var token = (JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]);

        localStorage.setItem("token", token);

        console.info("Token :" + localStorage.getItem("token"));


        this.router.navigate(['home']);

      },
      
      error => {
        console.error("Verifique usuario  y password ");
        alert('Access Denied !')
      }
      
      
      );



  }
}
