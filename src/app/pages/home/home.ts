import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  coaches = [
    {
      name :'Coach1',
      image: 'assets/images/coach1.png',
      description: 'Description du premier coach'
    },
    {
      name: 'Coach2', 
      image: 'assets/images/coach2.png',
      description: 'Description du second coach'
    }
  ];

  // Informations du club
  clubInfo = {
    address: '27 avenue de la Guerche 44250 Saint-Brévin-Les-Pins',
    schedules: 'Les cours ont lieu tous les mardis et jeudis pour la boxe amateur et loisir de 19h00 à 20h30, et tous les mercredis pour la boxe éducative.'
  };

  constructor() { }

  // Vous pouvez ajouter d'autres méthodes ici si nécessaire
}