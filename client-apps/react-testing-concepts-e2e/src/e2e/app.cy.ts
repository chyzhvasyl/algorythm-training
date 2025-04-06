import { getGreeting } from '../support/app.po';

describe('react-testing-concepts-e2e', () => {
  beforeEach(() => cy.visit('http://localhost:4202/'));

  it('should display welcome message', () => {
    getGreeting().contains(/Welcome/);
  });
});
