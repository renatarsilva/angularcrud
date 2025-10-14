import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../core/types/types';
import { PessoaService } from '../../core/services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {
  titulo = 'Cadastro de pessoas'
  pessoaId?:number;


  //objeto pessoa a ser gravado na API
  pessoa: Pessoa = {} as Pessoa;

  constructor(private service: PessoaService
    , private router: Router
    , private route: ActivatedRoute
  )  {
    //Verifico se é alteração ou inclusão
    this.pessoaId = Number(this.route.snapshot.params['id']);

    if (this.pessoaId) {
      //Busco os dados da pessoa para preencher o formulário
      service.buscarPorId(this.pessoaId).subscribe(pessoa => {
        if (pessoa) {
          //Preencher o formulário a partir da pessoa pesquisada
          this.pessoa.id = pessoa.id;
          this.pessoa.nome = pessoa.nome;
          this.pessoa.sobrenome = pessoa.sobrenome;
          this.pessoa.dtNascimento = pessoa.dtNascimento;
        }
      })
    }
  }// Fim do construtor

   submeter() {
    if (this.pessoaId) {
      this.service.editar(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoas'])
      })
    } else {
      this.service.incluir(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoas'])
      })
    }
  }

} //Fim da classe