describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174')
  })
  
  it('1 + 1', () => {

    cy.contains('1').click()
    cy.contains('+').click()
    cy.contains('1').click()
    cy.get('input').should('have.value', '1+1')
    cy.contains('=').click()
    cy.contains('Resultado: 2').should('exist');
  })


  it('1000-7', () => {

    cy.contains('1').click()
    cy.contains('0').click()
    cy.contains('0').click()
    cy.contains('0').click()
    cy.contains('-').click()
    cy.contains('7').click()
    cy.get('input').should('have.value', '1000-7')
    cy.contains('=').click()
    cy.contains('Resultado: 993').should('exist');
  })


  it('7 * -8', () => {

    cy.contains('7').click()
    cy.contains('*').click()
    cy.contains('-').click()
    cy.contains('8').click()
    cy.get('input').should('have.value', '7*-8')
    cy.contains('=').click()
    cy.contains('Resultado: -56').should('exist');
  })


  it('-15.3 / 3.8', () => {

    cy.contains('-').click()
    cy.contains('1').click()
    cy.contains('5').click()
    cy.contains('.').click()
    cy.contains('3').click()
    cy.contains('/').click()
    cy.contains('3').click()
    cy.contains('.').click()
    cy.contains('8').click()
    cy.get('input').should('have.value', '-15.3/3.8')
    cy.contains('=').click()
    cy.contains('Resultado: -4.026315789473685').should('exist');
  })
  

  it('Numero valido', () => {

    cy.contains('3').click()
    cy.contains('.').click()
    cy.contains('.').click()
    cy.get('input').should('have.value', '3..')
    cy.contains('=').click()
    cy.contains('Error: debe ingresar un numero valido').should('exist');
  })
  

  it('Numero valido', () => {

    cy.contains('=').click()
    cy.contains('Error: debe ingresar un dato').should('exist');
  })
})