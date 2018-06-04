import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material';
import{UserData} from '../UserData'

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
  selectedRole: string;

  roles = [{
      value: 'Admin',
      viewValue: 'Admin'
    }, {
      value: 'OrderEntry',
      viewValue: 'Order Entry'
    }, {
      value: 'Invoicing',
      viewValue: 'Invoicing'
    }, {
      value: 'Dispatch',
      viewValue: 'Dispatch'
    }, {
      value: 'Driver',
      viewValue: 'Driver'
    }
  ];
  userDetails={};  
  formctrl = new FormControl();  

  permissionList = ['Container Management', 'Deadline', 'Driver Management', 'Route Rate', 'Driver Rates', 'Chassis Rental','Accessorial Charges'];
  constructor(public dialogRef: MatDialogRef <AdduserComponent>) {
    this.userDetails={};
   }

  ngOnInit() {
  }

}
