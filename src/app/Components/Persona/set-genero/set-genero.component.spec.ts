import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGeneroComponent } from './set-genero.component';

describe('SetGeneroComponent', () => {
  let component: SetGeneroComponent;
  let fixture: ComponentFixture<SetGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
