import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html'
})
export class PersonDeleteComponent implements OnInit {
  person: Person;
  error: string = '';
  id: string;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(this.id).subscribe({
      next: data => this.person = data,
      error: err => this.error = (err.error && err.error.error) ? err.error.error : 'Failed to load person'
    });
  }

  deletePerson() {
    this.personService.deletePerson(this.id).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => this.error = (err.error && err.error.error) ? err.error.error : 'Failed to delete person'
    });
  }
}
