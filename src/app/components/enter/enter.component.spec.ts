import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { FavouriteMovieService } from 'src/app/services/favourite-movie.service';
import { EnterComponent } from './enter.component';

describe('EnterComponent', () => {
  let component: EnterComponent;
  let fixture: ComponentFixture<EnterComponent>;
  let router: jasmine.SpyObj<Router>;
  let favouriteMovieService;

  beforeEach(async () => {
    favouriteMovieService = jasmine.createSpyObj(['getFavouriteMovie']);
    favouriteMovieService.getFavouriteMovie.and.returnValue('Akira');

    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes)],
      declarations: [ EnterComponent, MatAutocomplete ],
      providers: [{ provide: FavouriteMovieService, useValue: favouriteMovieService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(EnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
