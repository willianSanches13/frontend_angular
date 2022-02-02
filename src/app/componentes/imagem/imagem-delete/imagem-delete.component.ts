import { Router } from '@angular/router';
import { ImagemService } from './../imagem.service';
import { Imagem } from './../imagem.model';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-imagem-delete',
templateUrl: './imagem-delete.component.html',
styleUrls: ['./imagem-delete.component.css']
})

export class ImagemDeleteComponent implements OnInit {
imagem: Imagem = { nomeImagem: '', assunto_idAssunto: '',texto: '', figura: '', audio: '', colaboracoes: [], professor_idProfessor: '' }
constructor(
private imagemService: ImagemService, private router: Router
) { }



ngOnInit(): void {
this.imagem = this.imagemService.imagem;
}

delete(): void{
this.imagemService.delete(this.imagem).subscribe(() => {
this.imagemService.showMessage('Imagem excluída com sucesso!')
this.router.navigate(['/imagens'])
})
}

cancelar(): void {
this.router.navigate(['/imagens'])
}
}