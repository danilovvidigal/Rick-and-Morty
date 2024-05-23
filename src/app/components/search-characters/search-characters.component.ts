import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Subject, catchError, debounceTime, distinctUntilChanged, of, switchMap, takeUntil } from 'rxjs';
import { Character, CharacterResponse } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/service/character.service';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.scss'], 
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule 
  ],
})
export class SearchCharactersComponent implements OnDestroy {
  
  @Output() searchResults = new EventEmitter<Character[]>();
  searchTerm = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private characterService: CharacterService, private toastr: ToastrService) {
    this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.characterService.searchCharacters(term).pipe(
        catchError(() => {
          this.toastr.error('Nem um personagem encontrado!', 'Erro', {
            toastClass: 'toast toast-error',
          });
          return of({ results: [] } as unknown as CharacterResponse);
        })
      )),
      takeUntil(this.destroy$)
    ).subscribe((results: CharacterResponse) => this.searchResults.emit(results.results));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.next(input.value);
  }
}
