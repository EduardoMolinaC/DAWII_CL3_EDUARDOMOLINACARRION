import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';


@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css'],
})
export class Pregunta3Component implements OnInit {
  charactersWithOddId: any[] = [];

  constructor(private RickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.getCharactersWithOddId();
  }

  getCharactersWithOddId() {
    this.RickAndMortyService.getCharactersWithOddId().subscribe((characters: any) => {
      this.charactersWithOddId = characters;
    });
  }
}