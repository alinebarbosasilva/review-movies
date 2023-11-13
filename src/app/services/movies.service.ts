import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {MovieResult} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = `https://api.themoviedb.org/3`
  http = inject(HttpClient)

  search(search: string) {
    return this.http.get<MovieResult>(`${this.url}/search/movie`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2E1YjY1OGM1N2YyMTFlMWUyM2M0MjY5NzdmYWQyMiIsInN1YiI6IjY1NTEyNDlkZDQ2NTM3MDBmZTM2YjUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hha5IK63eOSEvQ3A2pMVwOw92_WS1Lb-EiUHNKNwb-g'
      },
      params: {
        query: search,
        language: 'pt-BR'
      },
    }).pipe(take(1))
  }

  getMovies() {
    return this.http.get<MovieResult>(`${this.url}/trending/movie/day`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2E1YjY1OGM1N2YyMTFlMWUyM2M0MjY5NzdmYWQyMiIsInN1YiI6IjY1NTEyNDlkZDQ2NTM3MDBmZTM2YjUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hha5IK63eOSEvQ3A2pMVwOw92_WS1Lb-EiUHNKNwb-g'
      },
      params: {
        language: 'pt-BR'
      }
    }).pipe(take(1));
  }
}
