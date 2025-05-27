import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService, Person } from '../person.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {
  person: Person = { name: '', age: null, gender: '', mobile: '' };
  error: string = '';
  isSubmitting: boolean = false;

  constructor(
    private personService: PersonService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  addPerson() {
    this.isSubmitting = true;
    this.error = '';
    
    this.personService.addPerson(this.person).subscribe({
      next: () => {
        this.snackBar.open('Person added successfully!', 'Close', {
          duration: 3000,
          panelClass: 'success-snackbar'
        });
        this.router.navigate(['/']);
      },
      error: err => {
        this.error = (err.error && err.error.error) ? err.error.error : 'Failed to add person';
        this.isSubmitting = false;
      }
    });
  }
}