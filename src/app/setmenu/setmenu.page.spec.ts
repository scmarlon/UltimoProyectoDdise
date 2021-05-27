import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetmenuPage } from './setmenu.page';

describe('SetmenuPage', () => {
  let component: SetmenuPage;
  let fixture: ComponentFixture<SetmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
