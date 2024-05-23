import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/service/character.service';
import { SearchCharactersComponent } from '../search-characters/search-characters.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SearchCharactersComponent
  ],
})
export class HeaderComponent {

  @Output() searchResults = new EventEmitter<Character[]>();
  favoritesCount$: Observable<number>;

  constructor(private characterService: CharacterService) {
    this.favoritesCount$ = this.characterService.favorites$.pipe(
      map((favorites: Character[]) => favorites.length)
    );
  }

  onSearchResults(characters: Character[]): void {
    this.searchResults.emit(characters);
  }
}
