import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSideBarComponent } from './l-side-bar.component';

describe('LSideBarComponent', () => {
  let component: LSideBarComponent;
  let fixture: ComponentFixture<LSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
