import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  chamarSenhaSP():any {
    // for (let i = 0; i <= this.senhasArray['SP'].length || this.senhasArray['SG'].length || this.senhasArray['SE'].length; i++) {
      if (this.senhasService.senhasArray['SP'].length > 0) {
        const proximaSenha = this.senhasService.senhasArray['SP'].splice(0,1)[0];
        this.senhasService.senhasAtendidas['SP'].push(proximaSenha);
      } else {
        return alert('Não existem senhas a serem chamadas')
      }
      this.senhasService.senhasAtendidasQtd++
  }
  chamarSenhaSE() {
    // for (let i = 0; i <= this.senhasArray['SP'].length || this.senhasArray['SG'].length || this.senhasArray['SE'].length; i++) {
      if (this.senhasService.senhasArray['SE'].length > 0) {
        const proximaSenha = this.senhasService.senhasArray['SE'].splice(0,1)[0];
        this.senhasService.senhasAtendidas['SE'].push(proximaSenha);
      } else {
        return alert('Não existem senhas a serem chamadas')
      }
      this.senhasService.senhasAtendidasQtd++
  }
  chamarSenhaSG() {
    // for (let i = 0; i <= this.senhasArray['SP'].length || this.senhasArray['SG'].length || this.senhasArray['SE'].length; i++) {
      if (this.senhasService.senhasArray['SG'].length > 0) {
        const proximaSenha = this.senhasService.senhasArray['SG'].splice(0,1)[0];
        this.senhasService.senhasAtendidas['SG'].push(proximaSenha);
      } else {
        return alert('Não existem senhas a serem chamadas')
      }
      this.senhasService.senhasAtendidasQtd++
  }
  
  constructor(public senhasService: SenhasService) {}

  

}
