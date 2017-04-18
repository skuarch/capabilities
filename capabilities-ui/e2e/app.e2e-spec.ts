import { CapabilitiesPage } from './app.po';

describe('capabilities App', () => {
  let page: CapabilitiesPage;

  beforeEach(() => {
    page = new CapabilitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
