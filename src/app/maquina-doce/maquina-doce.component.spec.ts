import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaDoceComponent } from './maquina-doce.component';

describe('MaquinaDoceComponent', () => {
  let component: MaquinaDoceComponent;
  let fixture: ComponentFixture<MaquinaDoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaDoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaDoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
