import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Movie } from '../../shared/models/movie';


const MOVIE_DB_API = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '60ccf3adb1f3829af422add0c923b667'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movies$ = new BehaviorSubject<Movie[]>([]);

  movies$ = this._movies$.asObservable();

  constructor(private http: HttpClient) {}


  fetch(searchTerm: string): void {
    const params = new HttpParams()
      .set('api_key', API_KEY)
      .set('query', searchTerm);

    this.http.get<Movie[]>(MOVIE_DB_API, { params })
      .pipe(pluck('results'))
      .subscribe((movies: Movie[]) => this._movies$.next(movies));
  }


}
