import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchCharactersComponent } from 'src/app/components/search-characters/search-characters.component';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SearchCharactersComponent,
    HttpClientModule,
    RouterModule,
    
  ],
})
export class HomeComponent implements OnInit {

  characters$!: Observable<Character[]>;
  searchCompleted$!: Observable<boolean>;
  favorites$!: Observable<Character[]>;

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(characters => {
      this.characterService.setSearchResults(characters);
    });
    this.characters$ = this.characterService.searchResults$;
    this.favorites$ = this.characterService.favorites$;
  }

  toggleFavorite(character: Character): void {
    if (this.isFavorite(character)) {
      this.characterService.removeFavorite(character);
    } else {
      this.characterService.addFavorite(character);
    }
  }

  isFavorite(character: Character): boolean {
    let isFav = false;
    this.favorites$.subscribe(favorites => {
      isFav = favorites.some(fav => fav.id === character.id);
    });
    return isFav;
  }

  onSearchResults(characters: Character[]): void {
    this.characterService.setSearchResults(characters);
  }
  
}
