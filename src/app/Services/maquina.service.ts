import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';



@Injectable({
  providedIn: 'root'
})

export class MaquinaService {

  constructor(private modalService: NgbModal) { }

  private activateMod = new Subject<any>();

  componentMethodCalled$ = this.activateMod.asObservable();

  setModal() {

    this.activateMod.next();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
  }

  troco: number=10.00;
  url: number=0;

  setCash(x:number, y:number){
    this.troco=x;
    this.url=y;

  }



  getCash(){
    return this.troco;
  }

  getUrl(){
    if(this.url===1){
      return '../../../../assets/canela.png';
      
    } else if(this.url===2){
      return '../../../../assets/ememe.png';

    } else if(this.url===3){
      return '../../../../assets/cachoco.png';

    }
    return '';
  }


}
