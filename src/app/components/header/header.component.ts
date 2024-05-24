import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CharacterService } from 'src/app/core/service/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ],
})
export class HeaderComponent {
  favoritesCount$: Observable<number>;
  currentPage: string;

  constructor(private characterService: CharacterService, private router: Router) {
    this.favoritesCount$ = this.characterService.favorites$.pipe(
      map(favorites => favorites.length)
    );
    this.router.events.subscribe(() => {
      this.currentPage = this.router.url;
    });
    this.currentPage = this.router.url;
  }

  navigateTo(page: string): void {
    this.currentPage = page;
    this.router.navigate([page]);
  }
}
