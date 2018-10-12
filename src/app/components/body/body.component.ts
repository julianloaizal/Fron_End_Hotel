import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
  templateUrl: `./body.component.html`
   })
export class BodyComponent {

  mostrar = true;
  frase: any = {
    mesaje: 'Solo se que nada se, y lo que se es una gota en el mar del conocimiento',
    autor: 'Rene Descartes'
  };

  personajes: string[] = ['Mandela', 'Santos', 'Chaves'];
  
}
