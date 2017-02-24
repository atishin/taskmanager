import { TaskmanagerPage } from './app.po';

describe('taskmanager App', () => {
  let page: TaskmanagerPage;

  beforeEach(() => {
    page = new TaskmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
