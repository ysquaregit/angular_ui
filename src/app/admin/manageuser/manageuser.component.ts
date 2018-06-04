import { Component, OnInit,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material';
import{UserData} from '../UserData'
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent {

  selectedRole: string;
action:String
selectedPermissions:String[]=[];
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
  userDetails:UserData;  
  formctrl = new FormControl();  

  permissionList = ['Container Management', 'Deadline', 'Driver Management', 'Route Rate', 'Driver Rates', 'Chassis Rental','Accessorial Charges'];
  constructor(public dialogRef: MatDialogRef <ManageuserComponent>, @Inject(MAT_DIALOG_DATA) data ) {
    if(data.action=="E"){
      let info:UserData;
      info=data.selectedValue
      this.userDetails=info;
      this.action="Edit";
      this.selectedPermissions=data.selectedValue.permissions.split(',')
    }else{
      this.userDetails=data.selectedValue;      
      this.action="Add"
    }    
   }

  ngOnInit() {
  }
  save() {
    this.userDetails.permissions=this.selectedPermissions.toString();
    this.dialogRef.close(this.userDetails);
  }
  close() {
    this.dialogRef.close();
  }
}
