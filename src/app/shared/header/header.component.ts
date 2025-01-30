import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  exibirLogo: boolean = true;
  itensMenu = [
    { label: 'Home', link: '' },
    { label: 'Cadastro', link: '/pessoas/incluir' },
    { label: 'Login', link: '/pessoas/login' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Ajuda', link: '/ajuda' }
  ]

}
