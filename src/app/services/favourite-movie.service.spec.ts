import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavouriteMovieService } from './favourite-movie.service';
import { Search } from '../models/search';

describe('FavouriteMovieService', () => {
  let service: FavouriteMovieService;

  const dummyMovieList =[
    {Title:"Akira",Year:"1988",imdbID:"tt0094625",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_SX300.jpg"},
    {Title:"Akira",Year:"2016",imdbID:"tt5465370",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYTE2MWI4MDctMjFlNi00OTUyLTkyMGItYTk3MThkMDFmOWE1XkEyXkFqcGdeQXVyNjE5MTgwOTU@._V1_SX300.jpg"},
    {Title:"Kurosawa Akira: Tsukuru to iu koto wa subarashii",Year:"2002–",imdbID:"tt1042872",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMjhlOTI2MTAtMWQ3Zi00Y2ZiLTliOTctMTY3OTU4YWI3MmUyXkEyXkFqcGdeQXVyMzI5NjUyMDM@._V1_SX300.jpg"},
    {Title:"A Message from Akira Kurosawa: For Beautiful Movies",Year:"2000",imdbID:"tt0945365",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjZjZjdmMzItZjdjMS00Nzg4LWJlMTctNmMzYTI2MjU0MTJhXkEyXkFqcGdeQXVyMjA5Nzc2Mzc@._V1_SX300.jpg"},
    {Title:"The Akira Project",Year:"2014",imdbID:"tt3738330",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYTlkNzVmMWMtMGNiOC00ZDY5LWFmMjAtNDU5YzBhYjk3YTM0XkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"},
    {Title:"Akira Kurosawa: My Life in Cinema",Year:"1993",imdbID:"tt1606846",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BM2FjZDU3N2ItMWEzZC00ZGNmLTkzZDQtNTE4YTE3YWEwNDMyXkEyXkFqcGdeQXVyMjA5NjIxNDU@._V1_SX300.jpg"},
    {Title:"Akira",Year:"2016",imdbID:"tt5700962",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjMyMjAzMjctMmYzYy00NjVkLTg2NTktMjM4MGNiNThjMjEyXkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_SX300.jpg"},
    {Title:"Making of Dreams: A Movie Conversation between Akira Kurosawa and Nobuhiko Obayashi",Year:"1990",imdbID:"tt5969514",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYTQ1ZDM5NGQtMGNmZi00YzZhLTg0NWEtYmNmNzJhZjRkMzNlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_SX300.jpg"},
    {Title:"Akira",Year:"2012",imdbID:"tt2256611",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjBjMTg5MWItYjVkMC00M2U5LThmNDgtOTc3MTRmODM0NzYxXkEyXkFqcGdeQXVyMzE5NDE5NDE@._V1_SX300.jpg"},
    {Title:"Jun-kyôju Takatsuki Akira no suisatsu",Year:"2021–",imdbID:"tt15541252",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BZWUwY2FkYjQtMGU5OC00NmY2LTk3ZTItZjkxODU4MjExMmE5XkEyXkFqcGdeQXVyMjY0MDY4Mjk@._V1_SX300.jpg"}
  ] as Search[]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FavouriteMovieService]
    });

    service = TestBed.inject(FavouriteMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data with getFavouriteMovie() with id as Akira', async () => {
    (done: DoneFn) => {
      service.getFavouriteMovie('Akira').subscribe(value => {
        expect(value).toBe(dummyMovieList);
        done();
      })
    }
  });

});
