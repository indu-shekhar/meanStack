import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService, Person } from '../person.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  person: Person;
  error: string = '';
  id: string;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadPerson();
  }

  loadPerson() {
    this.isLoading = true;
    this.personService.getPerson(this.id).subscribe({
      next: data => {
        this.person = data;
        this.isLoading = false;
      },
      error: err => {
        this.error = (err.error && err.error.error) ? err.error.error : 'Failed to load person';
        this.isLoading = false;
      }
    });
  }

  deletePerson() {
    this.isLoading = true;
    this.personService.deletePerson(this.id).subscribe({
      next: () => {
        this.snackBar.open('Person deleted successfully!', 'Close', {
          duration: 3000,
          panelClass: 'success-snackbar'
        });
        this.router.navigate(['/']);
      },
      error: err => {
        this.error = (err.error && err.error.error) ? err.error.error : 'Failed to delete person';
        this.isLoading = false;
      }
    });
  }
}
