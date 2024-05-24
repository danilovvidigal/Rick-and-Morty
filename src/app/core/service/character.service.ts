import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environment/environment';
import { Character, CharacterResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  private apiUrl = `${environment.apiUrl}/character`;
  private favoritesSubject = new BehaviorSubject<Character[]>([]);
  private searchResultsSubject = new BehaviorSubject<Character[]>([]);
  favorites$ = this.favoritesSubject.asObservable();
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor (
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  addFavorite(character: Character): void {
    const currentFavorites = this.favoritesSubject.value;
    this.favoritesSubject.next([...currentFavorites, character]);
    this.toastr.success('Adicionado aos favoritos!', 'Sucesso', {
      toastClass: 'toast toast-success',
    });
  }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<CharacterResponse>(`${this.apiUrl}`).pipe(
      map(response => response.results)
    );
  }

  getFavorites(): Character[] {
    return this.favoritesSubject.value;
  }

  removeFavorite(character: Character): void {
    const currentFavorites = this.favoritesSubject.value;
    this.favoritesSubject.next(currentFavorites.filter(c => c.id !== character.id));
    this.toastr.success('Removido com sucesso!', 'Sucesso', {
      toastClass: 'toast toast-success',
    });
  }

  searchCharacters(name: string): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.apiUrl}/?name=${name}`);
  }

  setSearchResults(results: Character[]): void {
    this.searchResultsSubject.next(results);
  }
}
