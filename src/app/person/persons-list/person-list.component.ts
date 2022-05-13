import {Component, OnInit} from '@angular/core';
import {PersonService} from 'src/app/service/person.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ApiResponse} from 'src/app/model/api.response';

@Component({
  selector: 'app-persons-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Observable<ApiResponse>;

  constructor(private personService: PersonService,
              private router: Router) {
    // tslint:disable-next-line:only-arrow-functions typedef
    setTimeout(function () {
      // tslint:disable-next-line:only-arrow-functions typedef
      $(function () {
        $('#example').DataTable();
      });
    }, 2000);


  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.persons = this.personService.getPersons();
    console.log('hi' + this.personService.baseUrl);
    console.log(this.persons);
    // tslint:disable-next-line:only-arrow-functions typedef
    setTimeout(function () {
      // tslint:disable-next-line:only-arrow-functions typedef
      $(function () {
        $('#example').DataTable();
      });
    }, 2000);

  }

  // tslint:disable-next-line:typedef
  deleteEmployee(id: number) {
    this.personService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.persons = this.personService.getPersons();
          this.router.navigate(['/persons']).then(() => {
            window.location.reload();
          });
        },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }


}
