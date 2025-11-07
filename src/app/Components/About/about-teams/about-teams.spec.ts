import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeams } from './about-teams';

describe('AboutTeams', () => {
  let component: AboutTeams;
  let fixture: ComponentFixture<AboutTeams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTeams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTeams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
