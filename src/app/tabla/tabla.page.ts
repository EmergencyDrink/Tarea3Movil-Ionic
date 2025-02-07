import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IonContent,IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]})
export class TablaPage  {
  
  numero: number = 0;
  tabla: string[] = [];
  
  constructor() { }

  
  generarTabla() {
    if (!this.numero) {
      this.tabla = ['Ingrese un número válido'];
      return;
    }
    
    this.tabla = [];
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
    }
  }
}