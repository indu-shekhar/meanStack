import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../person.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  error: string = '';
  isLoading: boolean = true;
  displayedColumns: string[] = ['name', 'age', 'gender', 'mobile', 'actions'];

  constructor(
    private personService: PersonService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.isLoading = true;
    this.personService.getPeople().subscribe({
      next: data => {
        this.people = data;
        this.isLoading = false;
      },
      error: err => {
        this.error = (err.error && err.error.error) ? err.error.error : 'Failed to load people';
        this.isLoading = false;
      }
    });
  }

  editPerson(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: string) {
    this.router.navigate(['/delete', id]);
  }
}
