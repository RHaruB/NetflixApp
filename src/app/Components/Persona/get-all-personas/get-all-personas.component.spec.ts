import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPersonasComponent } from './get-all-personas.component';

describe('GetAllPersonasComponent', () => {
  let component: GetAllPersonasComponent;
  let fixture: ComponentFixture<GetAllPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
