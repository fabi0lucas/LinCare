import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep';


@Component({
  selector: 'cep',
  templateUrl: './comp-cep.component.html',
  styleUrls: ['./comp-cep.component.css']
})
export class CompCepComponent implements OnInit {
	cep = new Cep();
  constructor(private cepService:CepService) { }

  ngOnInit() {
  }

  buscar(){
  	this.cepService.buscar(this.cep.cep)
  		.then((cep:Cep) => this.cep = cep);
  }






}

}
