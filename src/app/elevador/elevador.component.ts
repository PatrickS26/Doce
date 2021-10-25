import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

//trigger('',[
//])

//state('',style({
//  transform: '',
//})),

@Component({
  selector: 'app-elevador',
  templateUrl: './elevador.component.html',
  styleUrls: ['./elevador.component.css'],
  animations: [     
    
    


  ]
})

export class ElevadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  currentAnda:String="T";
  bgi:String="backgT";
  porta:String='fecha';
  curAndar:number=0;

  changePorta(newPorta:String){
    this.porta=newPorta;

  }

  andar(x: number){
    if(x === 0){
      

      if(this.curAndar===3){

        this.bgi="backgB"
      setTimeout(()=>{
        this.bgi="backgT"
      },3000);

        this.curAndar =0;

      }else if(this.curAndar===2){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backgT"
        },2000);
  
          this.curAndar =0;
      }else if(this.curAndar===1){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backgT"
        },1000);
  
          this.curAndar =0;
      }
      

    }else if(x === 1){

      if(this.curAndar===3){

        this.bgi="backgB"
      setTimeout(()=>{
        this.bgi="backg"
      },2000);
      

        this.curAndar =1;

      }else if(this.curAndar===2){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backg"
        },1000);
  
          this.curAndar =1;
      }else if(this.curAndar===0){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backg"
        },1000);
  
          this.curAndar =1;
      }

      
    
    }else if(x === 2){
      if(this.curAndar===3){

        this.bgi="backgB"
      setTimeout(()=>{
        this.bgi="backg2"
      },1000);

        this.curAndar =2;

      }else if(this.curAndar===1){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backg2"
        },1000);
  
          this.curAndar =2;
      }else if(this.curAndar===0){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backg2"
        },2000);
  
          this.curAndar =1;
      }
    
    }else if(x === 3){
      if(this.curAndar===2){

        this.bgi="backgB"
      setTimeout(()=>{
        this.bgi="backg3"
      },1000);

        this.curAndar =3;

      }else if(this.curAndar===1){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backg3"
        },2000);
  
          this.curAndar =2;
      }else if(this.curAndar===0){
        this.bgi="backgB"
        setTimeout(()=>{
          this.bgi="backg3"
        },3000);
  
          this.curAndar =3;
      }

    }

  }
  

}
