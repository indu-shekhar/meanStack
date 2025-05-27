import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  _id?: string;
  name: string;
  age: number;
  gender: string;
  mobile: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://super-succotash-566wrq7jr5g37v9-3000.app.github.dev/person';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  updatePerson(id: string, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
