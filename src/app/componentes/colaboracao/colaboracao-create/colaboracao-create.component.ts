import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboracaoService } from './../colaboracao.service';
import { Colaboracao } from '../colaboracao.model';
import { Imagem } from './../../imagem/imagem.model';
import { ImagemService } from './../../imagem/imagem.service';


@Component({
  selector: 'app-colaboracao-create',
  templateUrl: './colaboracao-create.component.html',
  styleUrls: ['./colaboracao-create.component.css']
})

export class ColaboracaoCreateComponent implements OnInit {

  imagem: Imagem = { _id: 0, nomeImagem: '', texto: '', figura: '', audio: '', assunto_idAssunto: '', colaboracoes: [], professor_idProfessor: '' };

  colaboracao: Colaboracao = {
    descricao: '', audio: '', imagem_idImagem: '', professor_idProfessor: '', status: true
  }
  constructor(
    private imagemService: ImagemService,
    private colaboracaoService: ColaboracaoService,
    private router: Router) { }


  ngOnInit(): void {
 
    this.imagem = this.imagemService.imagem;
    if (this.colaboracaoService.salvar) {
      this.colaboracao = { descricao: '', audio: '', imagem_idImagem: '', professor_idProfessor: '', status: true }
    } else {
      this.colaboracao = this.colaboracaoService.colaboracao;
    }
  }



  criarColaboracao(): void {



    
    this.colaboracaoService.create(this.colaboracao).subscribe(() => {
      this.colaboracaoService.showMessage('Colaboracao cadastrada com sucesso');
      this.router.navigate(['/imagens']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/'])
  }

}
