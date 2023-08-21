import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  companyname = "PP Ong";
  dt = new Date(); 
  currYear = this.dt.getFullYear();

  items: any[] = [];

  constructor() { this.items = [{id: 1, itemname: '', itemunit: '', ppongprice: null, dinamikprice: null, riwaniprice: null}];}

  ngOnInit(): void {
  }

  printPage() {
    window.print();
  }

  addRow() {
    let indexForId = this.items.length + 1
    this.items.push({
      id: indexForId,
      itemname: '',
      itemunit: '',
      ppongprice: '',
      dinamikprice: '',
      riwaniprice: ''
    })
  }

  resetPage(){
    location.reload();
  }
}