import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonMenuButton,IonCard, IonCardHeader,  IonCardTitle, IonCardContent} from '@ionic/angular/standalone';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent
  ]
})

export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
