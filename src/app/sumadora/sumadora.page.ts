import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IonContent,IonInput,IonList,IonItem,IonButtons, IonHeader, IonTitle, IonToolbar, IonButton,IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonButton, IonMenuButton,IonList,IonItem,IonInput]
})
export class SumadoraPage implements OnInit {

  Numero1: Number = 0; 
  Numero2: Number = 0;
  Resultado: string = "";
  
  constructor() { 
    
  }
  sumar(){
    this.Resultado = (Number(this.Numero1) + Number(this.Numero2)).toString();
  
  }

  ngOnInit() {
  }

}
