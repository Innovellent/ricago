import { RicagoPage } from './app.po';

describe('ricago App', () => {
  let page: RicagoPage;

  beforeEach(() => {
    page = new RicagoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
