import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  columnDefs = [
    { field: 'productDescription' },
    { field: 'pickAddress' },
    { field: 'dropAddress'},
    { field: 'status'}
   ];

rowData = [
    { productDescription: 'syringe', pickAddress: 'Sydney', dropAddress: 'Australia', status:'checked' },
    { productDescription: 'thermometre', pickAddress: 'Mexico', dropAddress: 'Los Angels', status:'On The Way' },
    { productDescription: 'medicalGlove', pickAddress: 'Brazil', dropAddress: 'egypt', status:'submitted'},
    { productDescription: 'inhaler', pickAddress: 'Russia', dropAddress: 'Italy', status:'done'},
    { productDescription: 'firstAidKit', pickAddress: 'India', dropAddress: 'Delhi', status:'pending'}
  ];



  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
