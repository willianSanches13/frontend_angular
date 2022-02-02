import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-create',
  templateUrl: './disciplina-create.component.html',
  styleUrls: ['./disciplina-create.component.css']
})
export class DisciplinaCreateComponent implements OnInit {



  disciplina: Disciplina = {
    nomeDisciplina: '', assuntos: []
  }

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router) { }


  ngOnInit(): void {
    if (this.disciplinaService.salvar) {
      this.disciplina = { nomeDisciplina: '', assuntos: [] }
    } else {
      this.disciplina = this.disciplinaService.disciplina;
    }
  }

  criarDisciplina(): void {
    if (this.disciplinaService.salvar) {
      this.disciplinaService.create(this.disciplina).subscribe(() => {
        this.disciplinaService.showMessage('Disciplina cadastrada com sucesso')
        this.router.navigate(['/'])
      })
    } 
  }

  
  cancelar(): void {
    this.router.navigate(['/'])
  }
}
