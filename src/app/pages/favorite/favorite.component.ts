import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/service/character.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'], 
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class FavoriteComponent {

  favorites$: Observable<Character[]>;
  favoritesCount$: Observable<number>;

  constructor (
    private characterService: CharacterService,
    private router: Router
  ) {
    this.favorites$ = this.characterService.favorites$;
    this.favoritesCount$ = this.favorites$.pipe(
      map((favorites: string | any[]) => favorites.length)
    );
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  removeFavorite(character: Character): void {
    this.characterService.removeFavorite(character);
  }
}
