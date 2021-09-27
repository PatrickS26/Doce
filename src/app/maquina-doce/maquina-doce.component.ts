import { Component, OnInit } from '@angular/core';
import { MaquinaService } from '../Services/maquina.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-maquina-doce',
  templateUrl: './maquina-doce.component.html',
  styleUrls: ['./maquina-doce.component.css']
})
export class MaquinaDoceComponent implements OnInit {

  curentMM: number=2;
  curentChicle: number=2;
  curentChoco: number=2;
  
  curentCash: number=0.00;

  tes: boolean=false;

  trco:number=0;

  Teste: number=0;
  moeda: number=1.00;
  nota2: number=2.00;
  nota5: number=5.00;
  
  prod: String='';
  
  constructor(public maquina: MaquinaService) { }
  
  Cash(x:number){
    if(x===1){
      this.curentCash=this.curentCash+1.00;
    }else if (x===2) {
      this.curentCash=this.curentCash+2.00;
    }else{
      this.curentCash=this.curentCash+5.00;
    }
  }
  

  compra(x:number){

    if(this.curentCash>0){
      if(x===1 && this.curentCash>=6){
        this.trco=this.curentCash-6.00;
        this.curentChicle=this.curentChicle-1;

        this.prod= '../../../../assets/canela.png';
        this.tes=true;
        this.curentCash=0.00;

       

      }else if (x===2 && this.curentCash>=7) {
        this.trco=this.curentCash-7.00;
        this.curentMM=this.curentMM-1;

        this.prod= '../../../../assets/ememe.png';
       
        this.tes=true;
        this.curentCash=0.00;
      }else if (x===3 && this.curentCash>=8){
        this.trco=this.curentCash-8.00;
        this.curentChoco=this.curentChoco-1;

        this.prod= '../../../../assets/cachoco.png';

        this.tes=true;
        this.curentCash=0.00;

      }
    }
    
  }

  butDis(x:number){
    if(x===1){
      if(this.curentCash<6 || this.curentChicle===0){
        return true;
      }
    }else if(x===2){
      if(this.curentCash<7 || this.curentMM===0){
        return true;
      }
    }else if(x===3){
      if(this.curentCash<8 || this.curentChoco===0){
        return true;
      }
    }
    return false;
  }


  

  ngOnInit(): void {
  }

}
