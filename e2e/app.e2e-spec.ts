import { ComparedbPage } from './app.po';

describe('comparedb App', () => {
  let page: ComparedbPage;

  beforeEach(() => {
    page = new ComparedbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
