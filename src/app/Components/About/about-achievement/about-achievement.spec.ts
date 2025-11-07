import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAchievement } from './about-achievement';

describe('AboutAchievement', () => {
  let component: AboutAchievement;
  let fixture: ComponentFixture<AboutAchievement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAchievement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAchievement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
