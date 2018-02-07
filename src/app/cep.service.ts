import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Cep } from './cep';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {

  constructor(private http:Http) { }

  buscar(cep:string){
  	return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  	   .toPromise()
  	   .then(response => this.convertCep(response.json()));

	}

	 private convertCep (cepRespota):Cep {
	let cep = new Cep();
	cep.cep = cepRespota.cep;
	cep.logradouro = cepRespota.logradouro;
	cep.complemento = cepRespota.complemento;
	cep.bairro = cepRespota.bairro;
	cep.cidade = cepRespota.cidade;
	cep.estado = cepRespota.estado;
	return cep;
}
}
