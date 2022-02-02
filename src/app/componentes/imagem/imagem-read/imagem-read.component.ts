import { ImagemService } from './../imagem.service';
import { Imagem } from './../imagem.model';
import { Component, OnInit } from '@angular/core';
import { ColapsarImagemComponent } from './../colapsar-imagem/colapsar-imagem.component';
import { Router } from '@angular/router';
import { UploadFileService } from '../../../upload-file/upload-file.service';

@Component({
  selector: 'app-imagem-read',
  templateUrl: './imagem-read.component.html',
  styleUrls: ['./imagem-read.component.css']
})
export class ImagemReadComponent implements OnInit {

  imagem: Imagem[] = []
colunas = ['nomeImagem', 'texto','figura', 'audio','assunto_idAssunto','professor_idProfessor','acoes']
files: File | null = null;


constructor(private imagemService: ImagemService,
  private router: Router, private uploadService: UploadFileService){ }



  ngOnInit(): void {
    this.imagemService.read().subscribe(imagem => {
      this.imagem = imagem
      console.log(imagem)
      })
  }

  editar(imagem: Imagem): void {
    console.log("testando edição da imagem", imagem);
    this.imagemService.salvar = false;
    this.imagemService.imagem = imagem;
    this.router.navigate(['/imagem/create'])
    }

    excluir(imagem: Imagem): void {
      this.imagemService.imagem = imagem;
      this.router.navigate(['/imagem/delete'])
      }

      visualizar(imagem: Imagem): void {
        this.imagemService.imagem = imagem;
        this.router.navigate(['/imagem/colapsar'])
      }


}

