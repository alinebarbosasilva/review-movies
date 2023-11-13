import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MoviesService} from "../services/movies.service";
import {Movie} from "../models/movie";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {AutocompleteComponent} from "../autocomple/autocomplete.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatAutocompleteModule, MatInputModule, AutocompleteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  movies!: Movie[]
  movieService = inject(MoviesService)

  ngOnInit() {
    this.movieService.getMovies().subscribe((resp)=> {
      this.movies = resp.results
    })
  }
}
