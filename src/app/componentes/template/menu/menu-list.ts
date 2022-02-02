export class MenuItem{
    constructor(
        public name: string, 
        public route: string, 
        public toolTip: string, 
        public icon: string = ''
    ){}
}
export const menuList = [
    new MenuItem('Inicio', 'inicio', 'Inicio', 'home'),
    new MenuItem('Imagens', 'imagens', 'Imagens', 'description'),
    new MenuItem('Login', 'login', 'Login', 'login'), 
    new MenuItem('Relatorios', 'relatorio', 'Relatorios', 'reorder')
]