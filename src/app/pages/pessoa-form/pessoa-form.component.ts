import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../core/types/types';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {
  titulo = 'Cadastro de pessoas'


//objeto pessoa a ser gravado na API
pessoa:Pessoa = {} as Pessoa;
}