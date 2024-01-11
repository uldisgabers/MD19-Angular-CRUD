import { Injectable } from '@angular/core';
import { LocationType } from './locationType';
import axios from 'axios';
import { response } from 'express';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  url = 'http://localhost:3000/locations';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  async getAllLocations(): Promise<LocationType[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  // getAllLocations(): Observable<LocationType[]> {
  //   return this.http
  //     .get<LocationType[]>(this.url)
  //     .pipe(tap((data) => console.log(data)));
  // }

  async getLocationById(id: number): Promise<LocationType | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async submitNewPost(
    title: string,
    description: string,
    photo: string,
    country: string,
    city: string
  ) {
    axios
      .post('http://localhost:3000/locations', {
        title: title,
        description: description,
        photo: photo,
        country: country,
        city: city,
      })
      .then((response) => {
        console.log(response);
      });
  }

  async deletePost(id: number) {
    axios.delete(`http://localhost:3000/locations/${id}`).then((response) => {
      console.log(response);
    });
  }

  async updatePost(
    id: number,
    title: string,
    description: string,
    photo: string,
    country: string,
    city: string
  ) {
    axios
      .put(`http://localhost:3000/locations/${id}`, {
        title: title,
        description: description,
        photo: photo,
        country: country,
        city: city,
      })
      .then((response) => {
        console.log(response);
      });
  }
}
