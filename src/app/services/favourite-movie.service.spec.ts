import { TestBed, getTestBed  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FavouriteMovieService } from './favourite-movie.service';
import { Search } from '../models/movie';

describe('FavouriteMovieService', () => {
  let service: FavouriteMovieService;
  let injector: TestBed;
  let httpMock: HttpTestingController;


  const dummyMovieList = [
    { Title: "The Silence of the Lambs", Year: "1991", imdbID: "tt0102926", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
    { Title: "Inside the Labyrinth: The Making of 'The Silence of the Lambs'", Year: "2001", "imdbID": "tt0305676", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMWE3NTE2YzgtNjUyYy00Y2NmLTljNWMtNjY4MjZhYmMzM2M4XkEyXkFqcGdeQXVyMTEyMDcwNw@@._V1_SX300.jpg" },
    { Title: "Inside Story: The Silence of the Lambs", Year: "2010", "imdbID": "tt1918873", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BOTkwZTcyMzYtODU4ZC00MTI1LWI5NjUtZjU1YWM4NjQ2ZjRhXkEyXkFqcGdeQXVyMjA4NDE1MTI@._V1_SX300.jpg" },
    { Title: "Jonathan Demme & Jodie Foster: Making 'The Silence of the Lambs'", Year: "2005", "imdbID": "tt0965506", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BN2ZhNjQ2ZDktOWNmNC00Y2UzLThmNjItNjg4ZjdmYjg1YmFhXkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_SX300.jpg" },
    { Title: "The Making of 'The Silence of the Lambs'", Year: "1991", "imdbID": "tt5289054", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYjBlZWNiMzctZDU2OS00M2RhLTk1NDYtMWEyMjI3OTg4Zjg4XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg" },
    { Title: "Silence of the Lambs", Year: "2002–", "imdbID": "tt2665218", Type: "series", Poster: "N/A" },
    { Title: "Silence of the Polish Lambs", Year: "2017", "imdbID": "tt7565790", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZTE4YTBiNjQtZjk3Yy00NDljLWE5YmYtOTFlYmFiYmM2MGMyXkEyXkFqcGdeQXVyODE5ODc5ODg@._V1_SX300.jpg" },
    { Title: "Iconic Movie Scenes Extended: Silence of the Lambs", Year: "2017", "imdbID": "tt7646724", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNjBhMjg4ODAtYjg4MC00MmE2LWJlMDgtMTMzZDEzMGZjMDVjXkEyXkFqcGdeQXVyNjk1MzAxNDY@._V1_SX300.jpg" },
    { Title: "Manhunter (1986) vs The Silence Of The Lambs (1991)", Year: "1986", "imdbID": "tt18872612", Type: "movie", Poster: "N/A" }
  ] as Search[]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FavouriteMovieService]
    });

    injector = getTestBed();
    service = TestBed.inject(FavouriteMovieService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data with getFavouriteMovie() with id as Silence of the Lambs', () => {
    service.getFavouriteMovie('Silence of the lambs').subscribe((res) => {
      expect(res).toEqual(dummyMovieList as Search[])
    })
    const req = httpMock.expectOne('http://www.omdbapi.com/?apikey=eaa53748&s=Silence of the lambs');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovieList);
  });

});
