import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdenarPage } from './ordenar.page';

describe('OrdenarPage', () => {
  let component: OrdenarPage;
  let fixture: ComponentFixture<OrdenarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdenarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
