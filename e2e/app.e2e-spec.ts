import { TProjectPage } from './app.po';

describe('t-project App', function() {
  let page: TProjectPage;

  beforeEach(() => {
    page = new TProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
