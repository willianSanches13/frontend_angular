import { ImagemService } from './../imagem.service';
import { Imagem } from './../imagem.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboracaoService} from '../../colaboracao/colaboracao.service';
import { Colaboracao} from '../../colaboracao/colaboracao.model';



@Component({
  selector: 'app-colapsar-imagem',
  templateUrl: './colapsar-imagem.component.html',
  styleUrls: ['./colapsar-imagem.component.css']
})


export class ColapsarImagemComponent implements OnInit {

  colaboracao : Colaboracao ={ descricao: '', audio: '', imagem_idImagem:'', professor_idProfessor:'', status: true};

  imagem: Imagem = { nomeImagem: '', texto: '', figura: '', audio: '', assunto_idAssunto: '', colaboracoes: [], professor_idProfessor: '' };

  constructor(private colaboracaoService : ColaboracaoService, private imagemService: ImagemService, private router: Router) { }



  ngOnInit(): void {
    this.imagem = this.imagemService.imagem;
    this.colaboracao = this.colaboracaoService.colaboracao;
  }



  novaColaboracao(): void {
    this.imagemService.imagem = this.imagem;
    this.router.navigate(['colaboracao/create'])
  }

  cancelar(): void {
    this.router.navigate(['/'])
  }
}




