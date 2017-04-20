import { BuildItAngularPage } from './app.po';

describe('build-it-angular App', () => {
  let page: BuildItAngularPage;

  beforeEach(() => {
    page = new BuildItAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
