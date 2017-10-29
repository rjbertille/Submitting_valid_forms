import { SubmitPage } from './app.po';

describe('submit App', () => {
  let page: SubmitPage;

  beforeEach(() => {
    page = new SubmitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
