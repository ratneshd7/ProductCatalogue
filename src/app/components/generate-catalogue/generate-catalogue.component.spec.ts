import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCatalogueComponent } from './generate-catalogue.component';

describe('GenerateCatalogueComponent', () => {
  let component: GenerateCatalogueComponent;
  let fixture: ComponentFixture<GenerateCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
