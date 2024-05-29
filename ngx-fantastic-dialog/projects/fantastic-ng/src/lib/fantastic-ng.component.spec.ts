import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasticNgComponent } from './fantastic-ng.component';

describe('FantasticNgComponent', () => {
  let component: FantasticNgComponent;
  let fixture: ComponentFixture<FantasticNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FantasticNgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FantasticNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
