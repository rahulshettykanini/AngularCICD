import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'My Angular App'`, () => {
    expect(component.title).toEqual('My Angular App');
  });

  it('should render title in an h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My Angular App');
  });

  it(`should have a message containing 'Angular testing with Jasmine and Karma!'`, () => {
    expect(component.message).toContain('Angular testing with Jasmine and Karma!');
  });

  it('should render message in a <p> tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Angular testing with Jasmine and Karma!');
  });
});