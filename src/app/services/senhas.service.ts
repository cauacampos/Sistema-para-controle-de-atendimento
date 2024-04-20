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
  private senhasArray: { [key: string]: string[] } = {
    SG: [],
    SP: [],
    SE: []
  };
  public senhasAtendidas: {[key:string]: string[]} = {
    SG: [],
    SP: [],
    SE: []
  };
  public senhasAtendidasQtd: number = 0;


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
    
    // console.log(this.senhasArray);
    console.log(this.senhasArray['SP'].slice(-5));
  }

  chamarSenha(tipoSenha: String = '') {
    if (this.senhasArray['SP'].length) {
      let x = this.senhasArray['SP'].splice(0,1)[0];
      this.senhasAtendidas['SP'].push(x);
      let timeP = this.tempoDeAtendimento(10,20);
    } else if (this.senhasArray['SG'].length) {
      let x = this.senhasArray['SG'].splice(0,1)[0];
      this.senhasAtendidas['SG'].push(x);
      let timeP = this.tempoDeAtendimento(1, 3);
    } else if (this.senhasArray['SE'].length) {
      let x = this.senhasArray['SE'].splice(0,1)[0];
      this.senhasAtendidas['SE'].push(x);
      let timeP = 1;
    }
    console.log(this.senhasAtendidas['SP'])
    this.senhasAtendidasQtd++
  }



  // deletarSenha() {
  //   for (let i = 0; i < this.senhasArray['SP'].length; i++) {
  //     const element = this.senhasArray[i];
  //     if (element != this.senhasAtendidas['SP']) {
  //       this.senhasArray['SP'].replace(element)
  //     }
  //   }
  // }
}
