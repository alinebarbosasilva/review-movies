import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MoviesService} from "../services/movies.service";
import {Movie} from "../models/movie";

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent implements OnInit {
  filteredOptions: Movie[] = []
  fb = inject(FormBuilder)
  movieService = inject(MoviesService)

  form = this.fb.group({
    search: ['']
  })

  ngOnInit() {

    this.form.controls['search'].valueChanges.subscribe(value => {
      this.movieService.search(value!).subscribe((resp) => {
        this.filteredOptions = resp.results
      })
    })
  }

  displayFn(movie: Movie) {
    return movie && movie.title ? movie.title : ''
  }
}
