import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public inputNovaSenha: string ='';
  public senhasAtendidasQtd: number = 0;
  public senhasArray: { [key: string]: string[] } = {
    SG: [],
    SP: [],
    SE: []
  };
  public senhasAtendidas: {[key: string]: string[]} = {
    SG: [],
    SP: [],
    SE: []
  };


  constructor() {}

  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }

  tempoDeAtendimento(yx: number, variancia: number): number {
    const standardDeviation = Math.sqrt(variancia);
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += Math.random();
    }
    const numero = (sum - 6) * standardDeviation + yx;
    return numero;
  }

  novaSenha(tipoSenha: string = '') {
    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SG'].push(this.inputNovaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push(this.inputNovaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
        this.senhasArray['SE'].push(this.inputNovaSenha);
    }
  }
}