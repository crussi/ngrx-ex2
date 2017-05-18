import { NgrxEx2Page } from './app.po';

describe('ngrx-ex2 App', () => {
  let page: NgrxEx2Page;

  beforeEach(() => {
    page = new NgrxEx2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
