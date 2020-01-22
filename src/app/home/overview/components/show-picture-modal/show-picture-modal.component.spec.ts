import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPictureModalComponent } from './show-picture-modal.component';

describe('ShowPictureModalComponent', () => {
  let component: ShowPictureModalComponent;
  let fixture: ComponentFixture<ShowPictureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPictureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
