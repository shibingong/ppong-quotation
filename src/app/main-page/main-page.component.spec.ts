import { ChangeDetectorRef } from '@angular/core';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;

  beforeEach(() => {
    const changeDetector = {
      detectChanges: () => undefined,
    } as ChangeDetectorRef;

    component = new MainPageComponent(changeDetector);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with one empty item', () => {
    expect(component.items).toEqual([
      {
        id: 1,
        itemname: '',
        itemunit: '',
        ppongprice: '',
        dinamikprice: '',
        riwaniprice: '',
      },
    ]);
  });

  it('should add rows with sequential ids', () => {
    component.addRow();
    component.addRow();

    expect(component.items.map(item => item.id)).toEqual([1, 2, 3]);
  });

  it('should generate both whole and fractional figures', () => {
    spyOn(component, 'randomInteger').and.returnValue(5);

    expect(component.generateFigure(false, 10, 20)).toBe(12);
    expect(component.generateFigure(true, 10, 20)).toBe(12.5);
  });

  it('should apply different markups to the comparison quotes', () => {
    component.items = [
      {
        id: 1,
        itemname: 'PEN',
        itemunit: 'PC',
        ppongprice: 100,
        dinamikprice: '',
        riwaniprice: '',
      },
    ];
    spyOn(component, 'randomAddOrSubtract').and.returnValue(15);

    component.randomQuote();

    expect(component.items[0].dinamikprice).toBe(110);
    expect(component.items[0].riwaniprice).toBe(115);
  });
});
