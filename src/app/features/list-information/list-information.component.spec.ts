import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInformationComponent } from './list-information.component';

describe('ListInformationComponent', () => {
  let component: ListInformationComponent;
  let fixture: ComponentFixture<ListInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInformationComponent]
    });
    fixture = TestBed.createComponent(ListInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
