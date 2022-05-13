import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from 'src/app/model/person.model';
import {PersonService} from 'src/app/service/person.service';
import {ApiResponse} from 'src/app/model/api.response';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  id: number;
  person: Person;
  apiResponse: ApiResponse;

  constructor(private route: ActivatedRoute, private router: Router,
              private personService: PersonService) {
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.person = new Person();

    this.id = this.route.snapshot.params.id;
    this.personService.getEmployeeById(this.id)
      .subscribe(data => {
        console.log(data);
        this.person = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.personService.updateEmployee(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
    this.router.navigate(['/persons']).then(() => {
      window.location.reload();
    });
  }


  // tslint:disable-next-line:typedef
  list() {
    /*this.router.navigate(['/persons']).then(() => {
      window.location.reload();
    });*/
    this.router.navigate(['/persons']);
  }
}
