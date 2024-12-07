import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {
  dados: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.dados = navigation?.extras.state || {};
  }

  voltar() {
    // Redireciona para o formulário
    this.router.navigate(['/formulario']);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('Estilização e recursos foram carregados');
    }, 0);
  }
}
