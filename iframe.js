const getIframeDocument = () => {
	return cy
	.get('iframe[id=mce_0_ifr]')
	.its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
	return getIframeDocument()
	.its ('body').should('not.be.undefined')
	.then(cy.wrap)
}

describe('iframe test', () => {
	it('Visits the Heroku iframe app', () => {
		cy.visit('http://the-internet.herokuapp.com/iframe')
		
		cy.contains('TinyMCE')
		
		cy.get('iframe[id=mce_0_ifr]')
		getIframeBody().find('p').clear()
		
		getIframeBody().find('p').type('New content being added by Cypress.')

		cy.get('#mceu_24 > #mceu_24-body > #mceu_7 > button > .mce-ico').click()
 
		cy.get('textarea[id=mce_0]').click({force: true})
		getIframeBody().find('p').type('{end}')
		getIframeBody().find('p').type('{rightarrow}{rightarrow}{rightarrow}').dblclick()
//		getIframeBody().find('p').dblclick()
		
//		.find('body').should('have.text', 'Your content goes here.')
//		  .type('Rick Websters text went in this text area', {force: true})
//		  .should('have.value', 'Rick Websters text went in this text area')
		
	})
})