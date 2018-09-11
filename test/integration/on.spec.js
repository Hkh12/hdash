describe('On directive', () => {
	it('works', () => {
		cy.window().then(function({ instance }) {
			cy.stub(instance, 'log');
			cy.get('#on button').click();
			cy.wrap(instance).its('log').should('be.calledOnce');
		});
	});
	it('works once when using .once', () => {
		cy.window().then(function({ instance }) {
			cy.stub(instance, 'log');
			cy.get('#on button').click();
			cy.wrap(instance).its('log').should('not.be.called');
		});
	});
	it('works when using shortcuts', () => {
		cy.get('#model').within(() => {
			cy
				.get('button').click()
				.get('input').first().should('have.value', '');
		});
	});
});