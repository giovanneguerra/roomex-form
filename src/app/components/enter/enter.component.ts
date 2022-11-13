import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from 'src/app/models/search';
import { FavouriteMovieService } from '../../services/favourite-movie.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
  filteredMovies: Observable<Search[]> | undefined;
  movies: Search[] = [];
  countries = [
    {value: 'Ireland', viewValue: 'Ireland'},
    {value: 'United Kingdom', viewValue: 'United Kingdom'}
  ];
  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^([^0-9]*)$')]],
    username: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    country: ['', [Validators.required]],
    postCode: [''],
    favouriteMovie: ['']
  }
  );
  countryField = this.profileForm.get('country');
  postcodeField = this.profileForm.get('postCode');
  favouriteMovieField = this.profileForm.get('favouriteMovie');

  constructor(private router: Router, public fb: FormBuilder, private favouriteMovieService: FavouriteMovieService) {}

  private _filterMovies(value: string): Search[] {
    const filterValue = value.toLowerCase();

    this.favouriteMovieService.getFavouriteMovie(filterValue).subscribe((search: Search[]) => {
      this.movies = search ? search.filter(movie => movie.Title.toLowerCase().includes(filterValue)) : [];
    });

    return this.movies;
  }

  ngOnInit(): void {
    this.countryField?.valueChanges.subscribe(() => {
      this.changePostCodeValidators();
    })
    this.filteredMovies = this.favouriteMovieField?.valueChanges.pipe(
      startWith(''),
      map(movie => (movie ? this._filterMovies(movie) : this.movies.slice())),
    );
  }


  onSubmit(): void {
    if(this.profileForm.valid) {
      this.router.navigate(['/thankyou'], { state: this.profileForm.value as Profile });
    }
  }

  getErrorMessage(field: string, errorMessage: string, requiredMessage?: string) {
    if (this.profileForm.get(field)?.hasError('required')) {
      return requiredMessage;
    }
    return this.profileForm.get(field) ? errorMessage : '';
  }

  changePostCodeValidators() {
    this.countryField?.value === 'United Kingdom' ?
      this.postcodeField?.setValidators([Validators.required, Validators.pattern('^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$')]) :
      this.postcodeField?.setValidators([Validators.minLength(6), Validators.maxLength(10)]);

    this.postcodeField?.updateValueAndValidity();
  }
}
