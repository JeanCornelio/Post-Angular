import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelectedModalComponent } from './category-selected-modal.component';

describe('CategorySelectedModalComponent', () => {
  let component: CategorySelectedModalComponent;
  let fixture: ComponentFixture<CategorySelectedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySelectedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySelectedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
