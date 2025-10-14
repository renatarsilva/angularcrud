import { Injectable } from '@angular/core';
import { Pessoa } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  //caminho do endpoint de pessoas pela nossa API
  private readonly API = 'http://localhost:3000/pessoas';

  //injecao de dependencia

  constructor (private httpClient:HttpClient){}

  // metodo para listar Pessoas
  listar():Observable <Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(this.API)
  }

  //Metodo para inclusir uma pessoa
  incluir(pessoa:Pessoa):Observable<Pessoa>{
    return this.httpClient.post<Pessoa>(this.API, pessoa);
  }
}
