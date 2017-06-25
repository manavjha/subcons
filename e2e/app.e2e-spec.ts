import { Untitled13Page } from './app.po';

describe('untitled13 App', function() {
  let page: Untitled13Page;

  beforeEach(() => {
    page = new Untitled13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
