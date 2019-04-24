import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  subscripcion:Subscription;

  constructor() {
      
   this.subscripcion = this.regresaObservable()
    .subscribe(
      numero=>console.log('subs',numero),
      error=>console.error('Error', error),
      ()=>console.log("el observador termino")
    );
    


  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('la pagina se cerrará')
    this.subscripcion.unsubscribe();
  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      let intervalo = setInterval(()=>{

        contador +=1;
        const salida={
          valor:contador
        };

        observer.next(salida)
        
        // if (contador===3){
        //   clearInterval(intervalo);
        //   observer.complete();                
        // }
        // if (contador===2){
        //   // clearInterval(intervalo);
        //   observer.error('auxilio!');   
                       
        // }


      },1000);
    })
    .pipe(map(resp=>{
      return resp.valor
    }),
    filter((valor, index)=>{
      // console.log(valor, index)

      if (valor%2===1){return true;}
      else{
      return false;
      }
    })
    )
    ;

      

  }

}
