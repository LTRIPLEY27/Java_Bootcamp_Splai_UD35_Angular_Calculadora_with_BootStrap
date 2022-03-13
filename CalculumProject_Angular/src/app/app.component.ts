import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//DECLARAREMOS LOS ATRIBUTOS Y MÉTODOS EN EL ÁREA DE CLASS
export class AppComponent {
  title = 'Casio Calculator';
  private numA = 0;
  private numB = 0;

  private result = 0;
  private opcion = "";


  // LOS MÉTODOS DEBEN DE DECLARARSE DENTRO DEL ÁMBITO DEL APP-COMPONENT, CASO CONTRARIO NO FUNCIONAN Y TORNA ERROR

  deleting() {
    //document.getElementById('pantalla').value = '';
  }



}



