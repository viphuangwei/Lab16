import { Lab15Page } from './app.po';

describe('lab15 App', function() {
  let page: Lab15Page;

  beforeEach(() => {
    page = new Lab15Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
