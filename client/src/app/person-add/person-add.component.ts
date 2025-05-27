import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  person: Person = { name: '', age: null, gender: '', mobile: '' };
  error: string = '';

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
  }

  addPerson() {
    this.personService.addPerson(this.person).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => this.error = (err.error && err.error.error) ? err.error.error : 'Failed to add person'
    });
  }
}
