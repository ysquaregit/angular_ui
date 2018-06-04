import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS : Menu[] = [
  {
    state: 'home',
    name: 'Dashboard',
    type: 'link',
    icon: 'dashboard'
  },
  {
    state: 'admin',
    name: 'Admin Features',
    type: 'sub',
    icon: 'supervisor_account',    
    children: [
      {state: 'user', name: 'User Management'},
      {state: 'container', name: 'Container Management'},
      {state: 'customer', name: 'Customer Management'},
      {state: 'deadline', name: 'Deadline'},
      {state: 'location', name: 'Location Management'},
      {state: 'driver', name: 'Driver Management'}
    ]
  },
  {
    state: 'rate',
    name: 'Rate Management',
    type: 'sub',
    icon: 'attach_money',   
    children: [
      {state: 'route', name: 'Route Rate'},
      {state: 'accesorial', name: 'Accesorial Charges'},
      {state: 'driverrates', name: 'Driver Rates'},
      {state: 'chassis', name: 'Chassis Rental'}
    ]
  },
  {
    state: 'equipment',
    name: 'Equipment Management',
    type: 'link',
    icon: 'build'
  },
  {
    state: 'order',
    name: 'Order Management',
    type: 'link',
    icon: 'shopping_cart'
  },
  {
    state: 'invoice',
    name: 'Invoice',
    type: 'link',
    icon: 'print'
  },
  {
    state: 'dispatch',
    name: 'Dispatch',
    type: 'link',
    icon: 'explore'
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
