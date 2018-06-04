import { Component, OnInit,Inject } from '@angular/core';
import { MatTableDataSource, MatDialogConfig, MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  displayedColumns = ['position', 'name', 'poc', 'busiph','email','action'];
  dataSource: MatTableDataSource<PeriodicElement>;
  selectedRow:PeriodicElement;
  
  lastCloseResult: string;
  lastCloseResult1: string;
  ELEMENT_DATA: PeriodicElement[];
  config: MatDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };
  constructor(public dialog: MatDialog) {
    const Element_DATA: PeriodicElement[] = [
      {position: 1, name: 'Amazon', poc: 'John', busiph: 9139654123, email: 'ggfah@gamial.com'},
      {position: 2, name: 'Alexpierce', poc: 'Alex', busiph: 1231231231, email: 'asds@gmail.com'}
      
    ];
  this.ELEMENT_DATA=Element_DATA;
    
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  }
  open() {
    let dialogRef = this.dialog.open(CustomerDialogComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
    });
  };

Edit() {
    let dialogRef = this.dialog.open(CustomerEditDialogComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
    });
  };
  
View(selectedRow:PeriodicElement){
  this.selectedRow=selectedRow;
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
    'selectedValue':this.selectedRow,
    'columnName':this.displayedColumns
  };
  let dialogRef = this.dialog.open(CustomerViewDialogComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(result => {
   // this.lastCloseResult = result;
  });
  };

  
  
}

@Component({
  selector: 'app-customer-dialog',
  template:`<div class="add-dailog">
  <mat-card-content>
    <mat-card-title>Create New Customer</mat-card-title>  
    
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Business Name</mat-label>
     <input matInput placeholder="Amazon" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
   <mat-label>Physical Address</mat-label>
       <input matInput placeholder="502 Flannel Street" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
   <mat-label>City</mat-label>
     <input matInput placeholder="Kitty City" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 15%;">
   <mat-label>Zip Code</mat-label>
       <input matInput placeholder="66213" type="number">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 7%;">
       <mat-label>State</mat-label>
       <mat-select>
       <mat-option value="KS">KS</mat-option>
       <mat-option value="MO">MO</mat-option>
       <mat-option value="NY">NY</mat-option>
       <mat-option value="FL">FL</mat-option>
       <mat-option value="NJ">NJ</mat-option>
       </mat-select>
   </mat-form-field>
   
   <mat-form-field class="ml-xs mr-xs" style="width: 35%;">
   <mat-label>Business Address</mat-label>
       <input matInput placeholder="502 Flannel Street" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
   <mat-label>City</mat-label>
     <input matInput placeholder="Kitty City" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 15%;">
   <mat-label>Zip Code</mat-label>
       <input matInput placeholder="66213" type="number">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 7%;">
       <mat-label>State</mat-label>
       <mat-select>
       <mat-option value="KS">KS</mat-option>
       <mat-option value="MO">MO</mat-option>
       <mat-option value="NY">NY</mat-option>
       <mat-option value="FL">FL</mat-option>
       <mat-option value="NJ">NJ</mat-option>
       </mat-select>
   </mat-form-field>

   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
   <mat-label>Point of Contact</mat-label>
       <input matInput placeholder="Jack Flannel" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
   <mat-label>PoC Phone</mat-label>
     <input matInput placeholder="(919) 813-1293" type="number">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
   <mat-label>Business Phone</mat-label>
     <input matInput placeholder="(919) 813-1293" type="number">
   </mat-form-field>
   
   <mat-form-field class="ml-xs mr-xs" style="width: 40%;">
   <mat-label>Email</mat-label>
     <input matInput placeholder="jackflanenel@gmail.com" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 40%;">
   <mat-label>Fax</mat-label>
     <input matInput placeholder="(724) 842-8162" type="number">
   </mat-form-field>
   
   
  </mat-card-content>
    <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button></div>`
 })

 export class CustomerDialogComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <CustomerDialogComponent> ){}
}



 
@Component({
  selector: 'app-customer-edit-dialog',
  template:`<div class="add-dailog">
  <mat-card-content>
    <mat-card-title>Edit</mat-card-title>  
    
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Business Name</mat-label>
     <input matInput placeholder="Enter name" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Point Of Contact</mat-label>
       <input matInput placeholder="poc" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Business Phone</mat-label>
     <input matInput placeholder="Enter phone" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Email</mat-label>
       <input matInput placeholder="Enter Email" type="number">
   </mat-form-field>
  
   
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Address</mat-label>
       <input matInput placeholder="Enter Address" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Zip Code</mat-label>
     <input matInput placeholder="Enter code" type="text">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>City</mat-label>
       <input matInput placeholder="Enter City" type="number">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
       <mat-label>State</mat-label>
       <mat-select>
       <mat-option value="KS">KS</mat-option>
       <mat-option value="MO">MO</mat-option>
       <mat-option value="NY">NY</mat-option>
       <mat-option value="FL">FL</mat-option>
       <mat-option value="NJ">NJ</mat-option>
       </mat-select>
   </mat-form-field>

   
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
   <mat-label>Fax</mat-label>
     <input matInput placeholder="(724) 842-8162" type="number">
   </mat-form-field>
   
   
  </mat-card-content>
    <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Save</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button></div>`
 })

 export class CustomerEditDialogComponent {

  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <CustomerEditDialogComponent>) {}
}



@Component({
  selector: 'app-customer-view-dialog',
  template: `<div class="add-dailog">
  <mat-card-content>
  <mat-card-title>Customer Info</mat-card-title>  
  <mat-list role="list">
  <div *ngFor="let tcolumn of tableColumns">
  <mat-list-item role="listitem" *ngIf="tcolumn!=='action'" >

    <div style="width: 50%; float:left;">{{tcolumn}}</div>
    <div style="width: 50%; float:right;" *ngIf="tcolumn!=='per'">{{selectData[tcolumn]}}</div>
    <div style="width: 50%; float:right;"  *ngIf="tcolumn==='per'">{{selectData[tcolumn].toString()}}</div>
  </mat-list-item></div>
</mat-list>   
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Close</button></div>`
})

export class CustomerViewDialogComponent {
  UserMessage = 'Dailog Message!!!';
  selectData:PeriodicElement;
  tableColumns:String[];
  constructor(public dialogRef: MatDialogRef <CustomerViewDialogComponent>, @Inject(MAT_DIALOG_DATA) data ) {
    this.selectData=data.selectedValue;
    this.tableColumns=data.columnName;
  }
}




export interface PeriodicElement {
  name: string;
  position: number;
  poc: string;
  busiph: number;
  email: string;


}