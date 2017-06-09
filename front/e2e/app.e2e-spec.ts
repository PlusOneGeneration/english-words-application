import { WordsPage } from './app.po';

describe('words App', () => {
  let page: WordsPage;

  beforeEach(() => {
    page = new WordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
