import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from './app-constants';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {


  }

  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);

  }

  //Cargar usuarios para editar
  getStudant(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  deleteUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' })

  }

  //http://localhost:8080/ejemploSpringRestApi/usuario/usuarioPorNombre/
  consultarUser(nombre: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNombre/" + nombre);

  }

  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user);

  }

  updateUsuario(user): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user);

  }


}
