import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      console.log('Valor siendo editado : ' + id);
      this.userService.getStudant(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }


  //Metodo para salvar

  salvarUser(){
    if(this.usuario.id != null && this.usuario.id.toString().trim() != null){ /*Actualizar o editar*/
      this.userService.updateUsuario(this.usuario).subscribe(data => {
        this.new();
        console.info("Update success : " + data);
      });
    }else{
      this.userService.salvarUsuario(this.usuario).subscribe (data => { /*Salvando nuevo Usuario*/
        this.new();
        console.info("User saved  : " + data);
      });
    }


  }

  new(){ /*Clear screen*/
    this.usuario = new User();
  }

}
