import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagemService } from './../imagem.service';
import { Imagem } from '../imagem.model';
import { UploadFileService } from '../../../upload-file/upload-file.service';




@Component({
  selector: 'app-imagem-create',
  templateUrl: './imagem-create.component.html',
  styleUrls: ['./imagem-create.component.css']
})
export class ImagemCreateComponent implements OnInit {  
  files: File | null = null;
  filename: string = this.randomString(); 
  imagem: Imagem = {
    nomeImagem: '', assunto_idAssunto: '', texto: '', figura: '', audio: '', professor_idProfessor:'', colaboracoes: []
    }
//variável caminho =



  
  constructor(
    private imagemService: ImagemService,
    private router: Router, 
    private service: UploadFileService) { }





  ngOnInit(): void {
    if (this.imagemService.salvar) {
      this.imagem = {  nomeImagem: '', assunto_idAssunto: '', texto: '', figura: '', audio: '', professor_idProfessor:'', colaboracoes: [] }
    } else {
      this.imagem = this.imagemService.imagem;
    }

  }

  randomString() {  
    //define a variable consisting alphabets in small and capital letter  
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
          
        //specify the length for the new string  
    let lenString = 32;  
    let randomstring = '';  

        //loop to select a new character in each iteration  
    for (let i=0; i<lenString; i++) {  
    let rnum = Math.floor(Math.random() * characters.length);  
    randomstring += characters.substring(rnum, rnum+1);  
    }
    return randomstring;  
  }


  criarImagem(): void {
    
    this.imagem.colaboracoes = [];
    this.imagem.professor_idProfessor='61b16f60a6c1ff22e01e0e48';
    //alterar depois
    this.imagem.figura = this.filename + "." + this.files?.type.split('/')[1]; ;//<String>this.files?.name;
    console.log("Nome da Imagem que está chegando"+this.imagem.figura);



    if (this.imagemService.salvar) {
      this.onUpload();

      this.imagemService.create(this.imagem).subscribe(() => {
        this.imagemService.showMessage('Imagem cadastrada com sucesso!')
        
        this.router.navigate(['/imagens'])
      })
    } else {
      this.imagemService.update(this.imagem).subscribe(() => {
        this.imagemService.showMessage('Imagem alterada com sucesso!')
        this.router.navigate(['/imagens'])
      })
    }
  }
  cancelar(): void {
    this.router.navigate(['./'])
  }
  cadastrarAssunto(){
    this.router.navigate(['./'])
  }




  onChange(event: any){
    console.log(event);
    
    const selectedFile = <FileList>event.srcElement.files;
    const filesName = [];
    filesName.push(selectedFile[0]);
    
    
    
    
    
    this.files = selectedFile[0];
    
      }
      onUpload(){
        if(this.files){
          this.imagemService.upload(this.files, this.filename, 'http://localhost:3000/uploads')
          .subscribe(response => console.log('Upload Concluído'));
        
        }
    
      }
    
    
    }
    















