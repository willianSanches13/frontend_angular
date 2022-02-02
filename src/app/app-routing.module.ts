//rotas do meu projeto
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import {RelatoriosComponent} from './componentes/relatorios/relatorios.component'


import { ManutencaoImagensComponent }from './views/manutencao-imagens/manutencao-imagens.component';
import { ManutencaoProfessorComponent }from './views/manutencao-professor/manutencao-professor.component';
import { ManutencaoUsuarioComponent }from './views/manutencao-usuario/manutencao-usuario.component';
import { ManutencaoColaboracaoComponent }from './views/manutencao-colaboracao/manutencao-colaboracao.component';
import { ManutentaoDisciplinaComponent }from './views/manutencao-disciplina/manutentao-disciplina.component';





import { ImagemCreateComponent } from './componentes/imagem/imagem-create/imagem-create.component';
import { UsuarioCreateComponent } from './componentes/usuario/usuario-create/usuario-create.component';
import { ProfessorCreateComponent} from './componentes/professor/professor-create/professor-create.component';
import { ColaboracaoCreateComponent} from './componentes/colaboracao/colaboracao-create/colaboracao-create.component';
import { DisciplinaCreateComponent} from './componentes/disciplina/disciplina-create/disciplina-create.component'
import { CriacaoCreateComponent} from './componentes/criacao/criacao-create/criacao-create.component';
import { AssuntoCreateComponent } from './componentes/assunto/assunto-create/assunto-create.component';




import { ColaboracaoReadComponent} from './componentes/colaboracao/colaboracao-read/colaboracao-read.component';
import { DisciplinaReadComponent} from './componentes/disciplina/disciplina-read/disciplina-read.component';
import { ImagemReadComponent} from './componentes/imagem/imagem-read/imagem-read.component';
import { ProfessorReadComponent } from './componentes/professor/professor-read/professor-read.component';
import { UsuarioReadComponent } from './componentes/usuario/usuario-read/usuario-read.component';
import { ColapsarImagemComponent } from './componentes/imagem/colapsar-imagem/colapsar-imagem.component';
import { ColapsarRelatorioComponent } from './componentes/relatorios/colapsar-relatorio/colapsar-relatorio.component';
import { ColapsarRelatorioProfessorComponent} from './componentes/relatorios/colapsar-relatorio-professor/colapsar-relatorio-professor.component';
import { ColapsarRelatorioUsuarioComponent } from './componentes/relatorios/colapsar-relatorio-usuario/colapsar-relatorio-usuario.component';



import { ImagemDeleteComponent } from './componentes/imagem/imagem-delete/imagem-delete.component';
import { ColaboracaoDeleteComponent } from './componentes/colaboracao/colaboracao-delete/colaboracao-delete.component';
import { UsuarioDeleteComponent } from './componentes/usuario/usuario-delete/usuario-delete.component';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component'
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/template/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [

  {path: "",
    component: HomeComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: "inicio", 
    component: InicioComponent, 
    canActivate: [AuthGuard]
  },
  {path: "imagens",
    component: ManutencaoImagensComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {path: "disciplina",
  component: ManutentaoDisciplinaComponent, 
  canActivate: [AuthGuard]
},
{path: "relatorio",
component: RelatoriosComponent, 
canActivate: [AuthGuard]
},

  {path: "professor",
  component: ManutencaoProfessorComponent, 
  canActivate: [AuthGuard]
},
{path: "usuario",
  component: ManutencaoUsuarioComponent, 
  canActivate: [AuthGuard]
},
{path: "colaboracao",
  component: ManutencaoColaboracaoComponent, 
  canActivate: [AuthGuard]
},

{path: "imagem/create",
  component: ImagemCreateComponent, 
  canActivate: [AuthGuard]
},
{path: "disciplina/create",
  component: DisciplinaCreateComponent, 
  canActivate: [AuthGuard]
},
{path: "usuario/create",
  component: UsuarioCreateComponent, 
  canActivate: [AuthGuard]
},
{path: "professor/create",
  component: ProfessorCreateComponent, 
  canActivate: [AuthGuard]
},
{path: "colaboracao/create",
  component: ColaboracaoCreateComponent, 
  canActivate: [AuthGuard]
},
{path: "disciplina/read",
  component: DisciplinaReadComponent, 
  canActivate: [AuthGuard]
},
{path: "imagem/read",
  component: ImagemReadComponent, 
  canActivate: [AuthGuard]
},
{path: "professor/read",
  component: ProfessorReadComponent, 
  canActivate: [AuthGuard]
},
{path: "usuario/read",
  component: UsuarioReadComponent, 
  canActivate: [AuthGuard]
},
{path: "imagem/colapsar",
  component: ColapsarImagemComponent, 
  canActivate: [AuthGuard]
},
{path: "relatorio/colapsar",
  component: ColapsarRelatorioComponent, 
  canActivate: [AuthGuard]
},
{path: "relatorio/colapsar/professor",
  component: ColapsarRelatorioProfessorComponent, 
  canActivate: [AuthGuard]
},
{path: "relatorio/colapsar/usuario",
  component: ColapsarRelatorioUsuarioComponent, 
  canActivate: [AuthGuard]
},

{path: "colaboracao/read",
  component: ColaboracaoReadComponent, 
  canActivate: [AuthGuard]
},
{path: "criacao/create",
  component: CriacaoCreateComponent, 
  canActivate: [AuthGuard]
},
{path: "assunto/create",
  component: AssuntoCreateComponent, 
  canActivate: [AuthGuard]
},
{path: "imagem/delete",
  component: ImagemDeleteComponent, 
  canActivate: [AuthGuard]
},
{path: "colaboracao/delete",
  component: ColaboracaoDeleteComponent, 
  canActivate: [AuthGuard]
},

{path: "usuario/delete",
  component: UsuarioDeleteComponent, 
  canActivate: [AuthGuard]
},
{path: "upload",
  component: UploadFileComponent, 
  canActivate: [AuthGuard]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
