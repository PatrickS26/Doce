import { Component, OnInit } from '@angular/core';

import { MaquinaService } from '../Services/maquina.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  aa:number=0;

  constructor(public maquina: MaquinaService) { }
  setModal2(){
    this.aa=this.maquina.getCash();
    //this.maquina.setModal();
  }
  setModal3(){
    
  }

  ngOnInit(): void {
  }

  

}
