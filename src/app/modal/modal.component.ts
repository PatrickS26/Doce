import { Component, OnInit } from '@angular/core';
import { MaquinaService } from '../Services/maquina.service';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class ModalComponent{
  Urls: String="";
  troco: number=0.00;
  
  constructor(public maquina: MaquinaService, public modal: NgbActiveModal){
    
    this.maquina.componentMethodCalled$.subscribe(
      () => {
    this.setInfo();
    
      }
    );

  }
  
  setInfo(){
    this.Urls=this.maquina.getUrl();
    this.troco=this.maquina.getCash();
    this.maquina.open();
    

  }



  

  


  

}

