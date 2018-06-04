import { Component, OnInit } from '@angular/core';
import {MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Time } from '@angular/common';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})

export class DriverComponent {
  displayedColumns = ['select', 'truck', 'driver', 'name', 'current', 'sts', 'type', 'shipper', 'consig', 'city', 'date', 'time', 'equip', 'phone', 'nextel', 'truck1', 'sft', 'haz', 'lic', 'ins', 'med' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

export interface PeriodicElement {
  truck: string;
  driver: string;
  name: string;
  current: string;
  sts: string;
  type: string;
 // shipper: Text;
  consig: string;
  city: string;
  date: string;
  time: string;
  equip: string;
  phone: number;
  // nextel: number;
  // truck1: string;
  // sft: string;
  // haz: string;
  lic: string;
  ins: string;
  med: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {truck: 'c423', driver: 'smith', name: 'mike smith', current: 'IBI1238', sts: 'AV', type: 'FCL', consig: 'Mid Citi', city: 'Saintjo',date:'1/05', time: '19:15', equip: 'Truck', phone: 312567,lic: '12/12/12', ins: '12/12/12', med: '12/12/12' },
  {truck: 'c523', driver: 'smith', name: 'mike smith', current: 'IBI1238', sts: 'AV', type: 'FCL', consig: 'Mid Citi', city: 'Saintjo',date:'1/05', time: '19:15', equip: 'Truck', phone: 312567,lic: '12/12/12', ins: '12/12/12', med: '12/12/12' },
  
];