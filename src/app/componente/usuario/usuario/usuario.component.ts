import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Observable<User[]>;
  nombre: String;

  constructor(private usuarioService: UsuarioService) {


  }

  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data;
    });

  }

  deleteUsuario(id: Number) {
    this.usuarioService.deleteUsuario(id).subscribe(data => {
      console.log("Regresa el metodo delete: " + data);
      this.usuarioService.getStudentList().subscribe(data => {
        this.students = data;
      });
    });
  }

  consultarUser() {
    this.usuarioService.consultarUser(this.nombre).subscribe(data => {
      this.students = data;
    });
  }
}
