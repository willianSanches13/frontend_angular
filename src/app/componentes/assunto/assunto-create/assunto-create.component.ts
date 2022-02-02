import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssuntoService } from '../assunto.service';
import { Assunto } from '../assunto.model';
import { Imagem } from '../../imagem/imagem.model';



@Component({
  selector: 'app-assunto-create',
  templateUrl: './assunto-create.component.html',
  styleUrls: ['./assunto-create.component.css']
})
export class AssuntoCreateComponent implements OnInit {


  assunto: Assunto = {
    nomeAssunto: '', disciplina_idDisciplina: ''
  }

  constructor(private assuntoService: AssuntoService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.assuntoService.salvar) {
      this.assunto = { nomeAssunto: '', disciplina_idDisciplina: '' }
    } else {
      this.assunto = this.assuntoService.assunto;
    }
  }




  cancelar(): void {
    this.router.navigate(['./'])
  }


  criarAssunto(): void {

    this.assuntoService.create(this.assunto).subscribe(() => {
      this.assuntoService.showMessage('Assunto Cadastrado!')
      this.router.navigate(['/'])
    }
    )
  }
}

