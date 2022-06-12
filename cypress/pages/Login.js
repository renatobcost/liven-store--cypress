
class login {

    acessar() {
        cy.visit('/')
        cy.get('a[href="/login').click()
    }

    preencherForm(user) {
        
        cy.get('input[name="email"]').should('be.visible')
        cy.get('input[name="email"]').type(user.email);
        cy.get('input[name="password"]').type(user.password, {log: false});
    }

    submit() {
        cy.contains('button', 'Entrar').click()
    }

    validacao() {
        cy.contains('button', 'Sair').should('be.visible')
    }

    alerta(expectedMessage) {
        cy.contains('span.input-error', expectedMessage).should('be.visible')
    }

}

export default new login;
