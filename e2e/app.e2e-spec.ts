import { BaltaIoPage } from './app.po';

describe('balta-io App', function() {
  let page: BaltaIoPage;

  beforeEach(() => {
    page = new BaltaIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
