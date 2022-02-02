import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { menuList } from './menu-list';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  mostrarMenu: boolean = false; 
  collapse: boolean = false; 
  sideMenu = menuList; 

  constructor(private authService: AuthService){

  }
  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    ); 
  }

  toggleSidebar(){
    this.collapse = !this.collapse; 
  }

}
