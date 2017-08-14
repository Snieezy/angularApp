import { UdemyCourseProjectPage } from './app.po';

describe('udemy-course-project App', () => {
  let page: UdemyCourseProjectPage;

  beforeEach(() => {
    page = new UdemyCourseProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
