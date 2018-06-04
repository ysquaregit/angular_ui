import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource,MAT_DIALOG_DATA } from '@angular/material';
import{ConfirmationpopupComponent} from '../confirmationpopup/confirmationpopup.component'
import{ManageuserComponent} from '../manageuser/manageuser.component'
import{UserData} from'../UserData'
import {AdminService} from '../admin.service';
import { iif } from 'rxjs';
import { AdduserComponent } from '../adduser/adduser.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  displayedColumns = ['id', 'email','first_name', 'last_name','role','permissions','action'];
  dataSource: MatTableDataSource<UserData>;
  selectedRow:UserData;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  lastCloseResult: string;
  users:UserData[];
  emptyUser:UserData;
  config: MatDialogConfig = {
    disableClose: true,   
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };
  ngOnInit() {
    this.getuserDatafromService();    
  }


  constructor(public dialog: MatDialog,private adminservice: AdminService) {
    const users_const: UserData[] =  [
      {id: 1,  first_name: 'John', last_name: 'Doe', email: 'john@midc.com',role:'Admin',permissions: 'Container Management, Deadline, Driver Management, RouteRate'},
      { id: 2, first_name: 'alexander', last_name: 'pierce', email: 'alex@midc.com',role:'driver', permissions: 'Driver Management,Route Rate'}
    ];  
    const users_const1: UserData = {id: 0,  first_name: '', last_name: '', email: '',role:'',permissions: ''} ;
   //this.users=users_const;
   this.emptyUser=users_const1;
    //this.dataSource = new MatTableDataSource(this.users);
    this.dataSource = new MatTableDataSource();
  }
  getuserDatafromService():void{    
    this.adminservice.getUserList()
    .subscribe(userlist => {
        this.users = userlist;
        this.dataSource.data =userlist ;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });      
    
  }
  AddUser() {
    let dialogRef = this.dialog.open(AdduserComponent, this.config);
    dialogRef.afterClosed().subscribe(result => { 
      if(result!=undefined) {
      console.log(result);
     // result.permissions=result.permissions.toString();
        this.adminservice.addUserinfo(result).subscribe(
          responseData => {           
            this.users=responseData;
            this.dataSource.data =responseData;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
           
          },error=>{
            console.log(JSON.stringify(error));
          });
      }
      
    });
  };
  manageUser(selectedRow:UserData) {
    let action:String;
    let selectedUser:any;
    if(selectedRow){
      action="E";
      selectedUser=selectedRow;
    }else{
      action='A';
      selectedUser=this.emptyUser;
    }
    
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      'selectedValue':selectedUser,
      'action':action
    };
    let dialogRef = this.dialog.open(ManageuserComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => { 
      if(result!=undefined) {
        console.log(result);
        //result.permissions=result.permissions.toString();
        if(action=="A"){
           this.adminservice.addUserinfo(result).subscribe(
             responseData => {           
              this.users=result;
              this.dataSource.data =result;
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            
             },error=>{
               console.log(JSON.stringify(error));
             });
          //alert(JSON.stringify(result));
          }
          else{
            //alert(JSON.stringify(result));
            this.users=result;
            // this.dataSource.data =result;
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
          }
      }
      
    });
  };
  openViewMode(selectedRow:UserData) {
    this.selectedRow=selectedRow;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      'selectedValue':this.selectedRow,
      'columnName':this.displayedColumns
    };
    let dialogRef = this.dialog.open(UserInfoViewDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
     // this.lastCloseResult = result;
    });
  };
  openEditMode () {
    let dialogRef = this.dialog.open(ManageuserComponent,this.config);
    dialogRef.afterClosed().subscribe(result => {
     // this.lastCloseResult = result;
    })
  };
  openPermissionDailogMode (selectedRow:UserData) {  
    this.selectedRow=selectedRow;  
    
    let dialogRef = this.dialog.open(UserManagePermissionComponent,this.config);
    dialogRef.afterClosed().subscribe(result => {
      if(result.selectedOptions.selected.length>0){
          console.log(result.selectedOptions.selected.map(item => item.value));
          // this.users[selectedRow.id - 1].per=result;
          let updatedRow:UserData=this.users.filter(users => users.email == this.selectedRow.email)[0].permissions=result.selectedOptions.selected.map(item => item.value).toString();
          this.users = this.users.filter(users => users.email !== this.selectedRow.email);  
          this.users.push(updatedRow);
      }
    })
  }
  openConfirmationDailogMode (userEmail:String) {  
    let selectedUserEmail:String=userEmail;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      'selectedValue':selectedUserEmail,     
    };   
    let dialogRef = this.dialog.open(ConfirmationpopupComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
         alert(result.selectedValue);
         //deleteUser(result.selectedValue)
         this.adminservice.deleteUser(result.selectedValue).subscribe(
          responseData => {
            console.log(JSON.stringify(responseData));
            this.users = this.users.filter(users => users.email !== result.selectedValue);          
            this.dataSource.data =this.users ;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
         );
      }
        
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

@Component({
  selector: 'app-user-info-view-dialog',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>User Info</mat-card-title>  
  <mat-list role="list">
  <div *ngFor="let tcolumn of tableColumns">
  <mat-list-item role="listitem" *ngIf="tcolumn!=='action' && tcolumn!== 'id'" >

    <div style="width: 50%; float:left;">{{tcolumn}}</div>
    <div style="width: 50%; float:right;">{{selectData[tcolumn]}}</div>   
  </mat-list-item></div>
</mat-list>   
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Close</button></div>`
})

export class UserInfoViewDialogComponent {
  UserMessage = 'Dailog Message!!!';
  selectData:UserData;
  tableColumns:String[];
  constructor(public dialogRef: MatDialogRef <UserInfoViewDialogComponent>, @Inject(MAT_DIALOG_DATA) data ) {
    this.selectData=data.selectedValue;
    this.tableColumns=data.columnName;
  }
}


@Component({
  selector: 'app-user-edit-dialog',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Edit</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>User Name</mat-label>
     <input matInput type="text" value="Johndoe123">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>First  Name</mat-label>
     <input matInput type="text" value="John">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Last Name</mat-label>
     <input matInput type="text" value="Doe">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Email</mat-label>
     <input matInput type="text" value="John@gmail.com">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>User type</mat-label>
     <mat-select placeholder="Select an option">
     <mat-option value="Admin">Admin</mat-option>
     <mat-option value="Order Entry">Order Entry</mat-option>
     <mat-option value="Dispatch">Dispatch</mat-option>
     <mat-option value="Invoicing">Invoicing</mat-option>
     <mat-option value= "Driver" > Driver</mat-option>
     </mat-select>
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Permissions</mat-label>
     <input matInput type="text" value="Container Mangement,Deadline,Driver Mangement">
   </mat-form-field>
   
   
  
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Save</button></div>`
})

export class UserEditDialogComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <UserEditDialogComponent> ){}
}

@Component({
  selector: 'app-user-permission-dialog',
  template: `<div class="add-dailog">
  <mat-card-title fxLayout="row" fxLayoutAlign="start center">
  Manage Permission
 </mat-card-title>  

<mat-card-content>
<mat-selection-list  #permissions>
<mat-list-option *ngFor="let items of permissionList" [value]="items">
  {{items}}
</mat-list-option>
</mat-selection-list>
   
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt  mr-1" color="blue" (click)="dialogRef.close(permissions)">Save</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt mr-1" color="grey" (click)="dialogRef.close()">Cancel</button></div>`
})

export class UserManagePermissionComponent {
  permissionList = ['Container Management', 'Deadline', 'Driver Management', 'Route Rate', 'Driver Rates', 'Chassis Rental','Accessorial Charges'];
  constructor(public dialogRef: MatDialogRef <UserManagePermissionComponent> ) {}
}


  