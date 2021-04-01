import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftviewComponent } from './swiftview.component';

describe('SwiftviewComponent', () => {
  let component: SwiftviewComponent;
  let fixture: ComponentFixture<SwiftviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
