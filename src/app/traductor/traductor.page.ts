import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonMenuButton,IonCard, IonCardHeader,  IonCardTitle, IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]})

export class TraductorPage implements OnInit {

  num: number = 0;
  resultado: string = '';

  constructor() { }

  convertir() {
    this.resultado = this.numeroALetras(this.num);
  }

  numeroALetras(num: number): string {
    if (num < 1 || num > 1000) return "Número fuera de rango";
    
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
    
    if (num === 1000) return "mil";
    if (num < 10) return unidades[num];
    if (num < 20) return especiales[num - 10];
    if (num < 100) return decenas[Math.floor(num / 10)] + (num % 10 ? " y " + unidades[num % 10] : "");
    if (num < 200) return "ciento " + this.numeroALetras(num % 100);
    
    return centenas[Math.floor(num / 100)] + (num % 100 ? " " + this.numeroALetras(num % 100) : "");
  }

  ngOnInit() {
  }

}
