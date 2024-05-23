import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HeaderComponent } from 'src/app/components/header/header.component';
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
    HttpClientModule,
    RouterModule,
  ],
})
export class HomeComponent implements OnInit {

  characters$!: Observable<Character[]>;
  searchCompleted$!: Observable<boolean>;

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.searchResults$;
    this.searchCompleted$ = this.characters$.pipe(
      map(characters => characters.length > 0)
    );
  }

  addToFavorites(character: Character): void {
    this.characterService.addFavorite(character);
  }

  goToFavorites(): void {
    this.router.navigate(['/favorites']);
  }

  onSearchResults(characters: Character[]): void {
    this.characterService.setSearchResults(characters);
  }
}
