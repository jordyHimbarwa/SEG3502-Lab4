import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.userForm.valid).toBeFalse();
  });

  it('should reject a phone number that is not 10 digits', () => {
    component.userForm.get('telephone')?.setValue('12345');
    expect(component.userForm.get('telephone')?.valid).toBeFalse();
  });

  it('should be valid with correct values', () => {
    component.userForm.setValue({
      prenom: 'John', nom: 'Doe', email: 'john@example.com', telephone: '6131234567',
    });
    expect(component.userForm.valid).toBeTrue();
  });

  it('should show the phone error when the phone field is touched and invalid', () => {
    const ctrl = component.userForm.get('telephone')!;
    ctrl.setValue('abc');
    ctrl.markAsTouched();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('10 chiffres');
  });
});
