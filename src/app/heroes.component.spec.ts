import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: ', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-tour-of-heroes works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('angular2-tour-of-heroes works!');
  }));
});
