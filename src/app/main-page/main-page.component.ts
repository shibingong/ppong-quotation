import { Component, ViewChildren, AfterViewInit, QueryList, ElementRef , ChangeDetectorRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

//import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements AfterViewInit {
  @ViewChildren('nameinput')
  inputs!: QueryList<ElementRef>;
  /*itemNameControl = new FormControl();
  itemList: string[] = ['BIKAR 250ML', 'GAS PENUNU BUNSEN HMBG', 'KASA DAWAI', 'PENUNU BUNSEN HMBG', 'PLASTISIN', 'SILINDER PENYUKAT 50ML'];
  
  itemUnitControl = new FormControl();
  unitList: string[] = ['250GM', '500GM', '500ML', 'KTK', 'PC', 'PKT', 'SET', 'UNIT'];*/

  companyname: string = "PP Ong";
  dt: Date = new Date(); 
  currYear = this.dt.getFullYear();

  items: any[] = [];

  constructor(private cd: ChangeDetectorRef) { 
    this.items = [{id: 1, itemname: '', itemunit: '', ppongprice: '', dinamikprice: '', riwaniprice: ''}];
  }
  
  needCent: boolean = false;
  isPPOng: boolean = true;
  
  ngAfterViewInit(): void {
    this.inputs.last && this.inputs.last.nativeElement.focus();
    this.cd.detectChanges();

    this.inputs.changes.subscribe(() => {
      if (this.inputs.length){
        this.inputs.last.nativeElement.focus();
        this.cd.detectChanges();
      }
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
        let rand1 = (element.ppongprice > 20)? 10 : this.randomInteger(20,30);
        let rand2 = this.randomAddOrSubtract(rand1);
        
        console.log('rand1: ' + rand1);
        console.log('rand2: ' + rand2);
        this.needCent = (element.ppongprice <= 10)? true : false;

        element.dinamikprice = this.generateFigure(this.needCent, element.ppongprice, rand1);
        element.riwaniprice = this.generateFigure(this.needCent, element.ppongprice, rand2);
      }
    });
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomAddOrSubtract(input: number) {
    const shouldAdd = Math.random() < 0.5;
    const b = 5;
    return shouldAdd ? input + b : input - b;
  }

  generateFigure(cent: boolean, price: number, rand: number) {
    let result:number;
    if (cent){
      result = Math.round(price * (100 + rand)/100) + (this.randomInteger(1,9)/10);
    }
    else{
      result = Math.round(price * (100 + rand)/100);
    }
    return result;
  }

  onCentToggleChange(event: any) {
    this.needCent = event.checked;
  }

  onPPOngToggleChange(event: any) {
    this.isPPOng = event.checked;
  }
}