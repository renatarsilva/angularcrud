import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'pessoas/login',
        component: PessoaLoginComponent,
        title: 'Login',
    }, 
    {
        path: 'pessoas',
        component: PessoaListagemComponent,
        title:'Lista de Pessoas'
    }, {
        path: 'pessoas/incluir',
        component: PessoaFormComponent,
        title: 'Sulivan'
    }

];
