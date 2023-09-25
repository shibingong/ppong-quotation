import { Component, OnInit, ViewChildren, AfterViewInit, OnDestroy,QueryList, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

//import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChildren('nameinput')
  inputs!: QueryList<ElementRef>;
  /*itemNameControl = new FormControl();
  itemList: string[] = ['BIKAR 250ML', 'GAS PENUNU BUNSEN HMBG', 'KASA DAWAI', 'PENUNU BUNSEN HMBG', 'PLASTISIN', 'SILINDER PENYUKAT 50ML'];
  
  itemUnitControl = new FormControl();
  unitList: string[] = ['250GM', '500GM', '500ML', 'KTK', 'PC', 'PKT', 'SET', 'UNIT'];*/

  companyname = "PP Ong";
  dt = new Date(); 
  currYear = this.dt.getFullYear();

  items: any[] = [];

  constructor() { this.items = [{id: 1, itemname: '', itemunit: '', ppongprice: '', dinamikprice: '', riwaniprice: ''}];}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inputs.last && this.inputs.last.nativeElement.focus();

    this.inputs.changes.subscribe(() => {
      if (this.inputs.length)
        this.inputs.last.nativeElement.focus();
    })
  }

  printPage() {
    window.print();
  }

  addRow() {
    let indexForId = this.items.length + 1;
    this.items.push({
      id: indexForId,
      itemname: '',
      itemunit: '',
      ppongprice: '',
      dinamikprice: '',
      riwaniprice: ''
    });
  }


  resetPage(){
    location.reload();
  }

  randomQuote(){
    this.items.forEach(element => {
      if((element.itemname != '') && (element.itemunit != '')){
        let rand1 = this.randomInteger(10,15);
        let rand2 = this.randomInteger(10,15);

        element.dinamikprice = Math.round(element.ppongprice * (100 + rand1)/100/ 0.1) * 0.1;
        element.riwaniprice = Math.round(element.ppongprice * (100 + rand2)/100/ 0.1) * 0.1;
      }
    });
  }

  randomInteger(min: number, max: number) {
    return Math.random() * (max - min + 1) + min;
  }
}