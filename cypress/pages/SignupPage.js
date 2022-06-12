
class SignupPage {

    acessar() {
        cy.visit('/')
        cy.get('a[href="/register').click()
    }

    preencherForm(user) {
        cy.get('input[name="name"]').type(user.name)
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="birthday"]').type(user.data)
        cy.get('input[name="cpf"]').type(user.cpf)
        cy.get('input[name="password"]').type(user.password)
        cy.get('input[name="passwordConfirmation"]').type(user.passconfirm)
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    validacao() {
        cy.contains('button', 'Sair').should('be.visible')
    }

    alerta(expectedMessage) {
        cy.contains('span.input-error', expectedMessage).should('be.visible')
    }

}

export default new SignupPage;

