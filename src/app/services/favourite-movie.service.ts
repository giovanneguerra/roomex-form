import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from '../models/search';
import { RootObject } from '../models/root-object';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMovieService {
  constructor(private http: HttpClient) { }

  getFavouriteMovie(id: string): Observable<Search[]> {
    return this.http.get<RootObject>(`http://www.omdbapi.com/?apikey=eaa53748&s=${id}`).pipe(map((favouriteMovie: RootObject) => {
      return favouriteMovie.Search;
    }));
  }
}
