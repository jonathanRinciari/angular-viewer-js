import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularViewerJsComponent } from './angular-viewer-js.component';

describe('AngularViewerJsComponent', () => {
  let component: AngularViewerJsComponent;
  let fixture: ComponentFixture<AngularViewerJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularViewerJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularViewerJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
