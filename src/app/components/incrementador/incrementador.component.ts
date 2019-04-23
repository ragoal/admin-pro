import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

@ViewChild('txtProgress') txtProgress: ElementRef;

 @Input('nombre') leyenda:string='Leyenda';
  
 @Input() progreso:number =50;

@Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue:number){

    // let elementoHTML= document.getElementsByName('progreso')[0];
    // console.log(this.txtProgress);


    if (newValue>100){
      this.progreso=100;
      this.cambioValor.emit(this.progreso);
      this.txtProgress.nativeElement.value = Number(this.progreso);
      return;
    }
    if (newValue<0){
      this.progreso=0;
      this.cambioValor.emit(this.progreso);
      this.txtProgress.nativeElement.value = Number(this.progreso);
      return;
    }
    this.txtProgress.nativeElement.value = Number(this.progreso);
    this.cambioValor.emit(this.progreso);
  }


  cambiarValor(valor:number){
    this.progreso=Number(this.progreso)+valor;
    if (this.progreso>100){
      this.progreso=100;
      this.cambioValor.emit(this.progreso);
      return;
    }
    if (this.progreso<0){
      this.progreso=0;
      this.cambioValor.emit(this.progreso);
      return;
    }
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
