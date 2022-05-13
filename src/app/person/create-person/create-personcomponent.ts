import {PersonService} from 'src/app/service/person.service';
import {Person} from 'src/app/model/person.model';

import {Component, OnInit} from '@angular/core';


import {Router} from '@angular/router';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class CreatePersoncomponent implements OnInit {

  person: Person = new Person();
  personGenders = ['MALE', 'FEMALE'];
  genders = ['Male', 'Female'];
  submitted = false;

  // tslint:disable-next-line:variable-name
  // @ViewChild('genderPerson') gender_person: ElementRef;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }


  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    console.log(this.person);
    this.personService.createPerson(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
    this.router.navigate(['/persons']).then(() => {
      window.location.reload();
    });
  }


}












