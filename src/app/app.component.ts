
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline,videocamOutline,mailOutline,  calculatorOutline, textOutline, calendarClearOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Sumadora', url: 'sumadora', icon: 'calculator' },
    { title: 'Traductor', url: 'traductor', icon: 'text' },
    { title: 'Tabla', url: 'tabla', icon: 'calendar-clear' },
    { title: 'Video', url: 'video', icon: 'Videocam' },
    
  ];
  constructor() {
    addIcons({ calendarClearOutline,videocamOutline,textOutline,calculatorOutline,homeOutline  });
  }
}
