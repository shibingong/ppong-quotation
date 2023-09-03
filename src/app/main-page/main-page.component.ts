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

  constructor() { this.items = [{id: 1, itemname: '', itemunit: '', ppongprice: '', dinamikprice: '', riwaniprice: ''}];}

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

  randomQuote(){
    this.items.forEach(element => {
      if((element.itemname != '') && (element.itemunit != '')){
        let rand1 = this.randomInteger(10,15);
        let rand2 = this.randomInteger(10,15);

        element.dinamikprice = Math.round(element.ppongprice * (100 + rand1)/100 / 0.1) * 0.1;
        element.riwaniprice = Math.round(element.ppongprice * (100 + rand2)/100 / 0.1) * 0.1;
      }
    });
  }

  randomInteger(min: number, max: number) {
    return Math.random() * (max - min + 1) + min;
  }
}