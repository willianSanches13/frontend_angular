import { HttpClient } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Colaboracao } from './colaboracao.model';
import { Observable } from 'rxjs';
import {Imagem} from '../imagem/imagem.model';


@Injectable({
  providedIn: 'root'
})

export class ColaboracaoService {


  url = "http://localhost:3000/colaboracao"
  salvar = false;

  colaboracao: Colaboracao = {
  descricao: '',
  audio: '',
  imagem_idImagem: '',
  professor_idProfessor: '', 
  status: true
  }

 

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }




    

    
    showMessage(msg: string): void {
      this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
      });
    }


      create(colaboracao: Colaboracao): Observable<Colaboracao>{
      return this.http.post<Colaboracao>(this.url, colaboracao)
    }

    
    read():Observable<Colaboracao[]>{
      return this.http.get<Colaboracao[]>(this.url);
      }

    update(colaboracao: Colaboracao): Observable<Colaboracao> {
      const urlAlterar = `${this.url}/${colaboracao._id}`;
        return this.http.patch<Colaboracao>(urlAlterar, colaboracao)
        }


        delete(colaboracao: Colaboracao): Observable<Colaboracao> {
          const urlExcluir = `${this.url}/${colaboracao._id}`;
          return this.http.delete<Colaboracao>(urlExcluir)
          }
}










