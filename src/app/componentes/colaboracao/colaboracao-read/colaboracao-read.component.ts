import { ColaboracaoService } from './../colaboracao.service';
import { Colaboracao } from './../colaboracao.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colaboracao-read',
  templateUrl: './colaboracao-read.component.html',
  styleUrls: ['./colaboracao-read.component.css']
})
export class ColaboracaoReadComponent implements OnInit {

  colaboracao: Colaboracao[] = []
colunas = ['descricao', 'audio','autor','acoes']


constructor(private colaboracaoService: ColaboracaoService,
  private router: Router) { }



  ngOnInit(): void {
    this.colaboracaoService.read().subscribe(colaboracao => {
      this.colaboracao = colaboracao
      console.log(colaboracao)
      })
  }

  editar(colaboracao: Colaboracao): void {
    console.log("testando edição de colaboração ", colaboracao);
    this.colaboracaoService.salvar = false;
    this.colaboracaoService.colaboracao = colaboracao;
    this.router.navigate(['/colaboracao/create'])
    }





    excluir(colaboracao: Colaboracao): void {
      this.colaboracaoService.colaboracao = colaboracao;
      this.router.navigate(['/colaboracao/delete'])
      }
}


