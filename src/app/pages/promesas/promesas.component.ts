import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    
    this.contarTres().then(
      mensaje=>console.log("termino", mensaje)
      )
      .catch(error => console.error('error en la promesa',error));

   }



 ngOnInit() {
  }

  contarTres():Promise<boolean>{


    return new Promise((resolve, reject)=>{

      let contador = 0;
      let interval = setInterval(()=>{
        contador +=1;
        console.log(contador)
        if (contador===3){
          resolve(true);
          clearInterval(interval)
        }
          
      },1000);
    });
    
  }

}
