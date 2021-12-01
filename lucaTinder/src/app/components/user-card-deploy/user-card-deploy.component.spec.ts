import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDeployComponent } from './user-card-deploy.component';

describe('UserCardDeployComponent', () => {
  let component: UserCardDeployComponent;
  let fixture: ComponentFixture<UserCardDeployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardDeployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
