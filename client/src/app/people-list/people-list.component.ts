import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  error: string = '';

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.personService.getPeople().subscribe({
      next: data => this.people = data,
      error: err => this.error = (err.error && err.error.error) ? err.error.error : 'Failed to load people'
    });
  }

  editPerson(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: string) {
    this.router.navigate(['/delete', id]);
  }
}
