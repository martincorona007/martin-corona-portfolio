import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetButtonComponent } from './sheet-button.component';

describe('SheetButtonComponent', () => {
  let component: SheetButtonComponent;
  let fixture: ComponentFixture<SheetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
